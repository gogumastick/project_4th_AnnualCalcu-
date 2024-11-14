import { atom, selector } from 'recoil';
import { DeptDataProps, DeptFormValuesProps } from './interface';
// import { DeptFormValuesProps } from './interface';
import { TreeDataNode } from 'antd';
// import React from 'react';



// 직원추가 모달창
export const addEmplyModalState = atom({
    key : 'addEmplyModalStateKey',
    default : false,
})


// 등록된 직원 정보
export const addedEmplyState = atom<object[]>({
    key : 'addedEmplyStateeKey',
    default : [],
})

// 부서추가 모달창
export const addDeptModalState = atom({
    key : 'aaddDeptModalStateKey',
    default : false,
})
// 부서수정 모달창
export const deptUpdateModalState = atom({
    key : 'deptUpdateModalStateKey',
    default : false,
})

export const checkedDeptState = atom<React.Key[]>({
    key: 'checkedDeptStateKey',
    default: [],
});

// 수정할 체크된 부서 상태
export const selectedDeptsState = atom<DeptFormValuesProps[]>({
    key: 'selectedDeptsStateKey',
    default: []
});


// 등록된 부서 정보(백엔드정보)
export const deptDataState = atom<DeptDataProps>({
    key: 'deptDataStateKey',
    default: {} as DeptDataProps,
});



// 구매유저수
export const purchaseListState = atom({
    key : 'purchaseListStateKey',
    default: {
        buyUser: 0,
        modules: {} as Record<number, { checked: boolean; name: string;  }>,
        customModules: {} as Record<number, { checked: boolean; name: string;  }>,
        // modules: {} as Record<number, boolean>,

    },
})

export const searchValueState = atom<string>({
    key: 'searchValueStateKey',
    default: '',
});

// 검색 하이라이트 정보를 포함한 확장된 TreeDataNode 인터페이스
// interface ExtendedTreeDataNode extends TreeDataNode {
//     searchIndex?: number;
//     searchText?: string;
// }

export const processedTreeDataState = selector<TreeDataNode[]>({
    key: 'processedTreeDataStateKey',
    get: ({get}) => {
        const defaultData = get(deptDataState);
        // const searchValue = get(searchValueState);

        const dataArray = Array.isArray(defaultData) ? defaultData : [defaultData];
        if (dataArray.length === 0) return [];

        const loop = (data:  TreeDataNode[]) =>
            data.map((item) => {
                const strTitle = item.title?.toString() || '';
                // const index = strTitle.indexOf(searchValue);
                
                const processedNode: TreeDataNode = {
                    key: item.key,
                    title: strTitle,
                    // deptId?: item.deptId,
                    // searchIndex: index,
                    // searchText: searchValue
                };

                if (item.children) {
                    processedNode.children = loop(item.children);
                }

                return processedNode;
            });

        return loop(dataArray as  TreeDataNode[]);
    }
});
// export const processedTreeDataState = selector<ExtendedTreeDataNode[]>({
//     key: 'processedTreeDataState',
//     get: ({get}) => {
//         const defaultData = get(deptDataState);
//         const searchValue = get(searchValueState);

//         const dataArray = Array.isArray(defaultData) ? defaultData : [defaultData];
//         if (dataArray.length === 0) return [];

//         const loop = (data: any[]): ExtendedTreeDataNode[] =>
//             data.map((item) => {
//                 const strTitle = item.title?.toString() || '';
//                 const index = strTitle.indexOf(searchValue);
                
//                 const processedNode: ExtendedTreeDataNode = {
//                     key: item.key,
//                     title: strTitle,
//                     searchIndex: index,
//                     searchText: searchValue
//                 };

//                 if (item.children) {
//                     processedNode.children = loop(item.children);
//                 }

//                 return processedNode;
//             });

//         return loop(dataArray as TreeDataNode[]);
//     }
// });


