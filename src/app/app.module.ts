import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsAlertsComponent } from './products-alerts/products-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
=======
>>>>>>> 47c1e998d83910fc4c4524001740a6be744562c6

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
<<<<<<< HEAD
      { path: 'cart', component: CartComponent },
=======
>>>>>>> 47c1e998d83910fc4c4524001740a6be744562c6
      // un route asocia una o mas url con un componente
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductsAlertsComponent,
<<<<<<< HEAD
    ProductDetailsComponent,
    CartComponent
=======
    ProductDetailsComponent
>>>>>>> 47c1e998d83910fc4c4524001740a6be744562c6
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
<<<<<<< HEAD
*/
=======
*/
>>>>>>> 47c1e998d83910fc4c4524001740a6be744562c6
