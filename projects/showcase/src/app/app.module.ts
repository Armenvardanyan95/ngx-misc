import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlowTypeModule } from 'projects/slow-type/src/public-api';
import { RunningTextModule } from 'projects/running-text/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlowTypeModule,
    RunningTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
