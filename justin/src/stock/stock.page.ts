import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {ProductsProvider} from '../models/Products.provider';
import {nextAppComponent} from '../models/actionFor.component';
import {inputBarComponent} from '../models/inputBar.component';

@Component({
  templateUrl: 'stock.html',
})
export class StockPage {
  pack: any = {};
  model: any = {};
  nextStep: string = '';
  constructor(
      public navCtrl: NavController,
      public alertCtrl: AlertController,
      public toastCtrl: ToastController,
      public productsProvider: ProductsProvider
    ) {
      this.reset();
  }
  addIt(scanned) {
    if (!scanned)
      return;
    let p = this.productsProvider.getPack(scanned);
    console.log('on a trouvé ! ', p);
    if (!p)
      return this.reset();
    this.model.scanned = scanned;
    this.model.pack = p;

  }
  reset() {
    this.model = { pack:null, scanned: null};
  }
  validate(pack) {
    console.log('stockage de', pack);
    //il faut update avant
    pack.place = this.model.place;
    this.productsProvider.stock(pack);
  }
}