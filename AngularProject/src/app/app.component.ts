import { Component } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormComponent } from './form/form.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormComponent, CarrosselComponent, CabecalhoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
}
