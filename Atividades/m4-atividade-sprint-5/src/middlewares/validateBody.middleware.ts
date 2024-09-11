import { NextFunction, Request, Response } from "express";
import { IRequestSchama } from "../interfaces/requestSchema.interface";
import { ZodError } from "zod";

export class ValidateBody{
    static execute(schema: IRequestSchama){
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                if(schema.body){
                    req.body = await schema.body.parseAsync(req.body)
                }
                if(schema.params){
                    req.params = await schema.params.parseAsync(req.params)
                }
                if(schema.query){
                    req.query = await schema.query.parseAsync(req.query)
                }
                next()
            } catch (error) {
                if(error instanceof ZodError){
                    return res.status(409).json(error)
                }
            }
        }
    }
}