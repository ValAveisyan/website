import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppComponent} from "../../app.component";
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {LeftNavigateComponent} from './components/left-navigate/left-navigate.component';
import {MainComponent} from './components/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MyAccountComponent} from './components/my-account/my-account.component';
import {FilterUsersPipe} from './pipe/filter-users.pipe';
import {MatSliderModule} from "@angular/material/slider";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		AdminDashboardComponent,
		LeftNavigateComponent,
		MainComponent,
		MyAccountComponent,
		FilterUsersPipe
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MatSliderModule,
		MatMenuModule
	],
	bootstrap: [AppComponent],


})
export class AdminModule {
}
