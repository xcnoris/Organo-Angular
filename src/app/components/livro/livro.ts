export interface Livro{
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: Boolean;
    genero: GeneroLiterario;
}

export interface GeneroLiterario {
    id: string;
    value: string;
    livros: Livro[]
}