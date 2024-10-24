import AddEmplyModal from '@/components/Content/Mng/EmplyMng/AddEmplyModal';
import { PageContentStyled } from '../../styled';
import { MngPageStyled } from '../styled';
import EmplyMngTop from '@/components/Content/Mng/EmplyMng/EmplyMngTop';
import EmplyContent from '@/components/Content/Mng/EmplyMng/EmplyContent';

const EmployeeMngPage = () => {
    return (
        <PageContentStyled>
            <div className="ContentWrap">
                <MngPageStyled>
                    {/* 페이지 상단 이름과 Btn */}
                    <div className="TopArea">
                        <EmplyMngTop />
                    </div>

                    {/* 직원 정보 조회된 화면 */}
                    <div className="bodyArea">
                        <EmplyContent/>
                    </div>
                    <AddEmplyModal />
                </MngPageStyled>
            </div>
        </PageContentStyled>
    );
};
export default EmployeeMngPage;
