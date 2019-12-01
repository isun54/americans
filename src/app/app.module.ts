import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfricanamericanComponent } from './people/africanamerican/africanamerican.component';
import { HispanicAmericanComponent } from './people/hispanic-american/hispanic-american.component';
import { JewishAmericanComponent } from './people/jewish-american/jewish-american.component';
import { NativeAmericanComponent } from './people/native-american/native-american.component';
import { EuroAmericanComponent } from './people/euro-american/euro-american.component';
import { FirstformComponent } from './forms/firstform/firstform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ContactUs1Component } from './forms/contact-us1/contact-us1.component';
import { ContactTableComponent } from './comps/contact-table/contact-table.component';
import { Forms1Component } from './forms/forms1/forms1.component';
import { AmericanComponent } from './people/american/american.component';

@NgModule({
  declarations: [
    AppComponent,
    AfricanamericanComponent,
    HispanicAmericanComponent,
    JewishAmericanComponent,
    NativeAmericanComponent,
    EuroAmericanComponent,
    FirstformComponent,
    ContactUs1Component,
    ContactTableComponent,
    Forms1Component,
    AmericanComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
