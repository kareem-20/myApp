import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MyTranslateService } from '../../services/my-translate.service';

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.page.html',
  styleUrls: ['./language-popover.page.scss'],
})
export class LanguagePopoverPage implements OnInit {

  languages = [];
  sellected = '';
  constructor(
    public PopoverCtrl: PopoverController,
    private myTranslate: MyTranslateService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.languages = this.myTranslate.getLanguage()
    this.sellected = this.myTranslate.sellected;
  }

  async dismiss(data: any) {
    this.sellected = data

    if (data == 'ar') {
      document.body.classList.add("right-to-left")
    } else {
      document.body.classList.remove("right-to-left")
    }

    // this.translateService.use(data)
    this.myTranslate.setLanguage(data)
    this.PopoverCtrl.dismiss();
  }


}
