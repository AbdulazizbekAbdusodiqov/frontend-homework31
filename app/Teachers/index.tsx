import React from 'react'
import { TeachersWrapper } from './Teachers.styles'
import { Button } from '../../components'
import { useRouter } from 'next/router'
import TeachersTable from './components/TeacherTable'


function Teachers() {
  const router = useRouter()
  const navigateToCreate = () => router.push('/teachers/create')
  
  return (
    <TeachersWrapper>
        <div className="title-side">
        <h1>Teachers</h1>
        <Button onClick={navigateToCreate}>Add Teacher</Button>
      </div>
      <TeachersTable />
    </TeachersWrapper>
  )
}

export default Teachers