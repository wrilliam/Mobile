import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items : Array = [
    'Ideia tem acento?',
    'Bem vindo tem hífen?',
    'Bau tem acento?',
    'Jiboia tem acento?',
    'Aurelio tem acento?'
  ];

  constructor(public navCtrl: NavController) {

  }

  reordenarItens(indexes: any): void {
    reorderArray(this.items, indexes)
  }

  btn(id): void {
    alert("Você respondeu: " + id)
  }

  op(id): void {
    alert("Esta categoria é: " + id)
  }

}
