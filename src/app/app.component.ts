import { Component } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appInsightsService: AppInsightsService) {};

  title = 'hello-world-app';
  testfn()
  {
    this.appInsightsService.trackEvent('Test trace message', { 'user': 'jp', 'cart': '1234' });
  }
}
