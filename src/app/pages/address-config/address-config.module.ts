import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressConfigPageRoutingModule } from './address-config-routing.module';

import { AddressConfigPage } from './address-config.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    AddressConfigPageRoutingModule
  ],
  declarations: [AddressConfigPage]
})
export class AddressConfigPageModule { }
