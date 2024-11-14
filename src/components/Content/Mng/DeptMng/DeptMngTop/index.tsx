import { DownloadOutlined, FileMarkdownOutlined, ApartmentOutlined, UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
// Recoil
import { useSetRecoilState } from 'recoil';
import { addDeptModalState } from '@/utill/atom';
import { DeptMngTopStyled } from '../styled';

const DeptMngTop = () => {

    // Modal여닫기
    const setAddDeptModalOpen = useSetRecoilState(addDeptModalState);
    const addDeptShowModal = () => {
        setAddDeptModalOpen(true);
    };

    return (
        <DeptMngTopStyled>
            

            <div className="fncBtnBox">
                <Button
                    //  size={size}
                    icon={<DownloadOutlined />}
                >
                    Data 다운로드(N/A)
                </Button>
                <Button
                    //  size={size}
                    icon={<FileMarkdownOutlined />}
                >
                    업로드 양식 다운로드(N/A)
                </Button>
                <Button
                    //  size={size}
                    icon={<UploadOutlined />}
                >
                    부서 일괄 업로드(N/A)
                </Button>
                <Button
                    // size={size}
                    icon={<ApartmentOutlined />}
                    style={{ backgroundColor: 'orange', border: 'orange' }}
                    onClick={addDeptShowModal}
                >
                    부서등록
                </Button>
            </div>
        </DeptMngTopStyled>
    );
};
export default DeptMngTop;
