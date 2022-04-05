import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  language: string = "";
  textDir: string = "";
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.language = localStorage.getItem("lang") || "en";
  }
  // changeLang(lang: any) {
  //   this.language = lang.target.value;
  //   // console.log(this.language);
  //   localStorage.setItem('lang', this.language);
  //   window.location.reload();
  // }

  translateToEn() {
    this.translate.use('en');
    localStorage.setItem("lang", "en");
  }
  translateToAr() {
    this.translate.use('ar');
    localStorage.setItem("lang", "ar");
  }

}
