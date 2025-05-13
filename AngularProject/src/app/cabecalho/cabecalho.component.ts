import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    const currentTheme = this.themeService.getTheme();
    this.themeService.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }
}
