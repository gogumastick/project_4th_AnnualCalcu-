import { DownloadOutlined, FileMarkdownOutlined, UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import type { GetProps } from 'antd';
// import type { ConfigProviderProps } from 'antd';
// import { useState } from 'react';
// Recoil
import { useSetRecoilState } from 'recoil';
import { addEmplyModalState } from '@/utill/atom';
import { EmplyMngTopStyled } from '../../styled';

type SearchProps = GetProps<typeof Input.Search>;
// type SizeType = ConfigProviderProps['componentSize'];

const { Search } = Input;

const EmplyMngTop = () => {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    // const [size, setSize] = useState<SizeType>();

    // Modal여닫기
    const setAddEmplyModalOpen = useSetRecoilState(addEmplyModalState);
    const addEmplyShowModal = () => {
        setAddEmplyModalOpen(true);
    };

    return (
        <EmplyMngTopStyled>
            <div className="serchBox">
                <Search placeholder="직원찾기" onSearch={onSearch} enterButton className="serchBox" />
            </div>

            <div className="fncBtnBox">
                <Button
                    //  size={size}
                    icon={<DownloadOutlined />}
                >
                    Data 다운로드
                </Button>
                <Button
                    //  size={size}
                    icon={<FileMarkdownOutlined />}
                >
                    업로드 양식 다운로드
                </Button>
                <Button
                    //  size={size}
                    icon={<UsergroupAddOutlined />}
                >
                    추가 일괄 업로드
                </Button>
                <Button
                    // size={size}
                    icon={<UserAddOutlined />}
                    style={{ backgroundColor: 'orange', border: 'orange' }}
                    onClick={addEmplyShowModal}
                >
                    직원등록
                </Button>
            </div>
        </EmplyMngTopStyled>
    );
};
export default EmplyMngTop;
