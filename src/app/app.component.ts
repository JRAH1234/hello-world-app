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

  testfn()
  {
    console.log('Tracking ....')

    this.appInsightsService.trackEvent('Test trace message', { 'user': 'jp', 'cart': '1234' });

    try {
      throw new Error('Something bad happened');
    }
    catch(e) {
        this.appInsightsService.trackException(e,'1');
    }



  }

  testfn2()
  {
    console.log('Got a button press')
    return('material')
  }
}
