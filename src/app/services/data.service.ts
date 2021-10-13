import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  categoies = [
    {
      ar_name: 'نوت بوك',
      ar_desc: 'اكثر من 150 نوت بوك',
      img: '../../assets/Icon&Svg/4.categorie/android/drawable-hdpi/notebook.png',
      en_name: 'note book',
      en_desc: 'More than 150 notebooks'
    },
    {
      ar_name: 'الأطفال',
      ar_desc: 'اكثر من 350 منتج خاص بالأطفال',
      img: '../../assets/Icon&Svg/4.categorie/android/drawable-hdpi/kids.png',
      en_name: 'kids',
      en_desc: 'More than 350 kids products'
    },
    {
      ar_name: 'عالم القراءة',
      ar_desc: 'أكثر من 350 كتاب',
      img: '../../assets/Icon&Svg/4.categorie/android/drawable-hdpi/book.png',
      en_name: 'Reading World',
      en_desc: 'More than 350 books'
    }
  ]

  products = [
    {
      ar_name: 'أجندة بقلم ريشة بخامات ممتازة',
      ar_desc: 'أجندة بقلم ريشة بخامات ممتازة...أجندة بقلم ريشة بخامات ممتازة...أجندة بقلم ريشة بخامات ممتازة..أجندة بقلم ريشة بخامات ممتازة..',
      img: '../../assets/Icon&Svg/1.home/android/drawable-hdpi/product-1.png',
      en_name: 'Agenda with a feather pen in excellent materials',
      en_decs: 'Agenda with a feather pen in excellent materials... Agenda with a feather pen in excellent materials... Agenda with a feather pen in excellent materials.. Agenda with a feather pen in excellent materials..',
      price: 150,
      old_price: 170
    },
    {
      ar_name: 'نوت بوك خشب مطبوع مقاس A5',
      ar_desc: 'أجندة بقلم ريشة بخامات ممتازة...أجندة بقلم ريشة بخامات ممتازة...أجندة بقلم ريشة بخامات ممتازة..أجندة بقلم ريشة بخامات ممتازة..',
      img: '../../assets/Icon&Svg/1.home/android/drawable-hdpi/product 4.png',
      en_name: 'A5 size printed wood note book',
      en_decs: 'A5 size printed wood note book...A5 size printed wood note book... A5 size printed wood note book.. Agenda with a feather pen in excellent materials..',
      price: 150,
      old_price: 170
    },
    {
      ar_name: 'أجندة بقلم ريشة بخامات ممتازة',
      ar_desc: 'أجندة بقلم ريشة بخامات ممتازة...أجندة بقلم ريشة بخامات ممتازة...أجندة بقلم ريشة بخامات ممتازة..أجندة بقلم ريشة بخامات ممتازة..',
      img: '../../assets/Icon&Svg/1.home/android/drawable-hdpi/product 3.png',
      en_name: 'Agenda with a feather pen in excellent materials',
      en_decs: 'Agenda with a feather pen in excellent materials... Agenda with a feather pen in excellent materials... Agenda with a feather pen in excellent materials.. Agenda with a feather pen in excellent materials..',
      price: 150,
      old_price: 170
    },

  ]
}
