import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfricanamericanComponent } from './people/africanamerican/africanamerican.component';
import { HispanicAmericanComponent } from './people/hispanic-american/hispanic-american.component';
import { JewishAmericanComponent } from './people/jewish-american/jewish-american.component';
import { EuroAmericanComponent } from './people/euro-american/euro-american.component';
import { AmericanComponent } from './people/american/american.component';
import { FirstformComponent } from './forms/firstform/firstform.component';
import { ContactUs1Component } from './forms/contact-us1/contact-us1.component';
import { ContactTableComponent } from './comps/contact-table/contact-table.component';
import { Forms1Component } from './forms/forms1/forms1.component';

const routes: Routes = [
  {path: 'form' , component: FirstformComponent  },
  {path: 'contactUs1' , component: ContactUs1Component  },
  {path: 'Ctable' , component: ContactTableComponent  },
  {path: 'forms1' , component: Forms1Component  },
  {path: 'americans'  , component: AmericanComponent,
    children: [
      {path: 'blacks' , component: AfricanamericanComponent},
      {path: 'hispanic' , component: HispanicAmericanComponent},
      {path: 'jew' , component: JewishAmericanComponent},
      {path: 'euro' , component: EuroAmericanComponent},
      // {path:'', redirectTo: 'americans' , pathMatch: 'full'},
    ]},
  { path: '', redirectTo: '/forms1', pathMatch: 'full' },
  { path: '**', redirectTo: '/forms1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
