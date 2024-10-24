import { Form, Input, Checkbox, Button } from 'antd';
import { SingUpPageStyled } from './styled';

// 출처 : https://codesandbox.io/p/sandbox/registration-ant-design-demo-p5ji2?file=%2Findex.js

const SignUpPage = () => {
    const [form] = Form.useForm();

    // 핸들러 함수: 회원가입 제출
    // const onFinish = (values: any) => {
    //     console.log('Received values of form: ', values);
    // };

    // Form 레이아웃 설정
    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

    return (
        <SingUpPageStyled>
            <div className='registerBox'>
            <Form {...formItemLayout} form={form} name="register"
            //  onFinish={onFinish}
              scrollToFirstError>
                <Form.Item
                    name="name"
                    label="본인이름"
                    rules={[{ required: true, message: '이름을 입력하세요', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        { type: 'email', message: '이메일 형식으로 입력하세요' },
                        { required: true, message: '이메일을 입력하세요' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="비밀번호"
                    rules={[{ required: true, message: '비밀번호 입력하세요' }]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="비밀번호 재확인"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: '동일한 비밀번호 입력하세요' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('비밀번호가 일치하지 않습니다');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('약관에 동의해주세요'),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        이용약관 <a href="">동의하기</a>
                    </Checkbox>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" >
                        회원가입
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </SingUpPageStyled>
    );
};

export default SignUpPage;
