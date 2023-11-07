import DEPARTMENT from "./department";
import REQUEST from "./request";

export default interface USER {
    id: number,
    name: string,
    email: string,
    department: DEPARTMENT,
    requests: REQUEST[]
}