import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormComponent } from './form/form.component';
import { CarrosselComponent } from './carrossel/carrossel.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormComponent, CarrosselComponent, CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
}
