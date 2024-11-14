import { TreeDataNode } from 'antd';
import { DeptDataProps } from './interface';


// 부서데이터 트리데이터용으로 변경

export const getDefaultTreeData = (deptData: DeptDataProps) => {
    if (!deptData) return [];
    
    const convertDeptToTreeNode = (dept: DeptDataProps):  TreeDataNode => ({
        title: dept.deptName,
        key: dept.deptId,
        children: dept.children?.map(convertDeptToTreeNode)
    });

    return Array.isArray(deptData) 
        ? deptData.map(convertDeptToTreeNode)
        : [convertDeptToTreeNode(deptData)];
};

// export const getDefaultTreeData = (deptData: DeptDataProps) => {
//     if (!deptData) return [];
    
//     // DeptDataProps를 TreeDataNode 형태로 변환
//     const convertDeptToTreeNode = (dept: DeptDataProps): TreeDataNode => ({
//         title: dept.deptName,
//         key: dept.deptId,
//         children: dept.children?.map(convertDeptToTreeNode)
//     });

//     const treeData = Array.isArray(deptData) 
//         ? deptData.map(convertDeptToTreeNode)
//         : [convertDeptToTreeNode(deptData)];

//     return convertToTreeData(treeData);
// };

// export const convertToTreeData = (data: TreeDataNode[]) =>
//     data.map((dept, index): TreeDataNode => ({
//         title: dept.title,
//         key: dept.key || `${index}+deptIndexNode`,
//         children: dept.children ? convertToTreeData(dept.children) : undefined,
//     }));

// // antD 트리컴포넌트로 사용할 수 있게 변경
// export const getDefaultTreeData = (deptData: DeptDataProps): TreeDataNode[] => {
//     if (!deptData) return [];
//     const safeData = Array.isArray(deptData) ? deptData : [deptData];
//     return convertToTreeData(safeData.filter((item): item is TreeDataNode => 'title' in item && 'key' in item));
// };
// export const getDefaultTreeData = (deptData: any): TreeDataNode[] => {
//     if (!deptData) return [];
//     const safeData = Array.isArray(deptData) ? deptData : [deptData];
//     return convertToTreeData(safeData.filter((item): item is DeptDataNode => 'title' in item && 'key' in item));
// };
