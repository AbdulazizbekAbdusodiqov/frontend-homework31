import React, { FC } from 'react'
import { ButtonWrapper, LinkWrapper } from './Btn.styles'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = (props) => {
    const { children, title, onClick, href } = props;

    return !href ? (
        <ButtonWrapper onClick={onClick}>
            {children || title}
        </ButtonWrapper>
    ): (
        <LinkWrapper href={href}>
            {children || title}
        </LinkWrapper>
    )
}

export default Button