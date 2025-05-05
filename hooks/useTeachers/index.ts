import { useMutation, useQuery } from "@tanstack/react-query";
import { createTeachers, deleteTeacher,  getTeachers } from "../../api/teacher";
import { Teacher } from "../../types";

export function useTeachers() {
    return useQuery({
        queryFn: getTeachers,
        queryKey: ["teachers"]
    })
}

export function createTeacherMutation({
    onSuccess,
    onError,
}: {
    onSuccess: (data: unknown) => void,
    onError: (error: unknown) => void,
}) {
    return useMutation({
        mutationFn: (data: Teacher) => createTeachers(data),
        onSuccess,
        onError
    })
}

export function deleteTeacherMutation({
    onSuccess,
    onError,
}: {
    onSuccess: (teacher: Teacher) => void,
    onError: (teacher: Teacher) => void,
}) {
    return useMutation({
        mutationFn: (id: string) => deleteTeacher(id),
        onSuccess,
        onError
    })
}