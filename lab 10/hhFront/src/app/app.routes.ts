import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";

export const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "companies", component: CompanyComponent},
  {path: ":id/vacancies", component: VacancyComponent},
  {path: "**", component: HomeComponent}
];
