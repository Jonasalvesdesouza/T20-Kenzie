import { NextFunction, Request, Response } from "express"
import { carDatabase } from "../database/database"
import { AppError } from "../errors/appError"

export class IsCarIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(carDatabase.some(car => car.id === Number(req.params.id))){
            throw new AppError(404, "Car not found")
        }

        next()
    }
}