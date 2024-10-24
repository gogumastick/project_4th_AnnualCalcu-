import styled from 'styled-components';

export const EmplyMngTopStyled = styled.div`
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

export const AddEmplModalStyled = styled.div`
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
    .emplyRetireTextBox {
        /* padding-top :7px; */
        /* width: 400px; */
        /* background-color: gray; */
        /* margin-bottom : 5px; */
        display: flex;
        justify-content: start; /* 가로축 정렬 */
        align-items: center; /* 세로축 정렬 */
        overflow: hidden;
        white-space: nowrap;
        opacity: 1;
        transition: width 0.3s ease, opacity 0.3s ease;
    }
    .emplyRetireTextBox.hide {
        width: 0px; /* 텍스트 숨길 때 너비 */
        opacity: 1;
    }

    .emplyRetireTextBox.show {
        width: 100%; /* 텍스트 보여질 때 너비 */
        opacity: 1;
    }

    .emplyRetireDateBox {
        /* margin: 10px 10px 0px 5px; */
        /* width: 200px;  */
        /* background-color :blue; */
        /* display: flex; */
        overflow: hidden;
        white-space: nowrap;
        opacity: 1;
        transition: width 0.3s ease, opacity 0.3s ease;
    }
    .emplyRetireDateBox.hide {
        width: 0px; /* 텍스트 숨길 때 너비 */
        opacity: 1;
    }

    .emplyRetireDateBox.show {
        width: 200px; /* 텍스트 보여질 때 너비 */
        opacity: 1;
    }
`;
