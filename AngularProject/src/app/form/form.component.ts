import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nome: string = '';
  email: string = '';
  mensagem: string = '';

  onSubmit() {
    alert('Formulário enviado com sucesso!');
    this.nome = '';
    this.email = '';
    this.mensagem = '';
}
}