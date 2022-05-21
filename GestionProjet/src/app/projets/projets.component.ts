import { Project } from './../model/project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projects !: Project[]; //un tableau de chînes de caractères

  constructor() { 
    this.projects = [
      //{idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},

    ];
  }

  ngOnInit(): void {
  }

}
