import USER from "./user";

export default interface DEPARTMENT {
    id: number,
    name: string,
    head: USER | null
}