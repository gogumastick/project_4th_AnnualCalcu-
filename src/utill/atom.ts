import { atom } from 'recoil';

// 직원추가 모달창
export const addEmplyModalState = atom({
    key : 'addEmplyModalOpen',
    default : false,
})


// 등록된 직원 정보
export const addedEmplyState = atom<object[]>({
    key : 'addedEmployee',
    default : [],
})


