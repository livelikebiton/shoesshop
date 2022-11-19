import { JwtInterceptor } from './services/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { LogoComponent } from './components/layout-area/logo/logo.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { ShowComponent } from './components/home-area/show/show.component';
import { SaleComponent } from './components/home-area/sale/sale.component';
import { ShoesComponent } from './components/shoes-area/shoes/shoes.component';
import { Page404Component } from './components/layout-area/page404/page404.component';
import { YouTubeComponent } from './components/home-area/you-tube/you-tube.component';
import { SuccessStoriesComponent } from './components/success-area/success-stories/success-stories.component';
import { WhoAreWeComponent } from './components/who-area/who-are-we/who-are-we.component';
import { EmployeeListComponent } from './components/employees-area/employee-list/employee-list.component';
import { PleaseWaitComponent } from './components/shared-area/please-wait/please-wait.component';
import { EmployeeCardComponent } from './components/employees-area/employee-card/employee-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employees-area/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './components/employees-area/update-employee/update-employee.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { AuthMenuComponent } from './components/auth-area/auth-menu/auth-menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MenuComponent,
    HomeComponent,
    ShowComponent,
    SaleComponent,
    ShoesComponent,
    Page404Component,
    YouTubeComponent,
    SuccessStoriesComponent,
    WhoAreWeComponent,
    EmployeeListComponent,
    PleaseWaitComponent,
    EmployeeCardComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AuthMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
