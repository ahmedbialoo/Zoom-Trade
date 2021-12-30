import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SliderComponent } from './Components/slider/slider.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes ,RouterModule   } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { UpdateComponent } from './Components/update/update.component';
import { EditComponent } from './Components/edit/edit.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { AddComponent } from './Components/add/add.component';
import { ErrorComponent } from './Components/error/error.component';

let routes:Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'dashboard',component:DashboardComponent},
{path:'LogOut',component:HomeComponent},
{path:'update/:id',component:UpdateComponent},
{path:'edit/:id',component:EditComponent},
{path:'Delete/:id',component:DashboardComponent},
{path:'Add',component:AddComponent},
{path:'**',component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UpdateComponent,
    EditComponent,
    AddComponent,
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
