import instance from "./instance"

export const getClasses = async () => {
    try {
        const res = await instance.get('/classes');
        return res.data;
    } catch (e) {
        alert("Failed to fetch Classes!");
    }
}