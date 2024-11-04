import PurchaseTop from '@/components/Content/CompanyProfile/Purchase/PurchaseTop';
import { PageContentStyled } from '../../styled';
import { CompanyProfilePageStyled } from '../styled';
import PurchaseContent from '@/components/Content/CompanyProfile/Purchase/PurchaseContent';

const PurchasePage = () => {
    return (
        <PageContentStyled>
            <div className="ContentWrap">
                <CompanyProfilePageStyled>
                    {/* 페이지 상단 이름과 Btn */}
                    <div className="TopArea">
                       <PurchaseTop/>
                    </div>

                    {/* 직원 정보 조회된 화면 */}
                    <div className="bodyArea">
                        <PurchaseContent/>
                    </div>
                    
                </CompanyProfilePageStyled>
            </div>
        </PageContentStyled>
    );
};
export default PurchasePage;
