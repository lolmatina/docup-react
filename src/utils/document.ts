import USER from "./user";

export default interface DOCUMENT {
    id: number,
    name: string,
    author: USER,
    date: Date,
    file: any 
}