import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    mostrarMensagem: boolean = true;
  
    fecharMensagem() {
      this.mostrarMensagem = false;
    }
  
    paginaAtual: number = 1;

    trocarPagina(numero: number) {
      this.paginaAtual = numero;
    }

}