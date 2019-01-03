import { Component } from '@angular/core';
import { LoggerService } from 'src/common/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService]
})
export class AppComponent {
  title = 'geo-stat';

  constructor(private loggerService: LoggerService) { 
    this.loggerService.log("App component created");
  }
}
