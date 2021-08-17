import { Component , OnInit} from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

import { HttpClient, HttpHeaders} from '@angular/common/http';


import{ Constants } from './config/constants';

import { Injectable } from '@angular/core';
//import {} from 'core/services/services/api-http.services';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {};
    callAPI_Int()
    {
       this.http.get('https://afa-jrah-002.azurewebsites.net/api/HttpTrigger1?clientId=apim-api-m-jrah001');
    }
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private appInsightsService: AppInsightsService, private http: HttpClient) {};



  title = 'II Logging Tests';

  /*showConfig() {
  this.configService.getConfig()
    .subscribe(
      (data: Config) => this.config = { ...data }, // success path
      error => this.error = error // error path
    );
  }*/
  /*

 */

  callAPI()
  {
    let url = 'https://api-m-jrah001.azure-api.net/afa-jrah-002/HttpTrigger1';
    //let resp = this.http.get('https://afa-jrah-002.azurewebsites.net/api/HttpTrigger1?clientId=apim-api-m-jrah001');
    //console.log(resp.headers.get('X-Custom-Header'));


    let resp = this.http.post(url, '{"name":"JP"}',  { responseType: 'blob' as 'json', observe: 'response' })
      .subscribe(response => {
        console.log(response);
        return response;
      }, err => {
          throw err;
      });
  }
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
