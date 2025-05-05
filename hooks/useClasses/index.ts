import { createStudent,deleteStudent } from "@/api";
import { createClass, getClasses } from "@/api/class";
import { Class, Student } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useClasses() {
    return useQuery({
        queryFn: getClasses,
        queryKey: ["classes"]
    })
}

export function createClassMutation({
    onSuccess,
    onError,
}: {
    onSuccess: (data: unknown) => void,
    onError: (error: unknown) => void,
}) {
    return useMutation({
        mutationFn: (data: Class) => createClass(data),
        onSuccess,
        onError
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