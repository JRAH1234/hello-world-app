import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApplicationInsightsModule.forRoot({
      instrumentationKey: '4a74ff1c-d1e0-401b-98f8-d0e83526ebd5'
    })
  ],
  providers: [AppInsightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
