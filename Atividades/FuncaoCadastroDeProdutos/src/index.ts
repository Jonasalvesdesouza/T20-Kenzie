import { IProduct } from "./interFaces";

const productList: IProduct[] = []

const createProduct = (product: IProduct) => {
    productList.push(product)
    return { product, message: "Product sucessfully created" }
}

const getProduct = () => {
    return productList
}

const product1 = createProduct({ id:1, name: "Geladeira", price: 2400 })
const product2 = createProduct({ id:2, name: "Cooktop", price: 1200 })


console.log(getProduct())