import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CodeInputModule } from 'angular-code-input';
import { SuccessscreenComponent } from './successscreen/successscreen.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';
import { CommonService} from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SuccessscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
     MatCardModule,
    
     MatButtonModule,
    
     MatInputModule,
     MatCheckboxModule,
     MatSelectModule,
     MatFormFieldModule,
     MatIconModule,
     MatStepperModule,
     CodeInputModule,
     MatSelectCountryModule.forRoot('en'), // you can use 'br' | 'de' | 'en' | 'es' | 'fr' | 'hr' | 'it' | 'nl' | 'pt' --> MatSelectCountrySupportedLanguages
     HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
