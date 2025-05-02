import styled from "styled-components";

export const TableWrapper = styled.div`
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 10px 10px 0 0;
    overflow: hidden;

    table {
        width: 100%;
        border-collapse: collapse;
    }

    table tbody tr,
    table tr th,
    table tr td {
        border: 1px solid #f0f0f0;
    }

    th, td {
        padding: 8px 6px;
    }

    th {
        background-color: #f0f0f060;
    }
`;