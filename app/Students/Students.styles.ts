import styled from "styled-components";

export const StudetsPageWrapper = styled.div`
    padding: 30px;

    .title-side {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const StudentCreateWrapper = styled.div`
    padding: 30px;

    & form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`;