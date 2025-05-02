import React, { FC } from 'react'
import { SelectWrapper } from './Select.styles'
import { SelectProps } from './types'

const Select: FC<SelectProps> = (props) => {
    return (
        <SelectWrapper {...props}>
            {props.options.map(opt => (
                <option value={opt.value} key={opt.value}>
                    {opt.label}
                </option>
            ))}
        </SelectWrapper>
    )
}

export default Select