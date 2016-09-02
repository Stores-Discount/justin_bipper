import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {ProductsProvider} from '../models/Products.provider';

@Component({
  templateUrl: 'build/assemblage/assemblage.html',
  providers: []
})
export class AssemblagePage {
  pack: any = {};
  model: any = {};
  nextStep: string = '';
  constructor(
      public navCtrl: NavController,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController,
      private productsProvider: ProductsProvider
    ) {
      this.reset();
  }
  addIt(model) {
    if (!model.scanned)
      return;
    let p = this.productsProvider.getPack(model.scanned);
    console.log('on a trouvé ! ', p);
    if (!p)
      return;
    if (this.model.packs[p.name])
      return console.log('already scanned');

    if (!this.model.shipment) {
      this.model.shipment = p.shipment;
      this.model.toBeScanned = p.shipment.packs.length;
    }  else {
      if (this.model.shipment != p.shipment) {
          console.log('on reset');
          this.reset();
          return;
        }
    }
    this.model.nextStep = "";
    this.model.toBeScanned--;
    this.model.packs[p.name] = true;

    if (this.model.toBeScanned == 0) {
      this.model.nextStep = "Assemble"
    } else {
      this.model.nextStep = `${this.model.toBeScanned} of ${this.model.shipment.packs.length} to scan`;
    }

    console.log(this.model);

  }
  reset() {
    this.model = { packs: {}};
  }
  assembler(shipment) {
    console.log('assemblage', shipment);
    //il faut update avant
    shipment.update().then( () => shipment.assembler());
    this.model.nextStep = 'Expedier';
  }
}