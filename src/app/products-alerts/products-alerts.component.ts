import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-alerts', // El selectoridentifica el componente.
  // El selector es el nombre que le da al componente angular cuando se representa
  // como un elemento HTML en la página. Por convención, los selectores de componentes angulares
  // comienzan con el prefijo app-, seguido del nombre del componente
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.css']
})
export class ProductsAlertsComponent implements OnInit {

  @Input() product;
  @Output() notify = new EventEmitter();

  // This allows the product alert component to emit an event when the value of the notify property changes.
  // Esto permite que  la alerta del producto se emita cuando el valor de la propiedad notify tenga cambios

  constructor() { }



  ngOnInit() {
  }

}
