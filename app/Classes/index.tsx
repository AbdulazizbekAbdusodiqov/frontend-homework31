import React from 'react'
import { ClassesWrapper } from './Classes.styles'
import { Button } from '../../components'
import { useRouter } from 'next/router'
import ClassesTable from './components/ClassesTable'

const Classes = () => {

  const router = useRouter()
  const navigateToCreate = () => router.push('/classes/create')
  
    return (
        <ClassesWrapper>
            <div className="title-side">
                <h1>Classes</h1>
                <Button onClick={navigateToCreate}>Add Class</Button>
            </div>
            <ClassesTable/>
        </ClassesWrapper>
    )
}

export default Classes