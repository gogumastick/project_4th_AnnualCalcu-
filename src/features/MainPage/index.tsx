import { LaptopOutlined } from '@ant-design/icons';
import { MainPageStyled } from './styled';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import axios from 'axios';

const MainPage = () => {
    const router = useRouter();
    const testFnc = async () => {
        const string = '드가자';
        const result = await axios({
            method: 'post',
            url: 'http://localhost:8000/api/back',
            data: {
                name: string,
            },
        });

        console.log('axios확인',result.data)
    };

    return (
        <>
            <MainPageStyled>
                <div style={{ backgroundColor: 'gray', width: 500 }}>
                    mainPage는 개발 중입니다.
                    <br />
                    servicePage 바로가기<LaptopOutlined>ggg</LaptopOutlined>
                    <br />
                    <div
                        style={{ backgroundColor: 'orange' }}
                        onClick={() => {
                            // choicedPage()
                            router.push('/service/home');
                        }}
                    >
                        servicePage 이동버튼
                    </div>
                    <br />
                    <div
                        style={{ backgroundColor: 'green' }}
                        onClick={() => {
                            // choicedPage()
                            router.push('/login');
                        }}
                    >
                        로그인 이동버튼
                    </div>
                    <br />
                    <div
                        style={{ backgroundColor: 'blue' }}
                        onClick={() => {
                            // choicedPage()
                            router.push('/signup');
                        }}
                    >
                        회원가입 이동버튼
                    </div>
                    <br />
                    <Button onClick={testFnc}>test</Button>
                </div>
            </MainPageStyled>
        </>
    );
};
export default MainPage;
