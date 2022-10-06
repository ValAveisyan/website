import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ContactsDetailsComponent} from "./components/contacts-details/contacts-details.component";
import {MyAccountComponent} from "./components/my-account/my-account.component";

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
  children:[
    {path:'contacts',component:ContactsComponent},
    {path:'contacts/user/:id', component:ContactsDetailsComponent},
    {path:'home',component:HomeComponent},
    {path:'myAccount',component:MyAccountComponent},
    {path:'',pathMatch:'full', redirectTo:'home'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
