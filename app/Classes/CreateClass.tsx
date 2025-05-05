import React, { FormEvent } from 'react'
import { createClassMutation, createTeacherMutation } from '@/hooks'
import { useRouter } from 'next/router'
import { ClassesCreateWrapper } from './Classes.styles'
import { Button, Input } from '../../components'

const CreateClass = () => {
    const router = useRouter();


    const classMutation = createClassMutation({
        onSuccess: (createdClass: unknown) => {
            console.log("Class Created: ", createdClass);
            router.push('/classes');
        },
        onError: (err: unknown) => {
            alert("Failed to create!");
            console.error(err);
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {
            name,
        } = e.target as typeof e.target & {
            name: HTMLInputElement,
        };

        const newClass = {
            id: `${Date.now()}`,
            name: name.value,
            studentCount:0,
            teacherId:"",
        }

        classMutation.mutate(newClass);
    }

    return (
        <ClassesCreateWrapper>
            <h1>New Class</h1>
            <form onSubmit={handleSubmit}>
                <Input name='name' type='text' placeholder='First name' />
                <Button>Save</Button>
            </form>
        </ClassesCreateWrapper>
    )
}

export default CreateClass