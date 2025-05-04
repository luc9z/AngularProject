import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from './info/info.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, InfoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
}
