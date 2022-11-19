import { UpdateEmployeeComponent } from './components/employees-area/update-employee/update-employee.component';
import { AddEmployeeComponent } from './components/employees-area/add-employee/add-employee.component';
import { WhoAreWeComponent } from './components/who-area/who-are-we/who-are-we.component';
import { SuccessStoriesComponent } from './components/success-area/success-stories/success-stories.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { ShoesComponent } from './components/shoes-area/shoes/shoes.component';
import { Page404Component } from './components/layout-area/page404/page404.component';
import { EmployeeListComponent } from './components/employees-area/employee-list/employee-list.component';
import { AuthGuard } from './services/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent },
    { path: "shoes", canActivate: [AuthGuard], component: ShoesComponent },
    { path: "success", component: SuccessStoriesComponent},
    { path: "who", component: WhoAreWeComponent },
    { path: "employees", canActivate: [AuthGuard], component: EmployeeListComponent },
    { path: "employees/new",canActivate: [AuthGuard], component: AddEmployeeComponent },
    { path: "employees/edit/:id",canActivate: [AuthGuard], component: UpdateEmployeeComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
