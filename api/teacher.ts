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

export const createTeachers = async (data: Teacher) => {
    try {
        const res = await instance.post('/teachers', data);
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}

export const deleteTeacher = async (id: string) => {
    try {
        const res = await instance.delete(`/teachers/${id}`, );
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}


export const DeleteTeacherMutation = ({
    onSuccess: () => {
        console.log("Teacher deleted:");
        window.location.reload();
    },
    onError: (err: unknown) => {
        alert("Failed to delte!");
        console.error(err);
    }
});

