import { Button, Table } from '@/components'
import React from 'react'
import { ActionsWrapper } from './TeacherTableStyled';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteTeacherMutation, useTeachers } from '../../../../hooks';
import { teacherTableCols } from './columns';

const TeacherTable = () => {
    const { data: users } = useTeachers();
    const queryClient = useQueryClient()
    const deleteMutation = deleteTeacherMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['teachers']
            })
            toast.success("Teacher removed!")
        },
        onError: (err: any) => {
            toast.error(`something went wrong! ${err?.status}`)
        }
    })


    const handleDelete = async (teacher: any) => {
        if (window.confirm("Are you sure you want to delete this teacher?")) {
            deleteMutation.mutate(teacher.id);
        }
    };

    return (
        <div>
            <Table
                actionsCol={(teacher) => {
                    return (

                        <ActionsWrapper>
                            <Button onClick={() => handleDelete(teacher)}>Delete</Button>
                            <Button href={`teachers/edit/${teacher.id}`}>Update</Button>
                        </ActionsWrapper>
                    )
                }}
                columns={teacherTableCols}
                dataSrc={users}
            />
        </div>
    )
}

export default TeacherTable