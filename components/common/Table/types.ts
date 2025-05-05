export interface DefaultObjectType {
    [key: string]: any;
}

export interface TableColumn {
    title: string;
    dataIndex: string;
    width: number;
}

export interface TableProps {
    dataSrc?: DefaultObjectType[];
    columns: TableColumn[];
    loading?: boolean;
    actionsCol?: React.ReactElement;
}
