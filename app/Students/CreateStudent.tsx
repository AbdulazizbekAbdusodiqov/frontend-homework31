import React, { FormEvent, useEffect, useState } from 'react'
import { StudentCreateWrapper } from './Students.styles'
import { Button, Input, Select } from '@/components'
import { createStudentMutation, useClasses, useSingleStudent, updateStudentMutation } from '@/hooks'
import { getOptionFromDataAdapter } from '@/utils'
import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'

const CreateUpdateStudent = () => {
    const router = useRouter();
    const params = useParams()

    const [studentsValues, setStudentVlues] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        classId: "",
    })

    const handleChange = (e: any) => {

        setStudentVlues({
            ...studentsValues,
            [e.target.name]: e.target.value
        })
    }

    const isEditMode = !!params?.id;

    const { data: student, isLoading } = useSingleStudent({
        id: params?.id
    })

    useEffect(()=>{
        if(student){
            setStudentVlues({
                firstName:student.firstName,
                lastName:student.lastName,
                birthDate:student.birthDate,
                classId:student.classId as string
            })
        }
    },[params?.id, student])
    
    console.log(student);


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
    
    const studentUpdateMutation = updateStudentMutation({
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

        const newStudent = {
            id: `${Date.now()}`,
            firstName: studentsValues.firstName,
            lastName: studentsValues.lastName,
            birthDate: studentsValues.birthDate,
            classId: studentsValues.classId
        }
        if (isEditMode) newStudent.id = params?.id as string

        isEditMode
            ? studentUpdateMutation.mutate(newStudent)
            : studentMutation.mutate(newStudent)
    }

    return (
        <StudentCreateWrapper>
            <h1>{isEditMode ? "Update" : "New"} Student</h1>
            <form onSubmit={handleSubmit}>
                <Input onChange={handleChange} value={studentsValues.firstName} name='firstName' type='text' placeholder='First name' />
                <Input onChange={handleChange} value={studentsValues.lastName} name='lastName' type='text' placeholder='Last name' />
                <Input onChange={handleChange} value={studentsValues.birthDate} name='birthDate' type='date' />
                <Select onChange={handleChange} value={studentsValues.classId} name='classId' options={getOptionFromDataAdapter(classes, "name")} />
                <Button>Save</Button>
            </form>
        </StudentCreateWrapper>
    )
}

export default CreateUpdateStudent