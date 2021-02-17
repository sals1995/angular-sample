import { Component } from '@angular/core';
import { LocalizationService } from './shared/services/localization.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP';
  constructor(private localizationService: LocalizationService) {
    if(!this.localizationService.hasLanguage()){
      this.localizationService.setLanguage("en");
    }
    this.loadStyles();
  }

  loadStyles() {
    let lang: string = this.localizationService.getLanguage();
    if (lang == 'ar') {
      require("style-loader!../assets/bootstrap/css/bootstrap.min.css");
      require("style-loader!../assets/bootstrap/css/bootstrap.rtl.css");
      require("style-loader!../assets/css/style-rtl.css");
    } else {
      require("style-loader!../assets/bootstrap/css/bootstrap.min.css");
      require("style-loader!../assets/css/style-ltr.css");
    }
  }

}

