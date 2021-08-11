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

    var msg = 'INFO: Create workorder';

    console.log(now.toDateString().concat(' ', now.toTimeString(), ' :: ', msg));

    this.appInsightsService.trackEvent(msg, { 'Application': 'Insight',
                                              'Cost Centre': 'Track',
                                              'EQUIP_NO': '00000000018754',
                                              'WORKORDER_NUMBER': '0898746' });

    }

    logDebug()
    {
      var t = new Date().getTime();
      var now = new Date(t);

      var msg = 'Log DEBUG';
      console.log(now.toDateString().concat(' ', now.toTimeString(), ' :: ', msg));
      //appInsights.trackTrace(msg,{ 'parama1': 'pval1', 'param2': 'pval2' } , 99);
      this.appInsightsService.trackEvent(msg, { 'DEBUG1': 'pval1', 'DEBUG2': 'pval2' });
      }

    logException()
    {
      var t = new Date().getTime();
      var now = new Date(t);

      var msg = 'Log Exception';

      console.log(now.toDateString().concat(' ', now.toTimeString(), ' :: ', msg));

      try {
        throw new Error(msg);
      }
      catch(e) {
          this.appInsightsService.trackException(e,'1');
      }
    }
}
