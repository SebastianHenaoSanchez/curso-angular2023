import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductGateway } from "../../Products/gateway/productgateway";
import { ProductsResponse } from "../../Products/product";

@Injectable({
    providedIn: 'root'
})

export class ProductUseCase {
// metodos con la logica de negocio de mi aplicacion
constructor(private _productGateway : ProductGateway){}

    getProducts(): Observable<ProductsResponse>{
        return  this._productGateway.getProducts();
    }

}
