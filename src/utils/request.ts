import DOCUMENT from "./document";
import REQUEST_MODEL from "./request_model";
import USER from "./user";

export default interface REQUEST {
    id: number,
    author: USER,
    members: USER[] | null,
    date: Date,
    deadline: Date,
    title: string,
    description: string,
    documents: DOCUMENT[] | null
    model: REQUEST_MODEL,
    progress: any
}
