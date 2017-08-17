import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { GetdataService } from './getdata.service';
import { GlobalService } from './global.service';

import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetdataService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
