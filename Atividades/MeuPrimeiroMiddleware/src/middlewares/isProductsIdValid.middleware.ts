import { NextFunction, Request, Response } from "express";
import { productsDatabase } from "../database/database";
import { AppError } from "../errors/erros";

export class IsProductValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const productFound = productsDatabase.find(product => product.id === Number(req.params.id))
        if(!productFound){
            throw new AppError(404, "Product not found")
        }
        res.locals.product = productFound

        return next()
    }
}