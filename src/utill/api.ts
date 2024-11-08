
import axios from 'axios';
import { mngUrl } from '@/utill/router';

export const fetchDeptData = async () => {
    try {
        const response = await axios.get(`${mngUrl}/departments`);
        console.log("백엔드에서 받은 부서 데이터 (treeData):", response.data.treeData);
        return response.data.treeData; // 백엔드에서 모든 부서 정보 객체로 응답하는 경우
    } catch (error) {
        console.error("데이터 가져오기 에러:", error);
        return [];
    }
};



