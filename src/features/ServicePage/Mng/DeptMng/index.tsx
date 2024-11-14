
import DeptMngTop from '@/components/Content/Mng/DeptMng/DeptMngTop';
import { PageContentStyled } from '../../styled';
import { MngPageStyled } from '../styled';
import DeptContent from '@/components/Content/Mng/DeptMng/DeptContent';
import AddDeptModal from '@/components/Content/Mng/DeptMng/AddDeptModal';
import DeptUpdateModal from '@/components/Content/Mng/DeptMng/DeptUpdateModal';



const DeptMngPage = () => {
    return (
        <PageContentStyled>
            <div className="ContentWrap">
                <MngPageStyled>
                    {/* 페이지 상단 이름과 Btn */}
                    <div className="TopArea">
                        <DeptMngTop/>
                    </div>

                    {/* 조직 정보 조회된 화면 */}
                    <div className="bodyArea">
                        <DeptContent/>
                    </div>
                    <AddDeptModal/>
                    <DeptUpdateModal/>
                </MngPageStyled>
            </div>
        </PageContentStyled>
    );
};
export default DeptMngPage;
