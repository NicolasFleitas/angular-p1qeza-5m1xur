import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// importar el archivo que tiene los datos del producto desde un archivo externo

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
  ) { }
  //El ActivatedRoutees específico para cada componente enrutado cargado por el enrutador angular. Contiene información sobre la ruta, sus parámetros y datos adicionales asociados con la ruta.

//angular llamada a ngOnInit poco despues de crear un componente

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

}