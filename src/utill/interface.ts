
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

export interface DeptDataNode {
    title: string;
    key: React.Key;
    children?: DeptDataNode[];
}

// export interface DepartmentProps {
//     id: number;
//     name: string;
//     children?: DepartmentProps[];
// }