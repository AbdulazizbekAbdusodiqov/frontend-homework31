import React, { FormEvent } from 'react'
import { Button, Input } from '@/components'
import { createTeacherMutation } from '@/hooks'
import { useRouter } from 'next/router'
import { TeacherCreateWrapper } from './Teachers.styles'

const CreateTeacher = () => {
    const router = useRouter();


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

        const {
            firstName,
            lastName,
            birthDate,
        } = e.target as typeof e.target & {
            firstName: HTMLInputElement,
            lastName: HTMLInputElement,
            birthDate: HTMLInputElement,
        };

        const newTeacher = {
            id: `${Date.now()}`,
            firstName: firstName.value,
            lastName: lastName.value,
            birthDate: birthDate.value,
            classes:[]
        }

        teacherMutation.mutate(newTeacher);
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

export default CreateTeacher