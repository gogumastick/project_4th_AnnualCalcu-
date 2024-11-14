// import { useState, useEffect } from 'react';
import { TreeSelect } from 'antd';
// import type { TreeSelectProps } from 'antd';
import { TreeDataNode } from 'antd';
// import { DeptDataProps,  } from '@/utill/interface';
import { useRecoilValue } from 'recoil';
import { processedTreeDataState } from '@/utill/atom';

interface ProcessedTreeNode {
    title: string;
    value: string;
    children?: ProcessedTreeNode[];
}

// const findDeptByKey = (data: any[], key: string): any | undefined => {
//   for (const dept of data) {
//     if (dept.key === key) {
//       return dept;
//     }
//     if (dept.children) {
//       const found = findDeptByKey(dept.children, key);
//       if (found) {
//         return found;
//       }
//     }
//   }
//   return undefined;
// };

// const findDeptNameById = (data: TreeDataNode[], id: string): string | undefined => {
//     for (const node of data) {
//         if (node.key.toString() === id) {
//             return node.title as string;
//         }
//         if (node.children) {
//             const found = findDeptNameById(node.children, id);
//             if (found) {
//                 return found;
//             }
//         }
//     }
//     return undefined; // 'undefined라고함' 대신 undefined 반환
// };

const DeptSelect = ({ onChange, value }: { onChange: (value: string) => void; value: string }) => {
  // console.log('DeptSelect의 value:', value)  
  // 백엔드에서 전달된 부서정보
    // const deptData = useRecoilValue(deptDataState);
    // console.log('DeptSelect의 deptData:', deptData);
    // const checkedDept = useRecoilValue(checkedDeptState);
    // console.log('DeptSelect의 checkedDept', checkedDept);

;
    const originalTreeData = useRecoilValue(processedTreeDataState);
    // console.log('DeptSelect의 originalTreeData:', originalTreeData);
    // const deptName = findDeptNameById(originalTreeData, value);
    // console.log('DeptSelect의 value:', value);
    // console.log('DeptSelect의 deptName:', deptName ?? '부서명을 찾을 수 없습니다.');
    // const deptIdNameMap = checkedDept.reduce((acc: Record<string, string>, deptKey) => {
    //   const deptArray = Array.isArray(deptData) ? deptData : Object.values(deptData);
    //   const dept = findDeptByKey(deptArray, String(deptKey)); // 재귀적으로 검색
    //   if (dept) {
    //     acc[String(deptKey)] = dept.title;
    //   }
    //   return acc;
    // }, {});
    // const deptIdNameMap = checkedDept.reduce((acc: Record<string, string>,Key) => {
    //   const deptArray = Array.isArray(deptData) ? deptData : Object.values(deptData);
    //   const dept = deptArray.find((d: any) => d.key === Key); // key로 매칭
    //   if (dept) {
    //     acc[String(Key)] = dept.title; // key를 사용하여 매칭
    //   }
    //   return acc;
    // }, {});
    // const deptIdNameMap = checkedDept.reduce((acc: Record<string, string>, deptId) => {
    //   const deptArray = Array.isArray(deptData) ? deptData : Object.values(deptData);
    //   const dept = deptArray.find((d: any) => d.deptId === deptId);
    //   if (dept) {
    //     acc[String(deptId)] = dept.title;
    //   }
    //   return acc;
    // }, {});
    // console.log('DeptSelect의 deptIdNameMap:', deptIdNameMap);

    // treeData를 TreeSelect 형식으로 변환하는 함수(antd에서 요구하는 형식)
    const convertTreeData = (data: TreeDataNode[]): ProcessedTreeNode[] => {
        return data.map((node) => ({
            title: node.title as string,
            value: node.key.toString(),
            // value: node.title as string,
            // key: node.key.toString(),
            children: node.children ? convertTreeData(node.children) : undefined,
        }));
    };

    const treeData = convertTreeData(originalTreeData);

    return (
        <TreeSelect
            showSearch
            style={{ width: '250px' }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="부서 선택"
            allowClear
            treeDefaultExpandAll
            // onChange={(title) => onChange(title)}
            onChange={onChange}
            treeData={treeData}
            filterTreeNode={(inputValue: string, treeNode) => {
                return (treeNode.title as string).toLowerCase().includes(inputValue.toLowerCase());
            }}
            // filterTreeNode={(inputValue: string, treeNode: any) => {
            //     return treeNode.title.toLowerCase().includes(inputValue.toLowerCase());
            // }}

            // searchPlaceholder="부서명 검색"
            // showArrow={true}
            treeNodeFilterProp="title"
        />
    );
};

export default DeptSelect;
