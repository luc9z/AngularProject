import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent { }
