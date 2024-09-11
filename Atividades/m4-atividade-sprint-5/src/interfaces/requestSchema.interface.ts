import { AnyZodObject } from "zod";

export interface IRequestSchama{
    body?: AnyZodObject
    params?: AnyZodObject
    query?: AnyZodObject
}