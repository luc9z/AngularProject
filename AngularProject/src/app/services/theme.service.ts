import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(true);
  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor() {
    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkTheme.next(savedTheme === 'dark');
      document.body.classList.toggle('light-theme', savedTheme === 'light');
    }
  }

  toggleTheme() {
    const newTheme = !this.isDarkTheme.value;
    this.isDarkTheme.next(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.body.classList.toggle('light-theme', !newTheme);
    
    // Força a atualização do tema em todos os elementos
    document.querySelectorAll('*').forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--background-color');
        element.style.color = getComputedStyle(document.body).getPropertyValue('--text-color');
      }
    });
  }
} 