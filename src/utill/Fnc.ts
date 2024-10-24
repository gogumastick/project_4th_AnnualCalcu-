// import { TestEmplInfoDataInterface } from '@/utill/interface';


// 직원 조회 화면 만드는 함수
// 내림차순 비교 함수(기존)
// export const DescendFnc = <T>(a: T, b: T, orderBy: keyof T): 1 | -1 | 0 => {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// }
// 내림차순 비교 함수
// export const DescendFnc = (a: TestEmplInfoDataInterface, b: TestEmplInfoDataInterface, orderBy: keyof TestEmplInfoDataInterface): number => {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// };
export const DescendFnc = <T>(a: T, b: T, orderBy: keyof T): number => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};

// 직원 조회 화면에서 사용하는 비교 함수(기존)
type Order = 'asc' | 'desc';
// export const GetComparatorFnc = <Key extends keyof any>(
//     order: Order,
//     orderBy: Key
// ): ((a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number) => {
//     return order === 'desc'
//         ? (a, b) => DescendFnc(a, b, orderBy)
//         : (a, b) => -DescendFnc(a, b, orderBy);
// };

// 직원 조회 화면에서 사용하는 비교 함수
// type Order = 'asc' | 'desc';
// export const GetComparatorFnc = (
//     order: Order,
//     orderBy: keyof TestEmplInfoDataInterface
// ): ((a: TestEmplInfoDataInterface, b: TestEmplInfoDataInterface) => number) => {
//     return order === 'desc'
//         ? (a, b) => DescendFnc(a, b, orderBy)
//         : (a, b) => -DescendFnc(a, b, orderBy);
// };
export const GetComparatorFnc = <T>(
    order: Order,
    orderBy: keyof T
): ((a: T, b: T) => number) => {
    return order === 'desc'
        ? (a, b) => DescendFnc(a, b, orderBy)
        : (a, b) => -DescendFnc(a, b, orderBy);
};

