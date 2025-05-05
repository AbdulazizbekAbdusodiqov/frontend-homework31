import React, { FC } from 'react'
import { TableProps } from './types'
import { TableWrapper } from './Table.styles';
import { RiDeleteBinFill } from "react-icons/ri";

const Table: FC<TableProps> = (props) => {
	const { columns = [], dataSrc = [], loading = true,  } = props;

	const handleDelete = async (id: string) => {
		if (!id) {
			console.error("ID ko'rsatilmagan");
			return;
		}

		if (!window.confirm("Haqiqatan ham bu ma'lumotni o'chirmoqchimisiz?")) {
			return;
		}

	};

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
										if (!data.id) {
											console.error("Elementning ID'si topilmadi");
											return;
										}
										handleDelete(data.id);
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