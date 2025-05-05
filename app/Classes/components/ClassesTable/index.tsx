import { Table } from '@/components'
import React from 'react'
import { useClasses } from '@/hooks'
import { classesTableCols } from './columns';

const ClassesTable = () => {
    const { data: classes } = useClasses();

    return (
        <div>
            <Table
                columns={classesTableCols}
                dataSrc={classes}
                
            />
        </div>
    )
}

export default ClassesTable