import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'tabpreco';
  
  produtos: Produto[] = [
    { nome: 'Bolinho Caipira', preco: 8.00, quantidade: 0 },
    { nome: 'Brincadeiras', preco: 3.00, quantidade: 0 },
    { nome: 'Cadeia', preco: 2.00, quantidade: 0 },
    { nome: 'Caldinho', preco: 8.00, quantidade: 0 },
    { nome: 'Chocolate quente', preco: 4.00, quantidade: 0 },
    { nome: 'Doces', preco: 4.00, quantidade: 0 },
    { nome: 'Pão com Linguiça', preco: 10.00, quantidade: 0 },
    { nome: 'Pastel', preco: 8.00, quantidade: 0 },
    { nome: 'Pipoca', preco: 8.00, quantidade: 0 },
    { nome: 'Refrigerante', preco: 5.00, quantidade: 0 },
    { nome: 'Suco de Uva', preco: 5.00, quantidade: 0 }

  ];

  incrementar(produto: Produto): void {
    produto.quantidade++;
  }

  decrementar(produto: Produto): void {
    if (produto.quantidade > 0) {
      produto.quantidade--;
    }
  }

  calcularTotal(produto: Produto): number {
    return produto.preco * produto.quantidade;
  }  

  calcularValorTotal(): number {
    return this.produtos.reduce((acc, produto) => acc + this.calcularTotal(produto), 0);
  }
  
  zerarQuantidades(): void {
    this.produtos.forEach(produto => produto.quantidade = 0);
  }

}
