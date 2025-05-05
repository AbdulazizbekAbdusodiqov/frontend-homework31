import styled from "styled-components";

export const ClassesWrapper = styled.div`
    padding: 10px;
    .title-side{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const ClassesCreateWrapper = styled.div`
    padding: 30px;

    & form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`;