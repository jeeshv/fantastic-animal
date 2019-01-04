export interface User {
    id?:string;//?表示id可能为空
    email:string;
    password?:string;
    username:string;
    phone:string;
    question:string;
    answer:string;
}