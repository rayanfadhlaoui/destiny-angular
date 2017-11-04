import { FighterDetailComponent } from '../fighterDisplay/fighter-detail.component';
import { ArmySetupComponent } from './army-setup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const armySetupRoutes: Routes = [
  { path: 'fighterDetail/:id', component: FighterDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(armySetupRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArmySetupRoutingModule { }
