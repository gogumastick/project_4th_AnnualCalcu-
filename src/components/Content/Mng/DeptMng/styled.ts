import styled from 'styled-components';

export const DeptMngTopStyled = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between; /* 가로축 양끝 정렬 */
    align-items: center; /* 세로축 가운데 정렬 */

    .serchBox {
        .ant-input {
            border: solid 1px orange;
        }

        .ant-btn {
            border: solid 2px orange;
            background-color: orange;
        }
    }
    .fncBtnBox {
        .ant-btn {
            border: solid 2px darkgray;
            margin: 5px;
        }
    }
`;

export const AddDeptModalStyled = styled.div`
    .formikBox {
        display: flex;
        flex-direction: row; /* 가로로 정렬 */
        align-items: end; /* 세로축 정렬 */
        justify-content: start; /* 가로축 정렬 */
        /* padding: 5px; */
        /* border: solid 1px red; */
    }
    .ant-input {
        border: solid 1.5px darkgray;
        flex-shrink: 0; /* 줄어들지 않도록 설정 */
        flex-grow: 0; /* 유연하게 크기 변동하지 않도록 */
    }

    .inputBoxExp {
        width: 280px;
        /* background-color: green; */
    }
    
`;

export const DeptContentStyled = styled.div`
   .topBox{
    display:flex;
   }
    .serchBox {
        width: 500px;
        margin-right: 10px;
        .ant-input {
            border: solid 1px orange;
        }

        .ant-btn {
            border: solid 0px orange;
            background-color: orange;
        }
    }
    .fncBtnBox {
        
        .ant-btn {
            border: solid 2px darkgray;
            margin-right: 10px;
            /* margin: 5px; */
        }
    }
`;

export const DeptUpdateModalStyled = styled.div`
 margin-bottom : 20px;
    
`;
