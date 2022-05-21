
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Projets
import { ProjetsComponent } from './projets/projets.component';

//Projets
import { AddProjetComponent } from './add-projet/add-projet.component';

import { UpdateProjetComponent } from './update-projet/update-projet.component';

const routes: Routes = [
  {path: "projets", component : ProjetsComponent},
  {path: "ajouterProjet", component : AddProjetComponent},
  {path: "modifierProjet/:id", component : AddProjetComponent},
  //{ path: "", redirectTo: "projets", pathMatch: "full" },
    //Othterwise redirect to projets
    //{ path: "*", redirectTo: "projets"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
