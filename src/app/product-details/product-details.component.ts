import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// importar el archivo que tiene los datos del producto desde un archivo externo

import { products } from '../products';
// se importa el servico del carrito
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService, // se inyecta el servicio
  ) { }
  // El ActivatedRoutees específico para cada componente enrutado cargado por el enrutador angular.
  // Contiene información sobre la ruta, sus parámetros y datos adicionales asociados con la ruta.

// angular llamada a ngOnInit poco despues de crear un componente

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert('Se agregó su producto al carrito!');
    this.cartService.addToCart(product);
  }

}
