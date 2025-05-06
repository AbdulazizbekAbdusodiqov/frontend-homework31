import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Input } from '@/components'
import { createTeacherMutation, updateTeacherMutation, useSingleTeacher } from '@/hooks'
import { useRouter } from 'next/router'
import { TeacherCreateWrapper } from './Teachers.styles'
import { useParams } from 'next/navigation'
import { toast } from 'react-toastify'

const CreateUpdateTeacher = () => {

    const router = useRouter();
    const [teacherValues, setTeacherValues] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        classes: []
    })
    const params = useParams()
    const isEditMode = !!params?.id;

    const teacherMutation = createTeacherMutation({
        onSuccess: (teacher) => {
            toast.success("Teacher created!")
            router.push('/teachers');
        },
        onError: (err:any) => {
            toast.error("Something went wrong! "+err.status)
        }
    });
    
    const teacherUpdateMutation = updateTeacherMutation({
        onSuccess: (teacher:any) => {
            toast.success("Teacher updated!")
            router.push('/teachers');
        },
        onError: (err:any) => {
            toast.error("Something went wrong! "+err.status)
        }
    });


    const { data: teacher, isLoading } = useSingleTeacher({
        id: params?.id
    })

    const handeleChange = (e: any) => {
        setTeacherValues({
            ...teacherValues,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (teacher) {
            setTeacherValues({
                firstName: teacher.firstName,
                lastName: teacher.lastName,
                birthDate: teacher.birthDate,
                classes: []
            })
        }

    }, [params?.id, teacher])


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTeacher = {
            id: `${Date.now()}`,
            firstName: teacherValues.firstName,
            lastName: teacherValues.lastName,
            birthDate: teacherValues.birthDate,
            classes: teacherValues.classes
        }
        if (isEditMode) {
            newTeacher.id = params?.id as string
        }
        isEditMode
            ? teacherUpdateMutation.mutate(newTeacher)
            : teacherMutation.mutate(newTeacher);
    }

    return (
        <TeacherCreateWrapper>
            <h1>{isEditMode ? "Update" : "New"} Teacher</h1>
            <form onSubmit={handleSubmit}>
                <Input onChange={handeleChange} value={teacherValues.firstName} name='firstName' type='text' placeholder='First name' />
                <Input onChange={handeleChange} value={teacherValues.lastName} name='lastName' type='text' placeholder='Last name' />
                <Input onChange={handeleChange} value={teacherValues.birthDate} name='birthDate' type='date' />
                <Button>Save</Button>
            </form>
        </TeacherCreateWrapper>
    )
}

export default CreateUpdateTeacher