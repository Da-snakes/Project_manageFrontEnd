import { Component, OnInit } from '@angular/core';

//
import { Router } from '@angular/router';

import { throwError } from 'rxjs';
import { Person } from '../model/person.model';
import { Portfolio } from '../model/portfolio.model';
import { Project } from '../model/project.model';
import { ProjetService } from '../service/projet.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  /*
  id !: number;
  name !: string;
  description !: number;
  person !: Person;
  portfolio !: Portfolio;
  status !: string;
  */

    //Data Binding From VIEW To MODULE
    newProject = new Project();
    message !: string;

    persons !: Person[];
    newIdPerson !: number;
    newPerson !: Person;

    portfolios !: Portfolio[];
    newIdPortfolio !: number;
    newPortfolio !: Portfolio;




    

  projects !: string[]; //un tableau de chînes de caractères

  constructor(private projectService: ProjetService,
              private router: Router) { 
    this.projects = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
  }

  ngOnInit(): void {

    this.projectService.listePerson().subscribe(pers => {
      console.log(pers);
      this.persons = pers;
      });

    this.projectService.listePortfolio().subscribe(ports => {
      console.log(ports);
      this.portfolios = ports;
      });
  }




  changeID(){
    this.projectService.consulterPortfolio(this.newIdPortfolio).subscribe( x =>{ this.newPortfolio = x; console.log("test3 gen: this.newGenre"); console.log(x); } ) ;

   }


      //Data Binding From VIEW To MODULE
      /*newProject = new Project();
      message !: string;*/
  

/*
*/
}
