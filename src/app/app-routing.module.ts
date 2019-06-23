import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxLoadingComponent } from './ngx-loading/ngx-loading.component';

const routes: Routes = [
	{path: 'ngx-loading', component: NgxLoadingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
