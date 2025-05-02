import React, { FC } from 'react'
import { TableProps } from './types'
import { TableWrapper } from './Table.styles';
import { RiDeleteBinFill } from "react-icons/ri";
import {  deleteStudentMutation } from '../../../hooks';
import { useRouter } from 'next/router';

const Table: FC<TableProps> = (props) => {
	const { columns = [], dataSrc = [], loading = true } = props;

	const router = useRouter()

	const studentMutation = deleteStudentMutation({
		onSuccess: () => {
			console.log("Student deleted:");
			window.location.reload();
			// router.push(`/students`);
		},
		onError: (err) => {
			alert("Failed to delte!");
			console.error(err);
		}
	});

	const handleDelete = async (id: string) => {
		studentMutation.mutate(id);
	}

	const loadingContent = dataSrc.length === 0 && !!loading
		? <tr>
			<td colSpan={columns.length} style={{ textAlign: "center" }}>Loading...</td>
		</tr>
		: null;

	const emptyContent = dataSrc.length === 0 && !loading
		? <tr>
			<td colSpan={columns.length} style={{ textAlign: "center" }}>No Data</td>
		</tr>
		: null;

	return (
		<TableWrapper>
			<table>
				<thead>
					<tr>
						{columns.map(column => (
							<th key={column.dataIndex}>{column.title}</th>
						))}
						<th style={{ width: "40px" }}></th>
					</tr>
				</thead>
				<tbody>
					{loadingContent}
					{emptyContent}
					{dataSrc.map(data => (
						<tr key={data[columns[0]?.dataIndex ?? 'key']}>
							{columns.map(col => (
								<td key={col.dataIndex}>{data[col.dataIndex]}</td>
							))}
							<td>
								<button
									style={{ border: "none", backgroundColor: "unset" }}
									onClick={() => {		
										console.log(data);				
										handleDelete(data.id)
									}}	
								>
									<RiDeleteBinFill />
								</button>
							</td>
						</tr>
					))}

				</tbody>
			</table>
		</TableWrapper>
	)
}

export default Table