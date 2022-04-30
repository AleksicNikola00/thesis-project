import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ClothesComponent } from './products/clothes/clothes.component';
import { ShoesComponent } from './products/shoes/shoes.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'products/clothes', component: ClothesComponent},
  {path: 'products/shoes', component: ShoesComponent},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
