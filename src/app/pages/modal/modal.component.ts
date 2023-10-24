import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
  formErrors: any = {};
  formData: any = {};
  onSubmit() {
    this.formErrors = {}; // Limpa as mensagens de erro

    // Validando o campo Nome Completo
    if (!this.formData.fullName || this.formData.fullName.trim() === '') {
      this.formErrors.fullName = 'O Nome Completo é obrigatório';
    }

    // Validando o campo E-mail
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!this.formData.email || !emailPattern.test(this.formData.email)) {
      this.formErrors.email = 'E-mail inválido';
    }

    // Validando o campo Data de Nascimento
    if (!this.formData.dob) {
      this.formErrors.dob = 'A Data de Nascimento é obrigatória';
    }

    // Outras validações podem ser adicionadas aqui, como validação de senha, endereço, etc.

    // Verifique se há erros de validação
    if (Object.keys(this.formErrors).length === 0) {
      // Os campos estão válidos, você pode continuar com a submissão do formulário
      console.log('Formulário válido, enviando dados:', this.formData);
      // Implemente a lógica para enviar os dados do formulário para o servidor ou outro destino aqui
    }
    this.close.emit();
  }

    
}



