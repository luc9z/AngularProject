import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('light');
  theme$ = this.themeSubject.asObservable();

  constructor() {
    // Recupera o tema salvo no localStorage ou usa 'light' como padrão
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(theme: string) {
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    
    // Aplica o tema no elemento HTML raiz
    document.documentElement.setAttribute('data-theme', theme);
    
    // Força a atualização do tema em todos os elementos
    document.querySelectorAll('*').forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
        element.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
      }
    });
  }

  getTheme() {
    return this.themeSubject.value;
  }
} 