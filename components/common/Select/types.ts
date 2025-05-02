import { SelectHTMLAttributes } from "react"

export interface Option {
    label: string,
    value: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[]
}