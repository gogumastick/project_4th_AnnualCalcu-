import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined, SettingOutlined, SyncOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Button, Breadcrumb } from 'antd';
// import Modules from './Modules';

import { sideBarData } from '@/utill/controllor';
import { sideBarCustom } from '@/utill/controllor';
import { sideBarTop, sideBarBottom } from '@/utill/controllor';
// import { ServicePageLayOutStyled } from './styled';
import { useRouter } from 'next/router';
import { ServicePageLayOutStyled } from './styled';
import { useRecoilValue } from 'recoil';
import { purchaseListState } from '@/utill/atom';
// import MngModule from './Modules/MngModule';
console.log('test', sideBarData);

// 타입 정의
type MenuData = {
    id: number;
    name: string;
    icon?: React.ReactNode;
    url?: string;
    checked?: boolean;
    Children?: MenuData[];
};


const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
const getMenuItems = (data: MenuData[], parentId: string = ''): MenuItem[] => {
    return data.map((item) => {
        // 고유한 key 생성
        const key = parentId ? `${parentId}-${item.id}` : `${item.id}`;
        if (item.Children && item.Children.length > 0) {
            // 하위 메뉴가 있는 경우 서브메뉴로 처리
            return {
                // 고유한 key 값
                key: key,
                label: item.name,
                icon: item.icon,
                // 재귀적으로 하위 메뉴에 고유한 key 값 전달
                children: getMenuItems(item.Children, key),
            };
        } else {
            // 하위 메뉴가 없는 경우 단일 메뉴로 처리
            return {
                key: key,
                label: item.name,
                icon: item.icon,
                url: item.url,
            };
        }
    });
};

