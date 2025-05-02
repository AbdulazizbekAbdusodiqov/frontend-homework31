import { createStudent, deleteStudent } from "@/api";
import { getClasses } from "@/api/class";
import { Student } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useClasses() {
    return useQuery({
        queryFn: getClasses,
        queryKey: ["classes"]
    })
}

export function createStudentMutation({
    onSuccess,
    onError,
}: {
    onSuccess: (student: Student) => void,
    onError: (student: Student) => void,
}) {
    return useMutation({
        mutationFn: (data: Student) => createStudent(data),
        onSuccess,
        onError
    })
}
export function deleteStudentMutation({
    onSuccess,
    onError,
}: {
    onSuccess: (student: Student) => void,
    onError: (student: Student) => void,
}) {
    return useMutation({
        mutationFn: (id: string) => deleteStudent(id),
        onSuccess,
        onError
    })
}