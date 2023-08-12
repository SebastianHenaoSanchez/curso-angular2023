import { Component, OnInit } from '@angular/core';
import { Product, ProductsResponse } from 'src/app/domain/models/Products/product';
import { ProductUseCase } from 'src/app/domain/models/usecase/product/productUseCase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _productsUseCase: ProductUseCase) {

  }

  products!: Product[]
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productsUseCase.getProducts().subscribe((data: ProductsResponse) => {
      this.products = data.products;
    })
  }

}
