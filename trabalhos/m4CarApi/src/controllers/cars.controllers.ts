import { Request, Response, json } from "express"
import { CarServices } from "../service/cars.service"

interface ICartsControllers{
    create(req: Request, res: Response): Response
    getMany(req: Request, res: Response): Response
    getOne(req: Request, res: Response): Response
    delete(req: Request, res: Response): Response
    update(req: Request, res: Response): Response
}

export class CarControllers implements ICartsControllers{
    create(req: Request, res: Response): Response{
        const carsServices = new CarServices()
        
        const create = carsServices.create(req.body)
        
        return res.status(201).json(create)
    }
    getMany(req: Request, res: Response): Response{ 
        const { search, year } = req.query

        const carsServices = new CarServices()
        const getMany = carsServices.getMany(search as string, year as string)

        return res.status(200).json(getMany)
    }
    getOne(req: Request, res: Response): Response{ 
        const carsServices = new CarServices()

        const getOne = carsServices.getOne(req.params.id)

        return res.status(204).json()
    }
    delete(req: Request, res: Response): Response{ 
        const carsServices = new CarServices()
        carsServices.delete(req.params.id)

        return res.status(200).json()
    }
    update(req: Request, res: Response): Response{ 
        const carsServices = new CarServices()
        const update = carsServices.update(req.body, req.params.id)

        return res.status(200).json(update)
    }
    
}
