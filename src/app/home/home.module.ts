import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, HomePageComponent]
})
export class HomeModule {}
