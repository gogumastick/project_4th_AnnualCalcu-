import styled from 'styled-components';

export const PurchaseTopStyled = styled.div`
    display: flex;
    /* width: 100%; */
    .cntUsers {
        margin-right: 20px;
        /* justify-content: center;
        align-items: center; */
        /* background-color: blue; */
        /* height: 100px;  */

        fieldset {
            padding: 0 10px 5px;
            width: 100%;
            text-align: center;
        }
    }
    .usingModules {
        fieldset {
            padding: 0 10px 5px;
            width: 100%;
            /* text-align: center; */
            display: flex;
            flex-direction: row;
            gap: 10px;
            width: auto;
        }

        /* background-color: blueviolet; */
    }
`;
export const PurchaseContentStyled = styled.div`
    display: flex;
    width: 100%;

    .purchaseContentWrap {
        margin-top: 20px;

        .purchaseListBox {
            display: flex;
            flex-direction: row;
            gap: 10px;
            width: 100%;
            fieldset {
                padding: 0 10px 5px;
                width: 100%;
                /* text-align: center; */
                display: flex;
                // 요소들을 가로 방향으로 정렬
                flex-direction: row;
                // 가로 방향 요소 간의 간격
                gap: 10px;
                width: auto;
                border : solid 1px orange;
            }
        }
        .purchaseBtn {
            margin-top: 15px;
            display: flex;
            justify-content: end;
            align-items: center;
        }
    }
`;
