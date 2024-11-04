import {
    CaretRightOutlined,
    HomeOutlined,
    FormOutlined,
    ContactsOutlined,
    SettingOutlined,
    ShopOutlined,
    MailOutlined,
    RobotOutlined,
    RocketOutlined,
    CreditCardOutlined,
} from '@ant-design/icons';

export const sideBarTop=[
    {
        id: 10100,
        name: '홈(N/A)',
        icon: <HomeOutlined />,
        url: '/service/home',
    }
];
export const sideBarBottom=[
    {
        id: 20100,
        name: '관리(개발ing)',
        icon: <SettingOutlined />,
        Children: [
            {
                id: 20101,
                name: '직원(개발ing)',
                icon: <CaretRightOutlined />,
                url: '/service/mng/employeemng',
            },
            {
                id: 20102,
                name: '조직(개발ing)',
                icon: <CaretRightOutlined />,
                url: '/service/mng/deptmng',
            },
            {
                id: 20103,
                name: '연차설정(개발ing)',
                icon: <CaretRightOutlined />,
                url: '/service/mng/vactionmng',
            },
        ],
    },
    {
        id: 20200,
        name: '회사설정(개발ing)',
        icon: <ShopOutlined />,
        Children: [
            {
                id: 20201,
                name: '일반(N/A)',
                icon: <CaretRightOutlined />,
                url: '/service/companyProfile/companyinfo',
            },
            {
                id: 20202,
                name: '기능및유저구매(개발ing)',
                icon: <CaretRightOutlined />,
                url: '/service/companyProfile/purchase',
            },
            {
                id: 20203,
                name: '결제수단(N/A)',
                icon: <CaretRightOutlined />,
                url: '/service/companyProfile/payment',
            },
        ],
    },
]

export const sideBarCustom=[
    {
        id: 30100,
        name: '법인카드(N/A)',
        icon: <CreditCardOutlined />,
        Children: [
            {
                id: 30101,
                name: '카드등록',
                icon: <CaretRightOutlined />,
                url: '/service/creditcard/cardregist',
            },
            {
                id: 30102,
                icon: <CaretRightOutlined />,
                name: '카드내역',
                url: '/service/creditcard/carddetails',
            },
        ],
    },
]




export const sideBarData = [
    
    {
        id: 40100,
        name: '메일(N/A)',
        icon: <MailOutlined />,
        Children: [
            {
                id: 40101,
                name: '받은메일',
                icon: <CaretRightOutlined />,
                url: '/service/mail/receivedmail',
            },
            {
                id: 40102,
                name: '보낸메일',
                icon: <CaretRightOutlined />,
                url: '/service/mail/sentmail',
            },
            {
                id: 40103,
                name: '중요편지함',
                icon: <CaretRightOutlined />,
                url: '/service/mail/importantmail',
            },
            {
                id: 40104,
                name: '보관함',
                icon: <CaretRightOutlined />,
                url: '/service/mail/locker',
            },
            {
                id: 40105,
                name: '스팸함',
                icon: <CaretRightOutlined />,
                url: '/service/mail/spam',
            },
            {
                id: 40106,
                name: '휴지통',
                icon: <CaretRightOutlined />,
                url: '/service/mail/trash',
            },
        ],
    },
    {
        id: 40200,
        name: '기안서(N/A)',
        icon: <FormOutlined />,
        Children: [
            {
                id: 40201,
                name: '기안서 작성',
                icon: <CaretRightOutlined />,
                url: '/service/documents/writingdocu',
            },
            {
                id: 40202,
                name: '미결재',
                icon: <CaretRightOutlined />,
                url: '/service/documents/unapproveddocu',
            },
            {
                id: 40203,
                name: '결재현황',
                icon: <CaretRightOutlined />,
                url: '/service/documents/approveddocu',
            },
            {
                id: 40204,
                name: '결재완료',
                icon: <CaretRightOutlined />,
                url: '/service/documents/totaldocu',
            },
        ],
    },
    {
        id: 40300,
        name: '근태(N/A)',
        icon: <RobotOutlined />,
        Children: [
            {
                id: 40301,
                name: '출퇴근현황',
                icon: <CaretRightOutlined />,
                url: '/service/attendance/commutingstatus',
            },
            {
                id: 40302,
                icon: <CaretRightOutlined />,
                name: '미정',
                url: '/service/attendance/notyet',
            },
        ],
    },
    {
        id: 40400,
        name: '연차(N/A)',
        icon: <RocketOutlined />,
        Children: [
            {
                id: 40401,
                name: '휴가현황',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/vacationstatus',
            },
            {
                id: 40402,
                icon: <CaretRightOutlined />,
                name: '잔여연차',
                url: '/service/vacation/remainingvacation',
            },
            {
                id: 40403,
                name: '휴가신청',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/requestedvacation',
            },
            {
                id: 40404,
                name: '미결재',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/unapprovedvacation',
            },
            {
                id: 40405,
                name: '결재현황',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/approvedvacation',
            },
            {
                id: 40406,
                name: '알림현황',
                icon: <CaretRightOutlined />,
                url: '/service/vacation/notivacation',
            },
        ],
    },
    {
        id: 40500,
        name: '자산예약(N/A)',
        icon: <ContactsOutlined />,
        Children: [
            {
                id: 40501,
                name: '회의실',
                icon: <CaretRightOutlined />,
                url: '/service/reservation/meetingroom',
            },
            {
                id: 40502,
                icon: <CaretRightOutlined />,
                name: '차량',
                url: '/service/reservation/vehicle',
            },
        ],
    },
   
];
