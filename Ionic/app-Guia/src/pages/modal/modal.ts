import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  fecharModal() {
    this.viewCtrl.dismiss();
  }

  abrirAlert() {
    let alert = this.alertCtrl.create({
      title: "Atenção!",
      subTitle: "Você realmente deseja adquirir este pacote?",
      buttons: [
        {
          text: "OK",
          handler: data => {
            const toast = this.toastCtrl.create({
              message: "Pacote adquirido com sucesso!",
              position: 'middle',
              duration: 4000
            });
            toast.present();
            this.fecharModal();
            return true;
          }
        },
        {
          text: "Cancelar",
          handler: data => {
            return true;
          }
        }
      ]
    });
    alert.present();
  }

}
