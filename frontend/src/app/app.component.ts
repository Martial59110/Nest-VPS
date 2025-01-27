import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="container">
      <h1>Mon Application</h1>
      <div class="content">
        <p>Bienvenue sur l'interface frontend</p>
        <button (click)="testApi()">Tester l'API</button>
        <p *ngIf="apiResponse">Réponse de l'API: {{ apiResponse }}</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .content {
      margin-top: 20px;
    }
    button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  apiResponse: string = '';

  async testApi() {
    try {
      const response = await fetch('http://localhost:3000/api');
      const data = await response.json();
      this.apiResponse = JSON.stringify(data);
    } catch (error) {
      this.apiResponse = 'Erreur lors de la connexion à l'API';
    }
  }
} 