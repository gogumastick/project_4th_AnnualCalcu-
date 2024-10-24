import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined, SettingOutlined,SyncOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Button, Breadcrumb } from 'antd';
// import Modules from './Modules';

import { sideBarData } from '@/utill/controllor';
// import { ServicePageLayOutStyled } from './styled';
import { useRouter } from 'next/router';
import { ServicePageLayOutStyled } from './styled';
// import MngModule from './Modules/MngModule';

// 타입 정의
type MenuData = {
    id: number;
    name: string;
    icon?: React.ReactNode;
    url?: string;
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

// const getMenuItems = (data: any[]): MenuItem[] => {
//     return data.map((item) => {
//         if (item.Children && item.Children.length > 0) {
//             // 하위 메뉴가 있는 경우 서브메뉴로 처리
//             return {
//                 key: `${item.id}`,
//                 label: item.name,
//                 icon: item.icon, // 아이콘 반영
//                 children: item.Children.map((child: any) => ({
//                     key: child.id.toString(),
//                     label: child.name,
//                     icon: child.icon, // 아이콘 반영
//                 })),
//             };
//         } else {
//             // 하위 메뉴가 없는 경우 단일 메뉴로 처리
//             return {
//                 key: item.id.toString(),
//                 label: item.name,
//                 icon: item.icon, // 아이콘 반영
//             };
//         }
//     });
// };

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//     const key = String(index + 1);

//     return {
//         key: `sub${key}`,
//         icon: React.createElement(icon),
//         label: `subnav ${key}`,
//         children: new Array(4).fill(null).map((_, j) => {
//             const subKey = index * 4 + j + 1;
//             return {
//                 key: subKey,
//                 label: `option${subKey}`,
//             };
//         }),
//     };
// });

const ServicePageLayOut = ({ children }: { children: React.ReactNode }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState<boolean>(false);
    // console.log('sideBar여닫기',collapsed);
    const [breadcrumbItems, setBreadcrumbItems] = useState([{ title: 'Home' }]);

    const router = useRouter();
    const path = router.asPath;
    // 메인 페이지일 때는 단순히 children만 렌더링
    if (path === '/' || path === '/login'|| path === '/signup') {
        return <>{children}</>;
    }
    // 현재 경로(path)가 allowedPaths 배열에 포함되어 있는지 검사
    const allowedPaths = sideBarData.reduce((acc: string[], item) => {
        if (item.url) acc.push(item.url);
        if (item.Children) {
            const childUrls = item.Children.map((child) => child.url);
            acc.push(...childUrls);
        }
        return acc;
    }, []);

    const isPathAllowed = allowedPaths.includes(path);

    // sideBar List 하단 Menu 선택
    const defaultSelectedId = sideBarData[0]?.id.toString();
    // console.log('sideBar defaultSelectedId', defaultSelectedId);

    const defaultOpenId = sideBarData[0]?.id.toString();
    // console.log('sideBar defaultOpenId', defaultOpenId);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // 메뉴 선택했을 때 이동할 URL 선택

    const choiceMenu = (menuInfo: { key: string }) => {
        // 클릭된 메뉴 항목의 key
        const key = menuInfo.key;
        // key 로그 출력
        // console.log('선택한 메뉴 key:', key);

        // key에 맞는 항목 찾기
        const selectedItem = findMenuItemByKey(key, sideBarData);
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
        const breadcrumbData = buildBreadcrumbData(key, sideBarData);
        setBreadcrumbItems(breadcrumbData);
    };

    // key를 이용해 sideBarData에서 해당 메뉴 항목 찾기
    const findMenuItemByKey = (key: string, items: MenuData[]): MenuData | null => {
        // key를 부모ID-자식ID로 분리
        const keyParts = key.split('-');
        let currentItems = items;

        for (const part of keyParts) {
            const foundItem = currentItems.find((item) => item.id.toString() === part);
            // 항목을 찾지 못하면 null 반환
            if (!foundItem) return null;
            if (foundItem.Children) {
                // 하위 Children 항목으로 이동
                currentItems = foundItem.Children;
            } else {
                // 마지막 항목 반환
                return foundItem;
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
                        <LogoutOutlined className="headEndBtn"/>
                        <SettingOutlined className="headEndBtn"/>
                        <SyncOutlined className="headEndBtn"/>
                        
                        </div>
                    </Header>
                    <Content style={{}}>
                        <Layout style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}>
                            <Sider
                                collapsed={collapsed}
                                width={256}
                                // 메뉴가 접혔을 때 너비 설정
                                collapsedWidth={80}
                                style={{ background: colorBgContainer }}
                            >
                                {/* <MngModule/> */}
                                {/* <Modules/> */}

                                <Menu
                                    defaultSelectedKeys={[defaultSelectedId]}
                                    defaultOpenKeys={[defaultOpenId]}
                                    mode="inline"
                                    theme="dark"
                                    // inlineCollapsed={collapsed}
                                    // sideBarData 전체를 기반으로 메뉴 생성
                                    items={getMenuItems(sideBarData)}
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
