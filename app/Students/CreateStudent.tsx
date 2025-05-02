import React, { FormEvent } from 'react'
import { StudentCreateWrapper } from './Students.styles'
import { Button, Input, Select } from '@/components'
import { createStudentMutation, useClasses } from '@/hooks'
import { getOptionFromDataAdapter } from '@/utils'
import { useRouter } from 'next/router'

const CreateStudent = () => {
    const router = useRouter();

    const { data: classes = [] } = useClasses();

    const studentMutation = createStudentMutation({
        onSuccess: (student) => {
            console.log("Student Created: ", student);
            router.push('/students');
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
            classId
        } = e.target as typeof e.target & {
            firstName: HTMLInputElement,
            lastName: HTMLInputElement,
            birthDate: HTMLInputElement,
            classId: HTMLSelectElement
        };

        const newStudent = {
            id: `${Date.now()}`,
            firstName: firstName.value,
            lastName: lastName.value,
            birthDate: birthDate.value,
            classId: classId.value
        }

        studentMutation.mutate(newStudent);
    }

    return (
        <StudentCreateWrapper>
            <h1>New Student</h1>
            <form onSubmit={handleSubmit}>
                <Input name='firstName' type='text' placeholder='First name' />
                <Input name='lastName' type='text' placeholder='Last name' />
                <Input name='birthDate' type='date' />
                <Select name='classId' options={getOptionFromDataAdapter(classes, "name")} />
                <Button>Save</Button>
            </form>
        </StudentCreateWrapper>
    )
}

export default CreateStudent