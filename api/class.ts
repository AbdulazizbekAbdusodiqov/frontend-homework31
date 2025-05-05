import { Class } from "../types";
import instance from "./instance"

export const getClasses = async () => {
    try {
        const res = await instance.get('/classes');
        return res.data;
    } catch (e) {
        alert("Failed to fetch Classes!");
    }
}

export const createClass = async (data: Class) => {
    try {
        const res = await instance.post('/classes', data);
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}