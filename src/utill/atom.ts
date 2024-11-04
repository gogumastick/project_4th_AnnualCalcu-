import { atom } from 'recoil';



// 직원추가 모달창
export const addEmplyModalState = atom({
    key : 'addEmplyModalOpenKey',
    default : false,
})


// 등록된 직원 정보
export const addedEmplyState = atom<object[]>({
    key : 'addedEmployeeKey',
    default : [],
})

// 구매유저수
export const purchaseListState = atom({
    key : 'purchaseListKey',
    default: {
        buyUser: 0,
        modules: {} as Record<number, { checked: boolean; name: string;  }>,
        customModules: {} as Record<number, { checked: boolean; name: string;  }>,
        // modules: {} as Record<number, boolean>,

    },
})


