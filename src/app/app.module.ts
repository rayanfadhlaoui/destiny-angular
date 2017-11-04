import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmySetupComponent } from './armySetup/army-setup.component';
import { ArmySetupModule } from './armySetup/army-setup.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';

// Declare the NgModule decorator
@NgModule({
  imports : [
    ArmySetupModule,
    HomeModule,
    AppRoutingModule,
    LoginModule
  ],
  // Define the root component
  bootstrap: [AppComponent],
  // Define other components in our module
  declarations: [AppComponent],
})
export class AppModule {}
