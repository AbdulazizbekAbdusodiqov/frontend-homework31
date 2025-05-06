import { createClass, getClasses,deleteClass,updateClass,getOneClass } from "@/api";
import { Class } from "@/types";
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
export function updateClassMutation({
    onSuccess,
    onError,
}: {
    onSuccess: (data: unknown) => void,
    onError: (error: unknown) => void,
}) {
    return useMutation({
        mutationFn: (data: Class) => updateClass(data),
        onSuccess,
        onError
    })
}

export function useSingleClass(params: any) {
    return useQuery({
        queryFn: () => getOneClass(params?.id),
        queryKey: ["one-class"],
        enabled: !!params?.id,
    });
}


export function deleteClassMutation({
    onSuccess,
    onError,
}: {
    onSuccess: (classes: Class) => void,
    onError: (classes: Class) => void,
}) {
    return useMutation({
        mutationFn: (id: string) => deleteClass(id),
        onSuccess,
        onError
    })
}