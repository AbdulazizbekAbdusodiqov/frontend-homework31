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

export const createStudent = async (data: Student) => {
    try {
        const res = await instance.post('/students', data);
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}

export const deleteStudent = async (id: string) => {
    try {
        const res = await instance.delete(`/students/${id}`, );
        return res.data;
    } catch(e) {
        alert("Failed to post data!");
    }
}


export const DeleteStudentMutation = ({
    onSuccess: () => {
        console.log("Student deleted:");
        window.location.reload();
    },
    onError: (err: unknown) => {
        alert("Failed to delte!");
        console.error(err);
    }
});
