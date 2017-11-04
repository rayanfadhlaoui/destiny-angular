import { FighterCharacteristicsComponent } from '../fighterDisplay/fighter-characteristics.component';
import { FighterDetailComponent } from '../fighterDisplay/fighter-detail.component';
import { FighterInformationComponent } from '../fighterDisplay/fighter-information.component';
import { FighterService } from '../fighterDisplay/fighter.service';
import { ArmySetupRoutingModule } from './army-setup-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { ArmySetupComponent } from './army-setup.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule, HttpModule,  ArmySetupRoutingModule, CommonModule
  ],
  declarations: [
    ArmySetupComponent, FighterDetailComponent, FighterInformationComponent, FighterCharacteristicsComponent
  ],
  providers: [FighterService],
  bootstrap: [ArmySetupComponent]
})
export class ArmySetupModule { }
