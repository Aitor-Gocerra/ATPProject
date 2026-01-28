import { Component } from '@angular/core';
import { TenistasService } from 'src/app/services/tenistas.service';

@Component({
  selector: 'app-tenista-list',
  templateUrl: './tenista-list.component.html',
  styleUrls: ['./tenista-list.component.css']
})
export class TenistaListComponent {

  tenistas: any[] = [];

  id: number | null = null;
  nombre: string = '';
  nacionalidad: string = '';
  numeroGrandSlams: number = 0;
  peso: number = 0;
  altura: number = 0;
  golpeDominante: string = '';

  constructor(private sTenista: TenistasService) {}

  ngOnInit(){
    this.sTenista.getTenistas();
  }

  prepararEdicion(tenista: any) {
    this.id = tenista.id;
    this.nombre = tenista.nombre;
    this.nacionalidad = tenista.nacionalidad;
    this.numeroGrandSlams = tenista.numeroGrandSlams;
    this.peso = tenista.peso;
    this.altura = tenista.altura;
    this.golpeDominante = tenista.golpeDominante;
  }

  limpiarFormulario() {
    this.id = null;
    this.nombre = '';
    this.nacionalidad = '';
    this.numeroGrandSlams = 0;
    this.peso = 0;
    this.altura = 0;
    this.golpeDominante = '';
  }

  guardar() {
    if(this.id !== null) {
      this.sTenista.updateTenista(this.id, this.nombre, this.nacionalidad, this.numeroGrandSlams, this.peso, this.altura, this.golpeDominante);
    } else {
      this.sTenista.addTenista(this.nombre, this.nacionalidad, this.numeroGrandSlams, this.peso, this.altura, this.golpeDominante);
    }

    this.ngOnInit();
    this.limpiarFormulario();
  }

  eliminar(id: number) {
    this.sTenista.deleteTenista(id);
    this.ngOnInit();
  }
}
