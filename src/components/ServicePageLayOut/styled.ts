import styled from 'styled-components';

export const ServicePageLayOutStyled = styled.div`
    height: 100vh; // 전체 높이 차지
    display: flex;
    flex-direction: column;

    .noneServicePageLayOut {
        display: none;
    }
    .layoutHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .headFront {
        display: flex;
    }
    .toggleBtn {
        margin-left: -25px;
        margin-top: 35px;
    }
    .logo {
        margin: 20px;
        color: white;
    }
    .headEnd {
        display: flex;
        color: white;
    }
    .headEndBtn {
        font-size: 20px;
        margin-right: 15px;
    }
    
    
    
    
`;
