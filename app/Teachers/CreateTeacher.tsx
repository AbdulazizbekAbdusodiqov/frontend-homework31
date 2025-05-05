import React, { FormEvent, useState } from 'react'
import { Button, Input } from '@/components'
import { createTeacherMutation } from '@/hooks'
import { useRouter } from 'next/router'
import { TeacherCreateWrapper } from './Teachers.styles'
import { useParams } from 'next/navigation'

const CreateUpdateTeacher = () => {

    const router = useRouter();
    const [teacherValues, setTEacherValues] = useState({
        firstName:"",
        lastName:"",
        birthDate:"",
        classes:[]
    })
    const params = useParams() 
    const isEditMode = !!params?.id;
    
    const teacherMutation = createTeacherMutation({
        onSuccess: (teacher) => {
            console.log("Teacher Created: ", teacher);
            router.push('/teachers');
        },
        onError: (err) => {
            alert("Failed to create!");
            console.error(err);
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        

        const newTeacher = {
            id: `${Date.now()}`,
            firstName: teacherValues.firstName,
            lastName: teacherValues.lastName,
            birthDate:teacherValues.birthDate,
            classes: teacherValues.classes
        }
        if(isEditMode){
            newTeacher.id = params?.id as string
        }
        isEditMode 
        ? teacherMutation.mutate(newTeacher)
        : teacherMutation.mutate(newTeacher);
    }

    return (
        <TeacherCreateWrapper>
            <h1>New Teacher</h1>
            <form onSubmit={handleSubmit}>
                <Input name='firstName' type='text' placeholder='First name' />
                <Input name='lastName' type='text' placeholder='Last name' />
                <Input name='birthDate' type='date' />
                <Button>Save</Button>
            </form>
        </TeacherCreateWrapper>
    )
}

export default CreateUpdateTeacher