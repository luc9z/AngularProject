import { Component } from '@angular/core';
import { CarrosselComponent } from '../carrossel/carrossel.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CarrosselComponent],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent { }
