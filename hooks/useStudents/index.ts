import { getStudents } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useStudents() {
    return useQuery({
        queryFn: getStudents,
        queryKey: ["students"]
    })
}