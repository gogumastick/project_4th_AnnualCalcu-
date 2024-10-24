import * as React from 'react';
import { Modal, Typography, Input,  Flex, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { addEmplyModalState, addedEmplyState } from '@/utill/atom';
import { useFormik } from 'formik';
import { useState } from 'react';
import { AddEmplModalStyled } from '../../styled';

const AddEmplyModal = () => {
    // Modal여닫기
    const [addEmplyModalOpen, setAddEmplyModalOpen] = useRecoilState(addEmplyModalState);
    // 입력된 직원
    const [addedEmply, setAddedEmply] = useRecoilState(addedEmplyState);
    console.log('AddEmplyModal에 addedEmply', addedEmply);

    // 연차발생여부 Checkbox상태값
    const [occuVctCheck, setOccuVctCheck] = useState<boolean>(true);
    // console.log('연차발생 check값', occuVctCheck);

    // 퇴사여부 Checkbox상태값
    const [retireCheck, setRetireCheck] = useState<boolean>(false);
    // console.log('퇴사여부 check값', retireCheck);

    // 퇴사여부로 날짜 입력Box여닫기
    const [retireTextBoxClose, setRetireTextBoxClose] = useState<boolean>(false);
    // console.log('AddEmployeeModal에서 retireTextBoxClose', retireTextBoxClose);
    const [retireDateBoxOpen, setRetireDateBoxOpen] = useState<boolean>(false);
    // console.log('AddEmployeeModal에서 retireDateBoxOpen', retireDateBoxOpen);

    const addEmplyFormik = useFormik({
        // initialValues: initialFormValues,
        initialValues: {
            //사원번호
            emplyNo: '',
            // 이름
            emplyName: '',
            // 직급
            emplyRank: '',
            // 이메일
            emplyEmail: '',
            // 소속조직이메일(선택사항)
            emplyOrgEmail: '',
            // 액세스 권한(선택박스로 입력)
            emplyAccessAuth: '',
            // 본조직(선택박스로 입력)
            emplyOrgOrganization: '',
            // 관리조직(선택박스으로 입력)
            emplyMngOrganization: '',
            // 기초연차
            emplyBeginningVacation: '',
            // 연차발생여부(체크박스 T/F 값)
            emplyOccurrenceVacation: occuVctCheck ? 'true' : 'false',
            // 입사일
            emplyJoinDate: '',
            // 퇴사여부
            emplyRetire: retireCheck ? 'true' : 'false',
            // 퇴사일
            emplyRetireDate: '',
            // 휴대폰번호
            emplyPhoneNo: '',
        },
        onSubmit: (values) => {
            // if (values.empNo === '') {
            //     console.log('AddEmployeeModal에서 뭐가 올까');

            //     return;
            // }
            const newAddedEmply = {
                ...values,
            };

            setAddedEmply([...addedEmply, newAddedEmply]);
            // console.log('직원추가 데이터:', values);
        },
    });

    // Modal forMik제출 후 닫기
    const registerEmpl = () => {
        addEmplyFormik.submitForm();
        setTimeout(() => {
            addEmplyFormik.resetForm();
            setOccuVctCheck(true);
            setRetireCheck(false);
            setRetireTextBoxClose(false);
            setRetireDateBoxOpen(false);
            setAddEmplyModalOpen(false);
        }, 0);
    };
    // Modal 닫기
    const handleCancel = () => {
        addEmplyFormik.resetForm();
        setOccuVctCheck(true);
        setRetireCheck(false);
        setRetireTextBoxClose(false);
        setRetireDateBoxOpen(false);
        setAddEmplyModalOpen(false);
    };
    // 연차발생여부 CheckBox
    const occuVctCheckBox = () => {
        setOccuVctCheck(!occuVctCheck);
    };

    // 퇴사여부 CheckBox
    const retireCheckBox = () => {
        setRetireTextBoxClose(!retireTextBoxClose);
        setTimeout(() => {
            setRetireDateBoxOpen(!retireDateBoxOpen);
        }, 0);
        setRetireCheck(!retireCheck);
    };

    return (
        <Modal open={addEmplyModalOpen} onOk={registerEmpl} onCancel={handleCancel} width={700}>
            <Typography.Title level={4}><UserOutlined />직원 정보</Typography.Title>
            <form onSubmit={addEmplyFormik.handleSubmit}>
                <AddEmplModalStyled>
                    {/* 사원번호 / 직원 이름/ 직급 */}
                    <Flex wrap gap="middle">
                        <div>
                            <Typography.Title level={5}>사원번호</Typography.Title>
                            <Input
                                name="emplyNo"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyNo}
                                placeholder="사원번호"
                            />
                        </div>
                        <div>
                            <Typography.Title level={5}>직원 이름</Typography.Title>
                            <Input
                                name="emplyName"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyName}
                                placeholder="직원이름"
                            />
                        </div>
                        <div>
                            <Typography.Title level={5}>직급</Typography.Title>
                            <Input
                                name="emplyRank"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyRank}
                                placeholder="직급"
                            />
                        </div>
                    </Flex>
                    <br />
                    {/* 직원이메일주소 / 본조직 이메일 주소 */}
                    <Flex wrap gap="middle">
                        <div>
                            <Typography.Title level={5}>직원이메일주소</Typography.Title>
                            <Input
                                className="inputBoxExp"
                                name="emplyEmail"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyEmail}
                                placeholder="직원이메일주소"
                            />
                        </div>
                        <div>
                            <Typography.Title level={5}>본조직 이메일 주소</Typography.Title>
                            <Input
                                className="inputBoxExp"
                                name="emplyOrgEmail"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyOrgEmail}
                                placeholder="본조직 이메일 주소(없을 경우 미입력 가능)"
                            />
                        </div>
                    </Flex>
                    <br />
                    {/* 액세스권한 / 본조직 / 관리조직 */}
                    <Flex wrap gap="middle">
                        <div>
                            <Typography.Title level={5}>액세스권한</Typography.Title>
                            <Input
                                name="emplyAccessAuth"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyAccessAuth}
                                placeholder="액세스권한"
                            />
                        </div>
                        <div>
                            <Typography.Title level={5}>본조직</Typography.Title>
                            <Input
                                name="emplyOrgOrganization"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyOrgOrganization}
                                placeholder="본조직"
                            />
                        </div>
                        <div>
                            <Typography.Title level={5}>관리조직</Typography.Title>
                            <Input
                                name="emplyMngOrganization"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyMngOrganization}
                                placeholder="관리조직"
                            />
                        </div>
                    </Flex>
                    <br />
                    {/* 기초연차 / 연차발생여부(체크) */}
                    <Flex wrap gap="middle" className="formikBox">
                        <div>
                            <Typography.Title level={5}>기초연차</Typography.Title>
                            <Input
                                name="emplyBeginningVacation"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyBeginningVacation}
                                placeholder="기초연차"
                            />
                        </div>
                        <div>
                            <Checkbox
                                style={{ marginBottom: 5 }}
                                name="emplyOccurrenceVacation"
                                onChange={(e) => {
                                    addEmplyFormik.handleChange(e);
                                    occuVctCheckBox();
                                }}
                                value={addEmplyFormik.values.emplyOccurrenceVacation}
                                checked={occuVctCheck}
                            >
                                연차발생여부(기본값:여)
                            </Checkbox>
                        </div>
                    </Flex>
                    <br />
                    {/* 입사일 / 퇴사여부(체크) / 퇴사일 */}
                    <Flex wrap gap="small" className="formikBox">
                        <div>
                            <Typography.Title level={5}>입사일</Typography.Title>
                            <Input
                                name="emplyJoinDate"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyJoinDate}
                                placeholder="입사일"
                            />
                        </div>
                        <div>
                            <Checkbox
                                style={{ marginBottom: 5 }}
                                name="emplyRetire"
                                onChange={(e) => {
                                    addEmplyFormik.handleChange(e);
                                    retireCheckBox();
                                }}
                                value={addEmplyFormik.values.emplyRetire}
                                checked={retireCheck}
                            >
                                <div className={`emplyRetireTextBox ${retireTextBoxClose ? 'hide' : 'show'}`}>
                                    퇴사여부(기본값:부)
                                </div>
                            </Checkbox>
                        </div>

                        <div className={`emplyRetireDateBox ${retireDateBoxOpen ? 'show' : 'hide'}`}>
                            <Typography.Title level={5}>퇴사일</Typography.Title>
                            <Input
                                name="emplyRetireDate"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyRetireDate}
                                placeholder="퇴사일"
                            />
                        </div>
                    </Flex>
                    <br />
                    {/* 전화번호 */}
                    <Flex wrap gap="middle" className="formikBox">
                        <div>
                            <Typography.Title level={5}>전화번호</Typography.Title>
                            <Input
                                name="emplyPhoneNo"
                                onChange={addEmplyFormik.handleChange}
                                value={addEmplyFormik.values.emplyPhoneNo}
                                placeholder="전화번호"
                            />
                        </div>
                        <div style={{ marginBottom: 5 }}>🚀 입력된 전화번호로 직원 합류 코드 발송 됩니다</div>
                    </Flex>
                    <br />
                </AddEmplModalStyled>
            </form>
        </Modal>
    );
};
export default AddEmplyModal;
