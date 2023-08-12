export class Product {
    id!: number
    title!: string
    description!: string
    price!: number
    discountPercentage!: number
    rating!: number
    stock!: number
    brand!: string
    category!: string
    thumbnail!: string
    images!: string[]
}

export class ProductsResponse {
    total!: number
    skip!: number
    products!: Product[]
    limit!: number
}