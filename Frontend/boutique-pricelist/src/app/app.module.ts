import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { ShoesComponent } from './products/shoes/shoes.component';
import { ClothesComponent } from './products/clothes/clothes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterComponent } from './products/filter/filter.component';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ShoesComponent,
    ClothesComponent,
    NavbarComponent,
    FilterComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
