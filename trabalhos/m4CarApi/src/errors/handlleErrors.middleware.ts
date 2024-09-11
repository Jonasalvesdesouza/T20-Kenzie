import { NextFunction } from "express"
import { Request, Response } from "express"
import { AppError } from "./appError"

export class HandlerErrors{
    static execute(err: Error, req: Request, res: Response, next: NextFunction){
         if(err instanceof AppError){
            return res.status(err.statuscode).json({ error: err.message })
         }else{
            console.log(err)
            return res.status(500).json({error: "Internal service error"})
         }
    }
}