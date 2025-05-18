import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

    livro = {
      titulo: "Memorias Postulas",
      autoria: "Machado de Assis",
      imagem: "mempost.png"
    }
}
