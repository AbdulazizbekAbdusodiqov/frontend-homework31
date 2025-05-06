import React, { FormEvent, useEffect, useState } from 'react'
import { createClassMutation, updateClassMutation, useSingleTeacher,useSingleClass } from '@/hooks'
import { useRouter } from 'next/router'
import { ClassesCreateWrapper } from './Classes.styles'
import { Button, Input } from '../../components'
import { useParams } from 'next/navigation'
import { toast } from 'react-toastify'

const CreateUpdateClass = () => {
    const router = useRouter();
    const [classValues, setClassValues] = useState({
        name: "",
        studentCount: 0,
        teacherId: 0
    })
    const params = useParams()
    const isEditMode = !!params?.id;


    const classMutation = createClassMutation({
        onSuccess: () => {
            toast.success("class successfully created!")
            router.push('/classes');
        },
        onError: (err: unknown) => {
            alert("Failed to create!");
        }
    });
    
    const classUpdateMutation = updateClassMutation({
        onSuccess: () => {
            toast.success("class successfully updated!")
            router.push('/classes');
        },
        onError: (err: any) => {
            alert("Failed to create!");
        }
    });

        const { data: classes, isLoading } = useSingleClass({
            id: params?.id
        })
    
        
        useEffect(() => {
            if (classes) {
                setClassValues({
                    name:classes.name,
                    studentCount: classes.studentCount as number,
                    teacherId:classes.teacherId as number
                })
            }
    
        }, [params?.id, classes])
    

    const handleChange = (e: any) => {

        setClassValues({
            ...classValues,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const newClass = {
            id: `${Date.now()}`,
            name: classValues.name,
            studentCount: classValues.studentCount,
            teacherId: classValues.teacherId,
        }
        if (isEditMode) newClass.id = params?.id as string

        !isEditMode
            ? classMutation.mutate(newClass)
            : classUpdateMutation.mutate(newClass);
    }

    return (
        <ClassesCreateWrapper>
            <h1>{isEditMode ? "Update" : "New"} Class</h1>
            <form onSubmit={handleSubmit}>
                <Input value={classValues.name} onChange={handleChange} name='name' type='text' placeholder='Name' />
                {isEditMode?(<>
                    <Input value={classValues.studentCount} onChange={handleChange} name='studentCount' type='number' />
                    <Input value={classValues.teacherId} onChange={handleChange} name='teacherId' type='number' />
                </>
                ):null}
                <Button>Save</Button>
            </form>
        </ClassesCreateWrapper>
    )
}

export default CreateUpdateClass