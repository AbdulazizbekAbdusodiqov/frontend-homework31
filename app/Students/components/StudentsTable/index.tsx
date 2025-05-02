import { Table } from '@/components'
import React from 'react'
import { studentTableCols } from './columns'
import { useStudents } from '@/hooks'

const StudentsTable = () => {
    const { data: users } = useStudents();

    return (
        <div>
            <Table
                columns={studentTableCols}
                dataSrc={users}
            />
        </div>
    )
}

export default StudentsTable