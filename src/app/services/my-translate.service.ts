import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TranslateService } from '@ngx-translate/core';

const LNG_KEY = 'SELLECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  sellected = '';

  constructor(
    private translate: TranslateService,
    private storage: Storage
  ) { }

  setIntialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.use(language);

    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val)
        this.sellected = val;
        console.log('', this.sellected)
      } else {
        this.setLanguage('ar')
        this.sellected = 'ar';
        console.log('', this.sellected)
      }
    });
  }

  getLanguage() {
    return [
      { text: 'English', value: 'en' },
      { text: 'Arabic', value: 'ar' }
    ]
  }

  async setLanguage(lang) {
    this.translate.use(lang);
    this.sellected = lang
    this.storage.set(LNG_KEY, lang)
    console.log(lang);


    if (lang == 'ar') {
      document.body.classList.add("right-to-left")
    } else {
      document.body.classList.remove("right-to-left")
    }
  }

  langchange() {
    return this.translate.onLangChange;
  }

}
