import { Student } from "@/types";
import instance from "./instance"

export const getStudents = async () => {
    try {
        const res = await instance.get<Student[]>('/students');
        return res.data;
    } catch(e) {
        alert("Failed to fetch students!");
    }
}

export const getOneStudent = async (id:string | number) => {
    try {
        const res = await instance.get<Student>(`/students/${id}`);
        return res.data;
    } catch(e) {
        alert("Failed to fetch students!");
    }
}

export const createStudent = async (data: Student) => {
    try {
        const res = await instance.post('/students', data);
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}

export const updateStudent = async (data: Student) => {
    try {
        const res = await instance.put(`/students/${data.id}`, data);
        return res.data;
    } catch(e) {
        alert("Failed to update data!");
    }
}

export const deleteStudent = async (id: string | number) => {
    try {
        const res = await instance.delete(`/students/${id}`);
        return res.data;
    } catch(e) {
        alert("Failed to delete student!");
    }
} 