import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDonePageRoutingModule } from './order-done-routing.module';

import { OrderDonePage } from './order-done.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    OrderDonePageRoutingModule
  ],
  declarations: [OrderDonePage]
})
export class OrderDonePageModule { }
