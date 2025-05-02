import React, { FC } from 'react'
import { ButtonWrapper } from './Btn.styles'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = (props) => {
    const { children, title, onClick } = props;

    return (
        <ButtonWrapper onClick={onClick}>
            {children || title}
        </ButtonWrapper>
    )
}

export default Button