const ServicePageLayOut = ({ children }: { children: React.ReactNode }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const purchaseList = useRecoilValue(purchaseListState);
    console.log('ServicePageLayOut의 formik ', purchaseList);


    const checkedModuleIds = [
            ...Object.entries(purchaseList.modules),
            ...Object.entries(purchaseList.customModules)
        ]
        .filter(([, module]) => module.checked)
        .map(([id]) => Number(id));
        console.log('checkedModuleIds',checkedModuleIds);
        
    const fixedModules: MenuData[] = [
        ...sideBarData
            .filter((module) => checkedModuleIds.includes(module.id))
            .map((module) => ({
                ...module,
                Children: module.Children || [], // Children 속성 유지
            })),
        ...sideBarCustom
            .filter((module) => checkedModuleIds.includes(module.id))
            .map((module) => ({
                ...module,
                Children: module.Children || [], // Children 속성 유지
            })),
    ];
    
    const allMenuItems: MenuData[] = [
        ...sideBarTop,
        // ...sideBarData,
        ...fixedModules, 
        // ...sideBarCustom,
        ...sideBarBottom,
    ];
  
    console.log('allMenuItems', allMenuItems);

    // 토글버튼으로 sideBar여닫기
    const [collapsed, setCollapsed] = useState<boolean>(false);
    // console.log('sideBar여닫기',collapsed);
    // 메뉴 선택시 다른 메뉴 닫기
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    // console.log('선택된 openKeys는?', openKeys);

    const [breadcrumbItems, setBreadcrumbItems] = useState([{ title: 'Home' }]);

    const router = useRouter();
    const path = router.asPath;
    // 메인 페이지일 때는 단순히 children만 렌더링
    if (path === '/' || path === '/login' || path === '/signup') {
        return <>{children}</>;
    }

    // MenuData 배열에서 모든 URL을 재귀적으로 수집하는 함수
    const flattenMenuUrls = (menuData: MenuData[]): string[] => {
        return menuData.reduce((acc: string[], item) => {
            if (item.url) acc.push(item.url); // URL 추가
            if (item.Children) acc.push(...flattenMenuUrls(item.Children)); // Children이 있는 경우 재귀 호출
            return acc;
        }, []);
    };


    const allowedPaths = flattenMenuUrls(allMenuItems);

    const isPathAllowed =
        allowedPaths.some((allowedPath) => path.startsWith(allowedPath)) || path.startsWith('/service');

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // 마지막 키만 유지하여 한 번에 하나의 메뉴만 열리게 설정
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys(keys.length ? [keys[keys.length - 1]] : []);

    };
    

    // 메뉴 선택했을 때 이동할 URL 선택
    const choiceMenu = (menuInfo: { key: string }) => {
        // 클릭된 메뉴 항목의 key
        const key = menuInfo.key;
        // key 로그 출력
        // console.log('선택한 메뉴 key:', key);


        // key에 맞는 항목 찾기
        const selectedItem = findMenuItemByKey(key, allMenuItems);
        // console.log('선택된 메뉴 항목:', selectedItem);

        if (selectedItem && selectedItem.url) {
            // URL이 존재할 경우 출력
            // console.log('url주소:', selectedItem.url);
            // 해당 URL로 이동
            router.push(selectedItem.url);
        } else {
            alert('URL을 찾지 못했습니다. 등록된 URL을 확인해 주세요');
            console.log('URL을 찾지 못했습니다.');
        }
        const breadcrumbData = buildBreadcrumbData(key, allMenuItems);
        setBreadcrumbItems(breadcrumbData);
    };

    // key를 이용해 sideBarData에서 해당 메뉴 항목 찾기
    const findMenuItemByKey = (key: string, items: MenuData[]): MenuData | null => {
        const keyParts = key.split('-');
        let currentItems = items;

        for (const part of keyParts) {
            const foundItem = currentItems.find((item) => item.id.toString() === part);
            if (!foundItem) return null; // 항목을 찾지 못하면 null 반환

            // Children이 존재하면 재귀적으로 탐색
            if (foundItem.Children && foundItem.Children.length > 0) {
                currentItems = foundItem.Children;
            } else {
                return foundItem; // 자식이 없는 경우 해당 항목 반환
            }
        }
        return null;
    };

    // Breadcrumb을 위한 부모-자식 구조 찾기
    const buildBreadcrumbData = (key: string, items: MenuData[]): { title: string }[] => {
        const breadcrumb = [];
        let currentItems = items;

        const keyParts = key.split('-');
        for (const part of keyParts) {
            const foundItem = currentItems.find((item) => item.id.toString() === part);
            if (foundItem) {
                breadcrumb.push({ title: foundItem.name });
                if (foundItem.Children) {
                    currentItems = foundItem.Children;
                }
            }
        }
        return breadcrumb;
    };

    return (
        <ServicePageLayOutStyled>
            <div className={`${isPathAllowed || path === '/service' ? '' : 'noneServicePageLayOut'}`}>
                <Layout>
                    <Header className="layoutHeader">
                        <div className="headFront">
                            {/* sideBar여닫는 버튼 */}
                            <Button type="primary" onClick={toggleCollapsed} className="toggleBtn">
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </Button>
                            <div className="logo">회사 로고나 이름 위치</div>
                        </div>
                        <div className="headEnd">
                            <LogoutOutlined className="headEndBtn" />
                            <SettingOutlined className="headEndBtn" />
                            <SyncOutlined className="headEndBtn" />
                        </div>
                    </Header>
                    <Content style={{}}>
                        <Layout
                            // className="darkLayout"
                            style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}
                        >
                            <Sider
                                collapsed={collapsed}
                                width={256}
                                // 메뉴가 접혔을 때 너비 설정
                                collapsedWidth={75}
                                style={{ background: colorBgContainer }}
                            >
                                
                                <Menu
                                    mode="inline"
                                    theme="dark"
                                    // sideBarData 전체를 기반으로 메뉴 생성
                                    openKeys={openKeys}
                                    onOpenChange={handleOpenChange}
                                    items={getMenuItems(allMenuItems)}
                                    onClick={choiceMenu}
                                />
                                
                            </Sider>

                            {/* <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content> */}
                            <Layout style={{ padding: '0 24px 24px' }}>
                                {/* Content 상단에 sideBar선택 위치 */}
                                <Breadcrumb items={breadcrumbItems} style={{ margin: '16px 0' }} />
                                <Content
                                    style={{
                                        padding: 24,
                                        margin: 0,
                                        minHeight: 280,
                                        background: colorBgContainer,
                                        borderRadius: borderRadiusLG,
                                    }}
                                >
                                    {children}
                                </Content>
                            </Layout>
                        </Layout>
                    </Content>
                </Layout>
            </div>
        </ServicePageLayOutStyled>
    );
};
export default ServicePageLayOut;
