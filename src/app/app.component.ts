import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { MyTranslateService } from './services/my-translate.service';
import { Storage } from '@ionic/storage-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private storage: Storage,
    private myTranslate: MyTranslateService,
    private translateService: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storage.create();
      // this.statusBar.styleBlackTranslucent()
      // this.statusBar.backgroundColorByName('darkGray');

      this.changedirection();
    });
  }

  changedirection() {
    this.myTranslate.setIntialAppLanguage();
    const lang = this.translateService.currentLang;

    if (lang == 'ar') {
      document.body.classList.add("right-to-left")
    } else {
      document.body.classList.remove("right-to-left")
    }
  }

}
