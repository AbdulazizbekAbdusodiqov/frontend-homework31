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

export const getOneClass = async (id:string | number) => {
    try {
        const res = await instance.get<Class>('/classes/'+id);
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

export const updateClass = async (data: Class) => {
    try {
        const res = await instance.put(`/classes/${data.id}`, data);
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}

export const deleteClass = async (id: string | number) => {
    try {
        const res = await instance.delete(`/classes/${id}`);
        return res.data;
    } catch(e) {
        alert("Failed to delete data!");
    }
}
