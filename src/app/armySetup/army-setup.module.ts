import { FighterCharacteristicsComponent } from '../fighterDisplay/fighter-characteristics.component';
import { FighterDetailComponent } from '../fighterDisplay/fighter-detail.component';
import { FighterInformationComponent } from '../fighterDisplay/fighter-information.component';
import { FighterService } from '../fighterDisplay/fighter.service';
import { SharedModule } from '../shared/shared.module';
import { ArmySetupRoutingModule } from './army-setup-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { ArmySetupComponent } from './army-setup.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponentModule } from 'ng2-component-spinner';

@NgModule({
  imports: [
    BrowserModule, HttpModule,  ArmySetupRoutingModule, CommonModule, SharedModule
  ],
  declarations: [
    ArmySetupComponent, FighterDetailComponent, FighterInformationComponent, FighterCharacteristicsComponent
  ],
  providers: [FighterService],
  bootstrap: [ArmySetupComponent]
})
export class ArmySetupModule { }
