import { Component } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appInsightsService: AppInsightsService) {};

  title = 'II Logging Tests';

  logTrace()
  {
    var t = new Date().getTime();
    var now = new Date(t);

    var msg = now.toDateString().concat(' ', now.toTimeString(), ' :: INFO message');
    console.log(msg);

    this.appInsightsService.trackEvent(msg, { 'parama1': 'pval1', 'param2': 'pval2' });

    try {
      throw new Error('Something bad happened');
    }
    catch(e) {
        this.appInsightsService.trackException(e,'1');
    }

    }

    logDebug()
    {
      var t = new Date().getTime();
      var now = new Date(t);

      var msg = now.toDateString().concat(' ', now.toTimeString(), ' :: DEBUG message');
      console.log(msg);

      this.appInsightsService.trackEvent(msg, { 'parama1': 'pval1', 'param2': 'pval2' });

      try {
        throw new Error('Something bad happened');
      }
      catch(e) {
          this.appInsightsService.trackException(e,'1');
      }

      }

    logException()
    {
      var t = new Date().getTime();
      var now = new Date(t);

      var msg = now.toDateString().concat(' ', now.toTimeString(), ' :: LogException');
      console.log(msg);

      try {
        throw new Error(msg);
      }
      catch(e) {
          this.appInsightsService.trackException(e,'1');
      }
    }
}
