
import { LaptopOutlined } from '@ant-design/icons';
import { MainPageStyled } from './styled';
import { useRouter } from 'next/router';


const MainPage = () => {
    const router = useRouter();

    return (
        <>
            <MainPageStyled>
                <div style={{backgroundColor : 'gray', width:500}}>
                    mainPage는 개발 중입니다.
                    <br />
                    servicePage 바로가기<LaptopOutlined>ggg</LaptopOutlined>
                    <br />
                    <div style={{backgroundColor:'orange'}}
                        onClick={() => {
                            // choicedPage()
                            router.push('/service/home');
                        }}
                    >
                        servicePage 이동버튼
                    </div>
                    <br />
                    <div style={{backgroundColor:'green'}}
                        onClick={() => {
                            // choicedPage()
                            router.push('/login');
                        }}
                    >
                        로그인 이동버튼
                    </div>
                    <br />
                    <div style={{backgroundColor:'blue'}}
                        onClick={() => {
                            // choicedPage()
                            router.push('/signup');
                        }}
                    >
                        회원가입 이동버튼
                    </div>
                    <br />
                </div>
            </MainPageStyled>
        </>
    );
};
export default MainPage;
