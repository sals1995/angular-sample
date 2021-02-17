import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(public translate: TranslateService) { }

  setLanguage(lang: string) {
    // alert("set"+lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem("lang", lang.toLowerCase());
  }

  hasLanguage() {
    return (localStorage.getItem("lang") != null && localStorage.getItem("lang").length > 0)
  }

  getLanguage() {
    let lang: string = localStorage.getItem("lang");
    // alert(`GetLanguage ${lang}`)
    if (lang == "" || lang == null || lang == 'undefined') {
      return this.getDefaultLanguage();
    }
    return lang;
  }

  private getDefaultLanguage() {
    return "en";
  }
}
