import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './components/region/region.component';

const routes: Routes = [
  {path:"region_formulaire", component:RegionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
