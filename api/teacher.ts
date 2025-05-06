import { Teacher } from "../types";
import instance from "./instance"

export const getTeachers = async () => {
    try {
        const res = await instance.get<Teacher[]>('/teachers');
        return res.data;
    } catch(e) {
        alert("Failed to fetch teachers!");
    }
}

export const getOneTeacher = async (id:string | number) => {
    try {
        const res = await instance.get<Teacher>(`/teachers/${id}`);
        return res.data;
    } catch(e) {
        alert("Failed to fetch teacher!");
    }
}

export const createTeachers = async (data: Teacher) => {
    try {
        const res = await instance.post('/teachers', data);
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}

export const updateTeachers = async (data: Teacher) => {
    try {
        const res = await instance.put(`/teachers/${data.id}`, data);
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}

export const deleteTeacher = async (id: string | number) => {
    try {
        const res = await instance.delete(`/teachers/${id}`, );
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}


