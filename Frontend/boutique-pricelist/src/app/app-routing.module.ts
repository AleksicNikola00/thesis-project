import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ClothesComponent } from './products/clothes/clothes.component';
import { MixedComponent } from './products/mixed/mixed.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ShoesComponent } from './products/shoes/shoes.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'products/clothes', component: ClothesComponent},
  {path: 'products/shoes', component: ShoesComponent},
  {path: 'products/mixed', component: MixedComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
