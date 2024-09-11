import { ICar } from "../interfaces/cars.interfaces"

export const carDatabase: ICar[] = []

export const resetCarsDatabase = () =>{
    carDatabase.length = 0
}

let id = 0

export const generateId = () =>{
    id++
    return id
}