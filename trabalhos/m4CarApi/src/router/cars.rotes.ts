import { Router } from "express";
import { CarControllers } from "../controllers/cars.controllers";
import { IsCarIdValid } from "../middlewares/isCarIdValid.middleware";

export const carsRouter = Router()

const carsControllers = new CarControllers()

carsRouter.post("/", carsControllers.create)
carsRouter.get("/", carsControllers.getMany)
carsRouter.get("/:id", IsCarIdValid.execute, carsControllers.getOne)
carsRouter.delete("/:id", IsCarIdValid.execute, carsControllers.delete)
carsRouter.patch("/:id", IsCarIdValid.execute, carsControllers.update)
