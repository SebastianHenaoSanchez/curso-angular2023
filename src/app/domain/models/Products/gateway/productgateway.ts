import { Observable } from "rxjs";
import { ProductsResponse } from "../product";

export abstract class ProductGateway {
    abstract getProducts() : Observable<ProductsResponse> 
}