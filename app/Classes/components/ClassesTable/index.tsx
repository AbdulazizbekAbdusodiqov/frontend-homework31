import { Button, Table } from '@/components'
import React from 'react'
import { useClasses, deleteClassMutation } from '@/hooks'
import { classesTableCols } from './columns';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { ActionsWrapper } from './ClassTableStyled';

const ClassesTable = () => {
    const { data: classes } = useClasses();
    const queryClient = useQueryClient()
    const deleteMutation = deleteClassMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['classes']
            })
            toast.success("Class removed!")
        },
        onError: (err: any) => {
            toast.error(`something went wrong! ${err?.status}`)
        }
    })


    const handleDelete = async (teacher: any) => {
        if (window.confirm("Are you sure you want to delete this class?")) {
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
                            <Button href={`classes/edit/${teacher.id}`}>Update</Button>
                        </ActionsWrapper>
                    )
                }}
                columns={classesTableCols}
                dataSrc={classes}
            />
        </div>
    )
}

export default ClassesTable