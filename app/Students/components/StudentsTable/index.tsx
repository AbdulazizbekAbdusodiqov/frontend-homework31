import { Button, Table } from '@/components'
import React from 'react'
import { studentTableCols } from './columns'
import { deleteStudentMutation, useStudents } from '@/hooks'
import { RiDeleteBinFill } from "react-icons/ri";
import { ActionsWrapper } from './StudentTableStyled';

const StudentsTable = () => {
    const { data: users } = useStudents();

    const handleDelete = async (id: string) => {
		if (!id) {
			console.error("ID ko'rsatilmagan");
			return;
		}

		if (!window.confirm("Haqiqatan ham bu ma'lumotni o'chirmoqchimisiz?")) {
			return;
		}

	};

    return (
        <div>
            <Table
                actionsCol={
                    <ActionsWrapper>
                        <Button onClick={handleDelete}>Delete</Button>
                        <Button>Update</Button>
                    </ActionsWrapper>
                }
                columns={studentTableCols}
                dataSrc={users}
            />
        </div>
    )
}

export default StudentsTable