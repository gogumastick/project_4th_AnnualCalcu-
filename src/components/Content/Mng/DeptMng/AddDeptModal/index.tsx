import { Modal,  Input, Typography, Flex } from 'antd';
// import { Button, Modal, Tree, TreeSelect, Form, Input, Typography, Flex } from 'antd';
import { ApartmentOutlined } from '@ant-design/icons';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { addDeptModalState, deptDataState } from '@/utill/atom';
// import { useState } from 'react';
import { useFormik } from 'formik';
import { AddDeptModalStyled } from '../styled';
import axios from 'axios';
import { mngUrl } from '@/utill/router';
// 백엔드 deptdataget
import { fetchDeptData } from '@/utill/api';

const AddDeptModal = () => {
    // Modal여닫기
    const [addDeptModalOpen, setAddDeptModalOpen] = useRecoilState(addDeptModalState);

    // 백엔드에서 전달된 부서정보
    // const [deptData, setDeptData] = useRecoilState(deptDataState);
    const setDeptData = useSetRecoilState(deptDataState);
    // console.log('AddDeptModal에 deptData', deptData);

    const addDeptFormik = useFormik({
        initialValues: {
            // 부서이름
            DeptName: '',
            // 상위부서
            ParentName: '',
            // 메모
            DeptMemo: '',
        },
        onSubmit: (values) => {
            // const newAddedDept = {
            //     ...values,
            // };

            console.log('부서추가 데이터:', values);
        },
    });

    // Modal forMik제출 후 닫기
    const registerDept = () => {
        addDeptFormik.submitForm();

        const addDeptFnc = async () => {
            try {
                const result = await axios.post(mngUrl, {
                    deptParentDeptId: addDeptFormik.values.ParentName || null,
                    deptName: addDeptFormik.values.DeptName,
                    deptMemo: addDeptFormik.values.DeptMemo,
                });

                // 부서 데이터를 Recoil의 deptDataState에 업데이트

                const deptData = await fetchDeptData();
                console.log('AddDeptModal에서 입력 후 확인한 트리 데이터:', deptData);
                setDeptData(deptData);
                console.log('부서 추가 응답:', result.data);
            } catch (error) {
                console.error('부서 추가 에러:', error);
            }
        };
        // 비동기 함수 호출
        addDeptFnc();
        setTimeout(() => {
            addDeptFormik.resetForm();
            setAddDeptModalOpen(false);
        }, 0);
    };

    // Modal 닫기
    const handleCancel = () => {
        // addDeptFormik.resetForm();
        setAddDeptModalOpen(false);
    };

    return (
        <Modal open={addDeptModalOpen} onOk={registerDept} onCancel={handleCancel} width={700}>
            <Typography.Title level={4}>
                <ApartmentOutlined />
                부서 정보
            </Typography.Title>
            <br />
            <form onSubmit={addDeptFormik.handleSubmit}>
                <AddDeptModalStyled>
                    <Flex wrap gap="middle">
                        <div>
                            <Typography.Title level={5}>부서 이름＊</Typography.Title>
                            <Input
                                name="DeptName"
                                onChange={addDeptFormik.handleChange}
                                value={addDeptFormik.values.DeptName}
                                placeholder="부서이름"
                            />
                        </div>
                        <div>
                            <Typography.Title level={5}>상위 부서</Typography.Title>
                            <Input
                                name="ParentName"
                                onChange={addDeptFormik.handleChange}
                                value={addDeptFormik.values.ParentName}
                                placeholder="상위부서선택"
                            />
                        </div>
                        <div>
                            <Typography.Title level={5}>메모</Typography.Title>
                            <Input
                                name="DeptMemo"
                                onChange={addDeptFormik.handleChange}
                                value={addDeptFormik.values.DeptMemo}
                                placeholder="메모"
                            />
                        </div>
                    </Flex>
                    <br />
                </AddDeptModalStyled>
            </form>
        </Modal>
    );
};
export default AddDeptModal;

// import { Modal, Typography, Input, Flex, Checkbox } from 'antd';
// import { ApartmentOutlined } from '@ant-design/icons';
// import { useRecoilState } from 'recoil';
// import { addDeptModalState, addedDeptState } from '@/utill/atom';
// import { useFormik } from 'formik';
// import { AddDeptModalStyled } from '../styled';

// const AddDeptModal = () => {
//     // Modal여닫기
//     const [addDeptModalOpen, setAddDeptModalOpen] = useRecoilState(addDeptModalState);
//     // 입력된 부서
//     const [addedDept, setAddedDept] = useRecoilState(addedDeptState);
//     console.log('AddDeptModal에 addedDept', addedDept);

//     const addDeptFormik = useFormik({
//         // initialValues: initialFormValues,
//         initialValues: {
//             // 부서이름
//             DeptName: '',
//             // 상위부서
//             ParentName: '',
//             // 메모
//             DeptMemo: '',

