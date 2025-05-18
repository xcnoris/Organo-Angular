import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  // Usamos o Hook OnInit para implementar alguma logica que deve ser carregada sempre que o component for chamado/carregado
  // Nesse exemplo vamos carregar as listas de livros sempre que iniciarmos o component
  // Entendo como se fosse o contrutor da classs, usamos muito para  inicializar dados no componente, como buscar informações de um servidor ou configurar valores iniciais.
  ngOnInit(){
    this.livrosPorGenero = new Map();

    // Fazemos um foreach em livros
    livros.forEach((livro) => {
      const generoId = livro.genero.id;

      // Verificamos se já existe no array o id que estamos lendo
      if(!this.livrosPorGenero.has(generoId)){
        this.livrosPorGenero.set(generoId, []);
      }
      // BUsca o valor do id do genero e adiciona o livro.
      this.livrosPorGenero.get(generoId)?.push(livro);
    })

    this.generos = [
      {
        id: 'Poesia',
        value: "Poesia",
        livros: this.livrosPorGenero.get("Poesia")  ?? []
      }
    ]
  }
}