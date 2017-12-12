import { ArmySetupComponent } from './armySetup/army-setup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth-guard.service';
import { SimulateWarComponent } from './warSimulation/simulate-war.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path : 'armySetup', component: ArmySetupComponent, canActivate: [AuthGuard]},
  {path: 'simulateWar', component: SimulateWarComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
     RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
