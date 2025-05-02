export interface DefaultObjectType {
    [key: string]: any
}

export interface TableColumn {
    title: string,
    dataIndex: string,
}

export interface TableProps {
    dataSrc?: DefaultObjectType[],
    columns: TableColumn[],
    loading?: boolean,
}