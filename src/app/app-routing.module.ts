import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxLoadingComponent } from './ngx-loading/ngx-loading.component';
import { NgxSpinnerComponent } from './ngx-spinner/ngx-spinner.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
	{path: 'ngx-loading', component: NgxLoadingComponent},
	{path: 'ngx-spinner', component: NgxSpinnerComponent},
	{path: 'custom', component: CustomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
