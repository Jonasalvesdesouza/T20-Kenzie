import { generateId, productsDatabase } from "../database/database";
import { IProduct } from "../interface/products.interfaces";

export class ProductsServices{
    getProducts(){
        return productsDatabase
    }
    createProduct(name: string, price: number){
        const newProduct: IProduct = {
            id: generateId(),
            name,
            price,
        }

        productsDatabase.push(newProduct)
        return newProduct
    }
    deleteProduct(id: string){
        const index = productsDatabase.findIndex(
            product => product.id === Number(id)
        )
        productsDatabase.slice(index, 1)
    }
}