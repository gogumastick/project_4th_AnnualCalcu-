import { Typography } from 'antd';
import { useRecoilValue } from 'recoil';
import { purchaseListState } from '@/utill/atom';
import { PurchaseTopStyled } from '../styled';

const PurchaseTop = () => {
    const purchaseList = useRecoilValue(purchaseListState);
    // console.log('PurchaseTop의 formik ',purchaseList);
    const userCnt = purchaseList.buyUser;
    // console.log('PurchaseTop의 userCnt', userCnt);

    // checked가 true인 모듈만 필터링
    const usingModules = Object.entries(purchaseList.modules)
        .filter(([, module]) => module.checked)
        .map(([, module]) => module.name);

    // console.log('PurchaseTop의 usingModules', usingModules);

    const usingCustomModules = Object.entries(purchaseList.customModules)
        .filter(([, module]) => module.checked)
        .map(([, module]) => module.name);


    return (
        <PurchaseTopStyled>
            <div className="cntUsers">
                <fieldset>
                    <legend>
                        <Typography.Title level={5}>현재 구매한 유저수</Typography.Title>
                    </legend>
                    <div>{userCnt} user</div>
                </fieldset>
            </div>

            <div className="usingModules">
                <fieldset>
                    <legend>
                        <Typography.Title level={5}>구매한 모듈</Typography.Title>
                    </legend>
                    {usingModules.map((moduleName, i) => (
                        <div key={i + 'moduleName'}>{moduleName}</div>
                    ))}
                    {usingCustomModules.map((moduleName, i) => (
                        <div key={i + 'moduleName'}>{moduleName}</div>
                    ))}
                    {/* <ul>
                    {useModules.map((moduleName, index) => (
                        <li key={index}>{moduleName}</li>
                    ))}
                </ul> */}
                </fieldset>
            </div>
        </PurchaseTopStyled>
    );
};
export default PurchaseTop;
