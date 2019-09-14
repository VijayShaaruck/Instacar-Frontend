import { NgbModule, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjKi94nFlln_wDT72jp2pjBik7ohWZD20  ',
      libraries: ['places']
    }),
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, HomePageComponent],
  providers: [NgbTabsetConfig]
})
export class HomeModule {}
