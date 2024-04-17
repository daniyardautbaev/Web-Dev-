import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent implements OnInit{
  vacancies: Vacancy[] = [];
  vacancies_copy: Vacancy[] = [];
  searchText: string = '';
  searchSalary: string = 'Select salary';
  id: number | undefined;
  newVacancy: string = '';
  newName: string = '';
  newId: number = 0;
  isChange: string = '';

  constructor(private route: ActivatedRoute, private vacancyService: VacancyService){

  }

  ngOnInit(): void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.vacancyService.getVacanciesCompanies(this.id).subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.vacancies_copy =vacancies;
    });
  }

  addVacancy(){
    if (this.id)
      this.vacancyService.createVacancy(this.newVacancy).subscribe((vacancy) => {
        this.vacancies.push(vacancy)
        this.newVacancy = ''
      })
  }

  deleteVacancy(vacancy_id: number){
    this.vacancyService.deleteVacancy(vacancy_id).subscribe(() =>{
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id != vacancy_id);
    })
  }

  updateVacancy(){
    this.vacancyService.updateVacancy(this.newId, this.newName).subscribe((vacancy) => {
      this.vacancies.forEach((vacancy) =>{
          if (vacancy.id == this.newId){
            vacancy.name = this.newName
          }
        }
      );
      this.newName = ''
    })
  }
  searchByText(){
    this.vacancies = this.vacancies_copy
    if (this.searchText != '') {
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.name === this.searchText)
    }
    if (this.searchSalary != '') {
      switch(this.searchSalary) {
        case '1':
          this.vacancies = this.vacancies.filter((vacancy) => (vacancy.salary >= 0 && vacancy.salary < 200000));
          break;
        case '2':
          this.vacancies = this.vacancies.filter((vacancy) => (vacancy.salary >= 200000 && vacancy.salary < 400000));
          break;
        case '3':
          this.vacancies = this.vacancies.filter((vacancy) => (vacancy.salary >= 400000 && vacancy.salary < 600000));
          break;
        case '4':
          this.vacancies = this.vacancies.filter((vacancy) => (vacancy.salary >= 600000 && vacancy.salary < 800000));
          break;
        case '5':
          this.vacancies = this.vacancies.filter((vacancy) => (vacancy.salary >= 800000 && vacancy.salary < 1000000));
          break;
        default:
          break;
      }
    }
  }
}
