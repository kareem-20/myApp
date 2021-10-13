import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MyTranslateService } from '../../services/my-translate.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  numView: number = 0;
  categories;
  constructor(private dataService: DataService,
    private myTranslate: MyTranslateService) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.categories = this.dataService.categoies;
    console.log('this.category', this.categories);
    this.categories.forEach(cat => this.changeLang(cat));
  }

  changeLang(cat) {
    let lang = this.myTranslate.sellected;
    console.log('lang', lang)
    if (lang === 'en') return cat.name = cat.en_name, cat.desc = cat.en_desc
    else if (lang === 'ar') return cat.name = cat.ar_name, cat.desc = cat.ar_desc
  }

  toCart() {

  }

  changeView() {
    if (this.numView == 0) this.numView = 1
    else if (this.numView == 1) this.numView = 0;
  }

}
