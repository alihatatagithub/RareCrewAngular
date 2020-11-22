import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CustomFormsModule } from 'ng2-validation';



const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },

  
 
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
