export const getOptionFromDataAdapter = (
    data: any[] = [],
    labelKey: string,
    valueKey?: string
) => {
    return data.map(obj => ({
        label: obj[labelKey],
        value: obj[valueKey || "id"]
    }))
}