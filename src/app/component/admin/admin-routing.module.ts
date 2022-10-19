import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {MyAccountComponent} from "./components/my-account/my-account.component";

const routes: Routes = [
	{
		path: '', component: AdminDashboardComponent,
		children: [
			{path: 'home', component: HomeComponent},
			{path: 'myAccount', component: MyAccountComponent},
			{path: '', pathMatch: 'full', redirectTo: 'home'}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule {
}
