import React, { FC, InputHTMLAttributes } from 'react'
import { InputWrapper } from './Input.styles'
import { InputProps } from './types'

const Input: FC<InputProps> = (props) => {
    return (
        <InputWrapper type={props.type} {...props} />
    )
}

export default Input