import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the Kendo UI Modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';


import {ValuesService} from './api/services/values.service';
import { ApiConfiguration } from './api/api-configuration';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonsModule, GridModule
  ],
  providers: [ValuesService, ApiConfiguration],
  bootstrap: [AppComponent]
})
export class AppModule { }
