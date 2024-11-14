
export interface EmplyDataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}
// 있어야될까?
export interface DeptDataProps {
    deptId: number;
    deptName: string;
    children?: DeptDataProps[];   
}

// export interface DeptDataNode {
//     // title: string | React.ReactNode;
//     // key: string | number;
//     title: string;
//     key: React.Key;
//     // value?: string;
//     children?: DeptDataNode[];
// }
export interface DeptFormValuesProps {
    deptId: number;
    deptName: string;
    deptParentDeptId?: number | null;
    deptParentDeptName?: string | null;
    deptIdSortOrder?: string | null;
    deptTreeNodeKey?: string | null;
    deptMemo: string;
}



// export interface DepartmentProps {
//     id: number;
//     name: string;
//     children?: DepartmentProps[];
// }