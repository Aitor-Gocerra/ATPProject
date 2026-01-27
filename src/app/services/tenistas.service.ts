import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TenistasService {

  private listaTenista = [
    {
      id: 1,
      nombre: 'Carlos Alcaraz',
      nacionalidad: 'Española',
      numeroGrandSlams: 3,
      peso: 74,
      altura: 1.83,
      golpeDominante: 'Derecha',
    },
    {
      id: 2,
      nombre: 'Jannik Sinner',
      nacionalidad: 'Italiana',
      numeroGrandSlams: 1,
      peso: 76,
      altura: 1.88,
      golpeDominante: 'Derecha',
    },
    {
      id: 3,
      nombre: 'Dominic Thiem',
      nacionalidad: 'Austriaca',
      numeroGrandSlams: 1,
      peso: 79,
      altura: 1.85,
      golpeDominante: 'Derecha',
    },
    {
      id: 4,
      nombre: 'Alexander Zverev',
      nacionalidad: 'Alemana',
      numeroGrandSlams: 0,
      peso: 90,
      altura: 1.98,
      golpeDominante: 'Derecha',
    },
    {
      id: 5,
      nombre: 'Casper Ruud',
      nacionalidad: 'Noruega',
      numeroGrandSlams: 0,
      peso: 81,
      altura: 1.83,
      golpeDominante: 'Derecha',
    },
    {
      id: 6,
      nombre: 'Ben Shelton',
      nacionalidad: 'Estadounidense',
      numeroGrandSlams: 0,
      peso: 88,
      altura: 1.93,
      golpeDominante: 'Izquierda',
    },
  ];

  constructor() { }

  getTenistas(){
    return this.listaTenista;
  }

  addTenista(nombre: string, nacionalidad: string, numeroGrandSlams: number, peso: number, altura: number, golpeDominante: string){
    const idTenista = this.listaTenista.length + 1;

    const nuevoTenista = {
        id: idTenista,
        nombre,
        nacionalidad,
        numeroGrandSlams,
        peso,
        altura,
        golpeDominante
    }
    
    this.listaTenista.push(nuevoTenista);
  }

  updateTenista(id: number, nombre: string, nacionalidad: string, numeroGrandSlams: number, peso: number, altura: number, golpeDominante: string){
    if(id !== null){

    } else {

    }
  }

  deleteTenista(id: number) {
    this.listaTenista.filter(tenista => tenista.id !== id);
  }
}
