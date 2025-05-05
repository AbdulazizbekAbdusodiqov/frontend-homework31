import { Table } from '@/components'
import React from 'react'
import {  useTeachers } from '@/hooks'
import { teacherTableCols } from './columns';

const TeachersTable = () => {
    const { data: teachers } = useTeachers();

    return (
        <div>
            <Table
                columns={teacherTableCols}
                dataSrc={teachers}
                
            />
        </div>
    )
}

export default TeachersTable