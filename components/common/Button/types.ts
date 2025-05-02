import { ReactElement } from "react";

export interface ButtonProps {
    children?: ReactElement | string,
    title?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}