import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Paco',
    favoritos: [
      { id: 4, nombre: 'juan' },
      { id: 2, nombre: 'pepi' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  eliminar( index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {
    console.log('posteado');
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push( {...nuevoFavorito})
    this.nuevoJuego="";
  }
}
