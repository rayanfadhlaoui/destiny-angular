import {AppLoaderComponent} from './components/appLoader.component';
import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [
    AppLoaderComponent,
  ],
  exports: [
    AppLoaderComponent
  ]
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppLoaderComponent
    };
  }
}
