import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  dadosAgenda = [
  {
  	texto:'Prova de matemática',
  	data:'2025-02-08',
  	ativo:true
  },
  {
  	texto:'Treino de futebol',
  	data:'2025-03-22',
  	ativo:false
  }];

  ativarCompromisso(index) {
    let mensagem = 'Compromisso ' + this.dadosAgenda[index].texto;

    if(this.dadosAgenda[index].ativo == true) {
      mensagem = mensagem + ' ativado';
    }
    else {
      mensagem = mensagem + ' for desativado';

      const toast = this.toastCtrl.create({
        message: mensagem,
        position: 'middle',
        duration: 3000
      });
  
      toast.present();
    }
  }

  mudarStatus(value: boolean) {
    this.dadosAgenda.forEach((item) => {
      item.ativo = value;
    });
  }

  adicionar() {
    const alert = this.alertCtrl.create({
      title: 'Opa!',
      message: 'Criar novo compromisso?',
      buttons: [
        {
          text: 'Criar',
          handler: (val) => {
            this.dadosAgenda.push(
              {
                texto: '',
                data: '',
                ativo: true
              }
            )
          }
        },
        {
          text: 'Cancelar',
        }
      ]
    });

    alert.present();
  }

  limpar() {
    const alert = this.alertCtrl.create({
      title: 'Opa!',
      message: 'Realmente deseja apagar todos os compromissos?',
      buttons: [
        {
          text: 'Limpar',
          handler: (val) => {
            this.dadosAgenda = [];
          }
        },
        {
          text: 'Cancelar',
        }
      ]
    });

    alert.present();
  }
}
