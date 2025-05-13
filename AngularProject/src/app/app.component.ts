import { Component } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
}
