import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateComponent } from './validate/validate.component';
import { ResetComponent } from './reset/reset.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
	{ path: "validate", component: ValidateComponent },
	{ path: "reset/:id", component: ResetComponent },
	{ path: "reports/:id", component: ReportComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
