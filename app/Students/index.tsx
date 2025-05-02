import React from 'react'
import StudentsTable from './components/StudentsTable'
import { StudetsPageWrapper } from './Students.styles'
import { Button } from '@/components'
import { useRouter } from 'next/router'

const Students = () => {
  const router = useRouter();

  const navigateToCreate = () => router.push('/students/create')

  return (
    <StudetsPageWrapper>
      <div className="title-side">
        <h1>Students</h1>
        <Button onClick={navigateToCreate}>Add Student</Button>
      </div>
      <StudentsTable />
    </StudetsPageWrapper>
  )
}

export default Students