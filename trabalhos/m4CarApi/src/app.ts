import express, { json } from "express"
import { carsRouter } from "./router/cars.rotes"
import { HandlerErrors } from "./errors/handlleErrors.middleware"

export const app = express()

app.use(json())

app.use("/cars", carsRouter)

app.use(HandlerErrors.execute)