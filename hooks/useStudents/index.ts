import {
    createStudent,
    deleteStudent,
    getOneStudent,
    getStudents,
    updateStudent,
} from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { mutationsFunctions, Student } from "../../types";

export function useStudents() {
    return useQuery({
        queryFn: getStudents,
        queryKey: ["students"],
    });
}

export function createStudentMutation({
    onSuccess,
    onError,
}: {
    onSuccess: (student: Student) => void;
    onError: (student: Student) => void;
}) {
    return useMutation({
        mutationFn: (data: Student) => createStudent(data),
        onSuccess,
        onError,
    });
}

export function updateStudentMutation({
    onSuccess,
    onError,
}: {
    onSuccess: (student: Student) => void;
    onError: (student: Student) => void;
}) {
    return useMutation({
        mutationFn: (data: Student) => updateStudent(data),
        onSuccess,
        onError,
    });
}

export function useSingleStudent(params: any) {
    return useQuery({
        queryFn: () => getOneStudent(params?.id),
        queryKey: ["one-student"],
        enabled: !!params?.id,
    });
}

export function DeleteStudentMutation({
    onSuccess,
    onError,
}: mutationsFunctions) {
    return useMutation({
        mutationFn: (id: string | number) => deleteStudent(id),
        onSuccess,
        onError,
    });
}
