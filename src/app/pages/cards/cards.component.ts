import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }
  closeModal() {
    this.isModalVisible = false;
  }
  noticias =[
    {
        img:'assets/imagens/DISCORD.webp',
        title:'Discord reformula app mobile e lança novos recursos de segurança',
        content:'Discord reformula app mobile e lança novos recursos de segurança dispositivos móveis até mecanismos de proteção que tentam tornar o ambiente mais agradável aos usuários...',
        data: '19/10/2023',
        theme: 'Software',
        style:'etiqueta-software'
        

    },
    {    
        img:'assets/imagens/program.webp',
        title:'TIOBE: Python, C e C++ são as linguagens de programação mais populares deste ano',
        content:'Por meio do índice TIOBE mais recente, foi definido que o C++ ocupa a terceira colocação (com 11,94%) entre...',
        data: '19/10/2023',
        theme: 'Programação',
        style: 'etiqueta-progamacao'

    },
    {
        img:'assets/imagens/ASSCD.webp',
        title:'Assassin’s Creed Mirage teve a melhor estreia da série no PS5 e Xbox Series X|S',
        content:'Poucos dias após Assassin’s Creed Mirage ter chegado oficialmente às lojas, a Ubisoft comemorou...',
        data: '19/10/2023',
        theme: 'Games',
        style: 'etiqueta-games'
    },
    {
        img:'assets/imagens/intel.webp',
        title:'Intel anuncia a 14ª geração Intel Core para desktops: geração é apenas um refresh dos Raptor Lake',
        content:'A Intel anunciou a sua nova geração de processadores Intel Core para desktops, a 14 geração, porém diferente...',
        data: '19/10/2023',
        theme: 'Hardware',
        style: 'etiqueta-hardware'
    }

    ];
    alertInfo(){
      Swal.fire({
        icon: 'error',
        title: 'Você não está logado',
        text: 'Para ler a materia faça o login',
        footer: '<a href="">Se o problema persistir, clique aqui.</a>'
      })
    }
  
}
