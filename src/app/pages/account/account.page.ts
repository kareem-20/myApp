import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { MyTranslateService } from './../../services/my-translate.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  // sheetState = SheetState.Bottom;
  title = 'my title';
  lang = 'ar'
  // drawerState = DrawerState.Bottom;
  minimumHeight = '200px';
  langName = 'العربية';

  constructor(
    private navCtrl: NavController,
    public popover: PopoverController,

  ) { }

  ngOnInit() {
  }

  toCart() {
    this.navCtrl.navigateForward('/cart')
  }



  toAddress() {
    this.navCtrl.navigateForward('/address')
  }

  toFav() {

  }

  profile() {
    this.navCtrl.navigateForward('/profile')
  }

  openSheet() {
    // this.sheetState = SheetState.Docked;
    // this.drawerState = DrawerState.Docked
  }

  contact() {
    this.navCtrl.navigateForward('/contact')
  }

  async popOver(ev: any) {
    let popLanguage = await this.popover.create({
      mode: "ios",
      component: LanguagePopoverPage,
      event: ev
    })
    await popLanguage.present()

  }

}
