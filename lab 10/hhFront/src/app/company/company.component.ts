import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  companies: Company[] = [];
  newCompany = {
    name: '',
    description: '',
    city: '',
    address: ''
  };
  selectedValue: string = 'City';
  isAdd: boolean = false;
  newName: string = ``;
  isUpdate: number = -1;

  constructor(private companyService: CompanyService){
  }
  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    })
  }
  isCreate(){
    this.isAdd = !this.isAdd
  }
  change(company_id: number){
    this.isUpdate = company_id
  }
  addCompany(): void {
    this.newCompany.city = this.selectedValue
    for (const key in this.newCompany) {
      if (this.newCompany.hasOwnProperty(key)) {
        // @ts-ignore
        const value = this.newCompany[key];
        if (value === '') {
          // @ts-ignore
          this.newCompany[key] = '<null>';
        }
      }
    }
    alert("request")
    this.companyService.createCompany(this.newCompany).subscribe((company)=>{
      alert("answer")
      this.companies.push(company);
      this.newCompany = {
        name: '',
        description: '',
        city: '',
        address: ''
      };
    })
  }
  deleteCompany(company_id: number){
    this.companyService.deleteCompany(company_id).subscribe((data) =>{
      this.companies = this.companies.filter((company) => company.id !== company_id);
    })
  }

  updateCompany(company_id: number){
    this.companyService.updateCompany(company_id, this.newName).subscribe((company) => {
      this.companies.forEach((company) =>{
          if (company.id == company_id){
            company.name = this.newName
          }
        }
      );
      this.newName = '';
      this.change(-1);
    })
  }
}
