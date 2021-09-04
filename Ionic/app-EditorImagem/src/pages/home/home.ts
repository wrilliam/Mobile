import { Component } from '@angular/core';
import { NavController, LoadingController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	imagemPrincipal = '../assets/imgs/imgOriginal.jpg';

  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController, public popoverCtrl:PopoverController) {

  }

  aplicarEfeito(id){
  	let loading = this.loadingCtrl.create({
  		content:"Finalizando alterações...",
  		duration: 1000
  	});

  	loading.present();

  	this.imagemPrincipal ='../assets/imgs/'+ id +'.jpg';
  }

  salvar() {
	  let popover = this.popoverCtrl.create(PopoverPage);
	  popover.present();
  }

}
