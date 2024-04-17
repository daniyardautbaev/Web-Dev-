import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class VacancyService{
  BASE_URL = 'http://localhost:8000';
  id: number | undefined;
  constructor(private client: HttpClient ) {}

  getVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`)
  }

  getVacanciesCompanies(id:number): Observable<Vacancy[]>{
    this.id = id;
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`)
  }

  createVacancy(vacancyName: string): Observable<Vacancy>{
    return this.client.post<Vacancy>(
      `${this.BASE_URL}/api/vacancies/`,
      {name: vacancyName, company: this.id}
    )
  }

  deleteVacancy(vacancy_id: number): Observable<any>{
    return this.client.delete<any>(
      `${this.BASE_URL}/api/vacancies/${vacancy_id}/`
    )
  }

  updateVacancy(vacancy_id: number, vacancyName: string): Observable<Vacancy>{
    return this.client.put<Vacancy>(
      `${this.BASE_URL}/api/vacancies/${vacancy_id}/`,
      {name: vacancyName}
    )
  }
}
