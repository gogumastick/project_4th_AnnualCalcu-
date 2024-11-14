import { Modal, Input, Typography, Flex } from 'antd';
// import { Button, Modal, Tree, TreeSelect, Form, Input, Typography, Flex } from 'antd';
import { ApartmentOutlined } from '@ant-design/icons';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { deptUpdateModalState, deptDataState, selectedDeptsState } from '@/utill/atom';
// import { useState } from 'react';
import { useFormik } from 'formik';
import { DeptUpdateModalStyled } from '../styled';
import axios from 'axios';
import { mngUrl } from '@/utill/router';
// 백엔드 deptdataget
import { fetchDeptData } from '@/utill/api';
import DeptSelect from '../DeptSelect';

const DeptUpdateModal = () => {
    // Modal여닫기
    const [deptUpdateModalOpen, setDeptUpdateModalOpen] = useRecoilState(deptUpdateModalState);

    // 백엔드에서 전달된 부서정보
    // const [deptData, setDeptData] = useRecoilState(deptDataState);
    const setDeptData = useSetRecoilState(deptDataState);
    // console.log('DeptUpdateModal의 deptData', deptData);

    // const checkedDept = useRecoilValue(checkedDeptState);
    // console.log('DeptUpdateModal의 checkedDept', checkedDept);

    const selectedDepts = useRecoilValue(selectedDeptsState);
    console.log('DeptUpdateModal의 selectedDepts', selectedDepts);

    const deptUpdateFormik = useFormik({
        initialValues: {
            depts: selectedDepts.map((dept) => ({
                deptId: dept.deptId,
                deptName: dept.deptName,
                // deptParentDeptId: dept.deptParentDeptId,
                deptParentDeptName: dept.deptParentDeptName,
                // deptTreeNodeKey: dept.deptParentDeptName,
                // deptTreeNodeKey: dept.deptTreeNodeKey,
                // deptIdSortOrder: dept.deptParentDeptName,
                // deptIdSortOrder: dept.deptIdSortOrder,
                deptMemo: dept.deptMemo,
            })),
        },
        // selectedDepts가 변경될 때 initialValues를 다시 설정
        enableReinitialize: true,
        onSubmit: async (values) => {
            console.log('DeptUpdateModal deptUpdateFormik의 values', values);
            try {
                const response = await axios.patch(`${mngUrl}/dept/update`, {
                    depts: values.depts,
                });

                if (response.data.success) {
                    alert('부서 수정이 완료되었습니다.');
                    const newDeptData = await fetchDeptData();
                    setDeptData(newDeptData);
                    setDeptUpdateModalOpen(false);
                }
            } catch (error) {
                console.error('부서 수정 실패:', error);
                alert('부서 수정에 실패했습니다.');
            }
        },
    });

    // Modal forMik제출 후 닫기
    const updateDept = () => {
        deptUpdateFormik.submitForm();

        setTimeout(() => {
            deptUpdateFormik.resetForm();
            setDeptUpdateModalOpen(false);
        }, 0);
    };

    // Modal 닫기
    const handleCancel = () => {
        // deptUpdateFormik.resetForm();
        setDeptUpdateModalOpen(false);
    };

    return (
        <Modal open={deptUpdateModalOpen} onOk={updateDept} onCancel={handleCancel} width={700}>
            <Typography.Title level={4}>
                <ApartmentOutlined />
                부서 수정하기
            </Typography.Title>
            <br />
            <form onSubmit={deptUpdateFormik.handleSubmit}>
                {selectedDepts.map((dept, index) => {
                    const deptValues = deptUpdateFormik.values.depts?.[index] || dept;
                    // const parentDeptTitle = findDeptTitleByKey(deptData, deptValues.deptParentDeptId?.toString() ?? '');
                    // const parentDeptTitle = findDeptTitleByKey(deptData, deptValues.deptParentDeptId?.toString() ?? '');
                    // console.log('Parent Dept Title:', parentDeptTitle);
                    return (
                        <DeptUpdateModalStyled key={dept.deptId}>
                            {/* <Typography.Title level={5}>부서 {index + 1}</Typography.Title> */}
                            <Flex wrap gap="middle">
                                {/* <div>
                                    <Typography.Title level={5}>부서 ID＊</Typography.Title>
                                    <Input
                                        name={`depts.${index}.deptId`}
                                        value={deptValues.deptId}
                                        onChange={deptUpdateFormik.handleChange}
                                    />
                                </div> */}

                                <div>
                                    <Typography.Title level={5}>부서 이름＊</Typography.Title>
                                    <Input
                                        name={`depts.${index}.deptName`}
                                        value={deptValues.deptName}
                                        onChange={deptUpdateFormik.handleChange}
                                    />
                                </div>

                                <br />
                                {/* <div>
                                    <Typography.Title level={5}>상위 부서Id</Typography.Title>
                                    <Input
                                        name={`depts.${index}.deptParentDeptId`}
                                        value={deptValues.deptParentDeptId ?? ''}
                                        onChange={deptUpdateFormik.handleChange}
                                    />
                                </div> */}
                                <br />
                                {/* <div>
                                    <Typography.Title level={5}>상위 부서name</Typography.Title>
                                    <Input
                                        name={`depts.${index}.deptParentDeptName`}
                                        value={deptValues.deptTreeNodeKey ?? ''}
                                        onChange={deptUpdateFormik.handleChange}
                                    />
                                </div> */}
                                <br />

                                <div>
                                    <Typography.Title level={5}>상위 부서</Typography.Title>
                                    <DeptSelect
                                        // value={deptUpdateFormik.values.deptParentDeptName}
                                        // onChange={(value) => {
                                        //     deptUpdateFormik.setFieldValue('parentName', value);
                                        value={deptUpdateFormik.values.depts?.[index]?.deptParentDeptName ?? ''}
                                        onChange={(value) => {
                                            deptUpdateFormik.setFieldValue(`depts.${index}.deptParentDeptName`, value);
                                        }}

                                        // value={deptValues.deptTreeNodeKey ?? ''}
                                        // // value={deptValues.deptIdSortOrder ?? ''}
                                        // onChange={(value) => {
                                        //     console.log('DeptUpdateModal의 value', value);
                                        //         // 선택된 부서의 ID를 설정
                                        //         // deptUpdateFormik.setFieldValue(`depts.${index}.deptParentDeptName`, value);
                                        //         // deptUpdateFormik.handleChange
                                        //         // deptUpdateFormik.setFieldValue(`depts.${index}.deptParentDeptId`, value);
                                        //         deptUpdateFormik.setFieldValue(`depts.${index}.deptParentDeptName`, value);
                                        //         // deptUpdateFormik.setFieldValue(`depts.${index}.deptIdSortOrder`, value);
                                        //     }}
                                    />
                                    {/* <DeptSelect
                                        onChange={(value) => {
                                            // 선택된 부서의 ID를 설정
                                            deptUpdateFormik.setFieldValue(`depts.${index}.deptParentDeptId`, value);

                                            // 선택된 부서의 이름을 설정
                                            const selectedDept = deptData.find((dept) => dept.deptId === value);
                                            const deptName = selectedDept ? selectedDept.deptName : '';
                                            deptUpdateFormik.setFieldValue(
                                                `depts.${index}.deptParentDeptName`,
                                                deptName
                                            );

                                            // 변경된 값을 콘솔에 출력하여 확인합니다.
                                            console.log('Updated deptParentDeptId:', value);
                                            console.log('Updated deptParentDeptName:', deptName);
                                        }}
                                        value={deptValues.deptParentDeptId?.toString() ?? ''}
                                    /> */}
                                    {/* <DeptSelect
                                        onChange={(value) => {
                                            deptUpdateFormik.setFieldValue(`depts.${index}.deptParentDeptId`, value);

                                        }}
                                        value={deptValues.deptParentDeptId?.toString() ?? ''}
                                    /> */}
                                    {/* <DeptSelect
                                        onChange={(value) => {
                                            deptUpdateFormik.setFieldValue(`depts.${index}.deptParentDeptId`, value);
                                        }}
                                        value={parentDeptTitle ?? ''} // 일치하는 title을 value로 설정
                                    /> */}
                                </div>
                                <br />
                                <div>
                                    <Typography.Title level={5}>메모</Typography.Title>
                                    <Input
                                        name={`depts.${index}.deptMemo`}
                                        value={deptValues.deptMemo}
                                        onChange={deptUpdateFormik.handleChange}
                                    />
                                </div>
                                <br />
                            </Flex>
                        </DeptUpdateModalStyled>
                    );
                })}
            </form>
        </Modal>
    );
};
export default DeptUpdateModal;
