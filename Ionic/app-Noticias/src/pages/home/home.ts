import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EsportePage } from '../esporte/esporte';
import { SaudePage } from '../saude/saude';
import { CienciaPage } from '../ciencia/ciencia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  abrirPaginaCiencia(){
    this.navCtrl.push(CienciaPage);
  }

  abrirPaginaEsporte(){
  	this.navCtrl.push(EsportePage);
  }

  abrirPaginaSaude(){
	this.navCtrl.push(SaudePage);
  }

}