//         },
//         onSubmit: (values) => {
//             const newAddedDept = {
//                 ...values,
//             };

//             setAddedDept([...addedDept, newAddedDept]);
//             // console.log('부서추가 데이터:', values);
//         },
//     });

//     // Modal forMik제출 후 닫기
//     const registerDept = () => {
//         addDeptFormik.submitForm();
//         setTimeout(() => {
//             addDeptFormik.resetForm();
//              setAddDeptModalOpen(false);
//         }, 0);
//     };
//     // Modal 닫기
//     const handleCancel = () => {
//         addDeptFormik.resetForm();
//         setAddDeptModalOpen(false);
//     };

//     return (
//         <Modal open={addDeptModalOpen} onOk={registerDept} onCancel={handleCancel} width={700}>
//             <Typography.Title level={4}>
//             <ApartmentOutlined />
//                 부서 정보
//             </Typography.Title>
//             <br/>
//             <form onSubmit={addDeptFormik.handleSubmit}>
//                 <AddDeptModalStyled>

//                     <Flex wrap gap="middle">
//                         <div>
//                             <Typography.Title level={5}>부서 이름</Typography.Title>
//                             <Input
//                                 name="DeptName"
//                                 onChange={addDeptFormik.handleChange}
//                                 value={addDeptFormik.values.DeptName}
//                                 placeholder="부서이름"
//                             />
//                         </div>
//                         <div>
//                             <Typography.Title level={5}>상위 부서</Typography.Title>
//                             <Input
//                                 name="ParentName"
//                                 onChange={addDeptFormik.handleChange}
//                                 value={addDeptFormik.values.ParentName}
//                                 placeholder="상위부서선택"
//                             />
//                         </div>
//                         <div>
//                             <Typography.Title level={5}>메모</Typography.Title>
//                             <Input
//                                 name="DeptMemo"
//                                 onChange={addDeptFormik.handleChange}
//                                 value={addDeptFormik.values.DeptMemo}
//                                 placeholder="메모"
//                             />
//                         </div>
//                     </Flex>
//                     <br />

//                 </AddDeptModalStyled>
//             </form>
//         </Modal>
//     );
// };
// export default AddDeptModal;

// import { Button, Modal, Tree, TreeSelect, Form, Input, Typography } from 'antd';
// import { ApartmentOutlined } from '@ant-design/icons';
// import { useRecoilState } from 'recoil';
// import { addDeptModalState, addedDeptState } from '@/utill/atom';
// import { useState } from 'react';

// const AddDeptModal = () => {
//     // Modal여닫기
//     const [addDeptModalOpen, setAddDeptModalOpen] = useRecoilState(addDeptModalState);
//     const [treeData, setTreeData] = useState([]);
//     console.log('AddDeptModal',treeData);

//     const [selectedParent, setSelectedParent] = useState(null);

//     // Modal forMik제출 후 닫기
//     const registerDept = () => {
//         console.log('입력된 값');

//         // 새로운 조직을 선택된 상위 조직 아래에 추가
//         // const newNode = { title: values.orgName, key: `${Math.random()}` };
//         // const updateDeptData = ({list, key}:any) =>
//         //     list.map((node:any) => {
//         //         if (node.key === key) {
//         //             return { ...node, children: [...(node.children || []), newNode] };
//         //         }
//         //         if (node.children) {
//         //             return { ...node, children: updateDeptData(node.children, key) };
//         //         }
//         //         return node;
//         //     });
//         //     setTreeData(updateDeptData(treeData, selectedParent));
//         setTimeout(() => {
//             // addDeptFormik.resetForm();
//             setAddDeptModalOpen(false);
//         }, 0);
//     };

//     // Modal 닫기
//     const handleCancel = () => {
//         // addDeptFormik.resetForm();
//         setAddDeptModalOpen(false);
//     };

//     return (
//         <Modal open={addDeptModalOpen}
//         onOk={registerDept}
//         onCancel={handleCancel}
//          width={700}>
//             <Typography.Title level={4}>
//                 <ApartmentOutlined />
//                 부서 정보
//             </Typography.Title>
//             <br />
//             <Form
//             // onFinish={handleAddOrganization}
//             >
//                 <Form.Item name="DeptName" label="조직명" rules={[{ required: true, message: '조직명을 입력하세요.' }]}>
//                     <Input />
//                 </Form.Item>
//                 <Form.Item name="parentDept" label="상위 조직">
//                     <TreeSelect
//                         treeData={treeData}
//                         placeholder="상위 조직을 선택하세요"
//                         onChange={(value) => setSelectedParent(value)}
//                     />
//                 </Form.Item>
//                 <Form.Item name="memo" label="메모">
//                     <Input.TextArea rows={3} />
//                 </Form.Item>
//                 {/* <Form.Item>
//                     <Button type="primary" htmlType="submit">
//                         추가
//                     </Button>
//                 </Form.Item> */}
//             </Form>
//         </Modal>
//     );
// };
// export default AddDeptModal;
