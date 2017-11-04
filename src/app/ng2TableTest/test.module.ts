import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [TestComponent]
})
export class TestModule { }
