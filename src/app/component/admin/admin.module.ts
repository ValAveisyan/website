import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {AppComponent} from "../../app.component";
import { ContactsComponent } from './components/contacts/contacts.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { LeftNavigateComponent } from './components/left-navigate/left-navigate.component';
import { MainComponent } from './components/main/main.component';
import { RightMainComponent } from './components/right-main/right-main.component';
import {HttpClientModule} from "@angular/common/http";
import { ModalComponent } from './components/modal/modal.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { MyAccountComponent } from './components/my-account/my-account.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    AdminDashboardComponent,
    ContactsDetailsComponent,
    LeftNavigateComponent,
    MainComponent,
    RightMainComponent,
    ModalComponent,
    CreatePostComponent,
    CreateCommentComponent,
    MyAccountComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class AdminModule { }
