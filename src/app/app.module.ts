import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmySetupComponent } from './armySetup/army-setup.component';
import { ArmySetupModule } from './armySetup/army-setup.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { SimulateWarComponent } from './warSimulation/simulate-war.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports : [
    SharedModule,
    ArmySetupModule,
    HomeModule,
    AppRoutingModule,
    LoginModule,
    CommonModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, SimulateWarComponent],
})
export class AppModule {}
