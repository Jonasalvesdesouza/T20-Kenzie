import { carDatabase, generateId } from "../database/database"
import { ICar, TCreateBody, TUpdateBody } from "../interfaces/cars.interfaces"

interface ICarsServices{
    create(body: TCreateBody): ICar
    getMany(search?: string, year?: string): ICar[]
    getOne(id: string): ICar
    delete(id: string):void
    update(body: TUpdateBody, id: string): ICar
}

export class CarServices implements ICarsServices{
    create(body: TCreateBody): ICar{

        const date = new Date()

        const newCar: ICar = {
            id:generateId(),
            model: body.model,
            km: body.km,
            year: body.year,
            brand: body.brand,
            price: body. price,
            createdAt: date,
            updatedAt: date,
        }
        carDatabase.push(newCar)

        return newCar
    }
    getMany(search?: string, year?: string): ICar[] {
        const carsList = carDatabase.filter((car)=>{
            const searchRule = search 
                ? 
                car.model.toLocaleLowerCase().includes(search.toLowerCase()) 
                : 
                true
            const yearRule = year ? car.year === Number(year) : true

            return searchRule && yearRule
        })

        return carsList
    }
    getOne(id: string): ICar {
        const car = carDatabase.find((car) => car.id === Number(id)) as ICar

        return car
    }
    delete(id: string): void {
        const index = carDatabase.findIndex((car) => car.id === Number(id))

        carDatabase.slice(index, 1)
    }
    update(body: Partial<TCreateBody>, id: string): ICar {
        const currentCar = carDatabase.find((car) => car.id === Number(id)) as ICar

        const date = new Date()
        const newCar = { ...currentCar, ...body, updatedAt: date}
        const index = carDatabase.findIndex((car) => car.id === Number(id))

        carDatabase.splice(index, 1, newCar)

        return newCar
    } 
}