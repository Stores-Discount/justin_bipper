import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import {HttpModule} from '@angular/http';


import { MyApp } from './app.component';

import {BeepPage} from '../beep/beep.page';
import {ColisagePage} from '../colisage/colisage.page';
import {SearchPage} from '../search/Search.page';
import {AssemblagePage} from '../assemblage/assemblage.page';
import {DestockagePage} from '../destockage/destockage.page';
import {StockPage} from './../stock/stock.page';
import {DebugPage} from '../debug/debug.page';
import {LoginPage} from '../login/login';

import {ScansProvider} from '../beep/Scans.provider';
import {ProductsProvider} from '../models/Products.provider';
import {ColisageProvider} from '../colisage/Colisage.Provider';
import {RouteService} from '../models/route.Service';
import {nextAppComponent} from '../models/actionFor.component';
import {inputBarComponent} from '../models/inputBar.component';

import { odooService } from '../angular-odoo/odoo';
import { errorComponent } from '../models/error.handler';

@NgModule({
  declarations: [
    MyApp,
    BeepPage,
    ColisagePage,
    SearchPage,
    AssemblagePage,
    DestockagePage,
    StockPage,
    LoginPage,
    DebugPage,
    nextAppComponent,
    inputBarComponent,
    errorComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BeepPage,
    ColisagePage,
    SearchPage,
    AssemblagePage,
    DestockagePage,
    StockPage,
    LoginPage,
    DebugPage,
  ],
  providers: [
      ProductsProvider,
      ScansProvider,
      ColisageProvider,
      RouteService,
      odooService,
  ]
})
export class AppModule{}
