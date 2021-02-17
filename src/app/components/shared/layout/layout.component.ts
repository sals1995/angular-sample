import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from '../../../shared/services/localization.service';
import { TokenService } from '../../../shared/services/token.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/components/alert/alert.service';
import { UserService } from '../../user/user.service';
declare var jQuery: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  isPageLoaded:boolean=false;
  constructor(
    private localizationService: LocalizationService,
    private translate: TranslateService,
    private tokenService: TokenService,
    private alertService: AlertService,
    private userService:UserService,
    private router: Router) {
    this.translate.use(localizationService.getLanguage());
  }

  ngOnInit() {
   
    this.loadScript("/assets/menu/metisMenu.min.js");
    this.loadScript("/assets/js/app.js");

  }
 
  ngAfterViewInit() {
    // (<any>$('#side-menu')).metisMenu();
    //jQuery('#side-menu').metisMenu();
  }
  loadStyles() {
    let lang: string = this.localizationService.getLanguage();
    if (lang == 'ar') {
      // alert("here to loading en style")
      require("style-loader!../../../../assets/bootstrap/css/bootstrap.rtl.css");
      require("style-loader!../../../../assets/css/style-ltr.css");
      require("style-loader!../../../../assets/css/style-rtl.css");

    } else {
      // alert("here to loading en style")
      require("style-loader!../../../../assets/bootstrap/css/bootstrap.ltr.css");
      require("style-loader!../../../../assets/css/style-ltr.css");
    }
  }
  public loadScript(url:string) {
    //console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
//alert("loaded");
  }
  logout() {
   this.userService.signOut().subscribe(res => {
      if(res.Success){
          this.alertService.success("you successfully logged out");
      this.tokenService.removeToken();
     this.router.navigateByUrl("/login");
     
        }

    })
  }
  changePassword() {
    this.router.navigate(['/change-password']);
  }
  navigate(event: any, link: string) {
    // alert(link);
    // alert(JSON.stringify(event.srcElement.className));
    this.router.navigate([link]);
    jQuery(`.sidebar ul li a.${event.srcElement.className}`).addClass('activeLink');
  }
  changeLanguage() {
    window.location.reload();
    this.localizationService.setLanguage(this.localizationService.getLanguage() == 'ar' ? 'en' : 'ar');
    this.translate.use(this.localizationService.getLanguage());
  }

}

