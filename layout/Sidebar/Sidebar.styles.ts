import styled from "styled-components";

export const SidebarWrapper = styled.nav`
    width: 240px;
    height: 100vh;
    background-color: #001529;
    color: white;

    .logo {
        padding: 10px;
        height: 55px;
        display: flex;
        align-items: center;
    }

    .menu-items {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 10px;
    }
`;