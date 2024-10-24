import {
    CaretRightOutlined,
    HomeOutlined,
    FormOutlined,
    ContactsOutlined,
    SettingOutlined,
    ShopOutlined,
} from '@ant-design/icons';

export const sideBarData = [
    {
        id: 1,
        name: '홈(N/A)',
        icon: <HomeOutlined />,
        url: '/service/home',
    },
    {
        id: 2,
        name: '기안서(N/A)',
        icon: <FormOutlined />,
        Children: [
            {
                id: 1,
                name: '기안서 작성',
                icon: <CaretRightOutlined />,
                url: '/service/documents/writingDocu',
            },
            {
                id: 2,
                name: '미결재',
                icon: <CaretRightOutlined />,
                url: '/service/documents/unapprovedDocu',
            },
            {
                id: 3,
                name: '결재현황',
                icon: <CaretRightOutlined />,
                url: '/service/documents/approvedDocu',
            },
            {
                id: 4,
                name: '결재완료',
                icon: <CaretRightOutlined />,
                url: '/service/documents/totalDocu',
            },
        ],
    },
    {
        id: 3,
        name: '연차(N/A)',
        icon: <ContactsOutlined />,
        Children: [
            {
                id: 1,
                name: '휴가현황',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/vacationStatus',
            },
            {
                id: 2,
                icon: <CaretRightOutlined />,
                name: '잔여연차',
                url: '/service/vacation/remainingVacation',
            },
            {
                id: 3,
                name: '휴가신청',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/requestedVacation',
            },
            {
                id: 4,
                name: '미결재',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/unapprovedVacation',
            },
            {
                id: 5,
                name: '결재현황',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/approvedVacation',
            },
            {
                id: 6,
                name: '알림현황',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/notiVacation',
            },
        ],
    },
    {
        id: 4,
        name: '관리(개발ing)',
        icon: <SettingOutlined />,
        Children: [
            {
                id: 1,
                name: '직원',
                icon: <CaretRightOutlined />,
                url: '/service/mng/employeeMng',
            },
            {
                id: 2,
                name: '조직',
                icon: <CaretRightOutlined />,
                url: '/service/mng/organizationMng',
            },
            {
                id: 3,
                name: '연차설정',
                icon: <CaretRightOutlined />,
                url: '/service/mng/vactionMng',
            },
        ],
    },
    {
        id: 5,
        name: '회사설정(N/A)',
        icon: <ShopOutlined />,
        Children: [
            {
                id: 1,
                name: '일반',
                icon: <CaretRightOutlined />,
                url: '/service/companyProfile/companyInfo',
            },
            {
                id: 2,
                name: '결제수단',
                icon: <CaretRightOutlined />,
                url: '/service/companyProfile/payment',
            },
        ],
    },
];
