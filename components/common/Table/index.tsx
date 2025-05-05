import React, { FC } from 'react'
import { TableProps } from './types'
import { TableWrapper } from './Table.styles';

const Table: FC<TableProps> = (props) => {
	const { columns = [], dataSrc = [], loading = true, actionsCol = () => null } = props;



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
							<th style={{ width: `${column.width}%` }} key={column.dataIndex}>{column.title}</th>
						))}

					</tr>
				</thead>
				<tbody>
					{loadingContent}
					{emptyContent}
					{dataSrc.map(data => (
						<tr key={data[columns[0]?.dataIndex ?? 'key']}>
							{columns.map(col => {
								return col.dataIndex === "actions"
									? <td style={{ width: `${col.width}%` }} key={col.dataIndex}>{actionsCol(data)}</td>
									: <td key={col.dataIndex}>{data[col.dataIndex]}</td>
							})}
						</tr>
					))}

				</tbody>
			</table>
		</TableWrapper>
	)
}

export default Table