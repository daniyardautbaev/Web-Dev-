import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "./models";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private client: HttpClient ) {}

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`)
  }

  createCompany(newCompany: any): Observable<Company>{
    return this.client.post<Company>(
      `${this.BASE_URL}/api/companies/`,
      newCompany
    )
  }
  deleteCompany(company_id: number): Observable<any>{
    return this.client.delete<any>(
      `${this.BASE_URL}/api/companies/${company_id}/`
    )
  }

  updateCompany(company_id: number, companyName: string): Observable<Company>{
    return this.client.put<Company>(
      `${this.BASE_URL}/api/companies/${company_id}/`,
      {name: companyName}
    )
  }
}
