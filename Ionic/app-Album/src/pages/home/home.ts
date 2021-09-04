import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	titulo = 'imagem';

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

  }

  opcoes(nomeImagem){

  	this.titulo = 'Imagem selecionada( '+nomeImagem+' )';

  	let actionSheet = this.actionSheetCtrl.create({
  		title: this.titulo,
  		buttons:[
  		{
  			text: 'Delete',
  			role: 'destructive',
  			icon:'close-circle',
  			handler:() =>{
  				console.log("Opções");
  			}
  		},
  		{
  			text: 'Favoritos',
  			role: 'detructive',
  			icon:'checkmark-circle-outline',
  			handler:() =>{
  				console.log("Opções");
  			}
  		},
  		{
  			text: 'Compartilhar',
  			role: 'detructive',
  			icon:'share',
  			handler:() =>{
  				console.log("Opções");
  			}
  		},
  		{
  			text: 'Imprimir',
  			role: 'detructive',
  			icon:'print',
  			handler:() =>{
  				console.log("Opções");
  			}
  		},
  		{
  			text: 'Cancelar',
  			role: 'cancel',
  			handler:() =>{
  				console.log("Opções");
  			}
  		}
  	]
  	});

  	actionSheet.present();
  }

}
