import { Component } from '@angular/core';
import { TenistasService } from 'src/app/services/tenistas.service';

@Component({
  selector: 'app-tenista-list',
  templateUrl: './tenista-list.component.html',
  styleUrls: ['./tenista-list.component.css']
})
export class TenistaListComponent {

  tenistas: any[] = [];
  tenistasPremiados: any[] = [];

  id: number | null = null;
  nombre: string = '';
  nacionalidad: string = '';
  numeroGrandSlams: number = 0;
  peso: number = 0;
  altura: number = 0;
  golpeDominante: string = '';

  tenistaMalAlto: string = '';
  tenistaMasPremios: string = '';

  constructor(private sTenista: TenistasService) {}

  ngOnInit(){
    this.tenistas = this.sTenista.getTenistas();
    this.calcularEstadisticas();
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
      this.sTenista.updateTenista(this.id, this.numeroGrandSlams);
    } else {
      this.sTenista.addTenista(this.nombre, this.nacionalidad, this.numeroGrandSlams, this.peso, this.altura, this.golpeDominante);
    }

    this.ngOnInit();
    this.calcularEstadisticas();
    this.limpiarFormulario();
  }

  eliminar(id: number) {
    this.sTenista.deleteTenista(id);
    this.tenistas = this.sTenista.getTenistas();
    this.calcularEstadisticas();
  }

  mostrarGrandSlams() {
    const tenistas = this.sTenista.getTenistas();
    this.tenistasPremiados = tenistas.filter(tenista => tenista.numeroGrandSlams == 0);
  }

  calcularEstadisticas() {
    let tenistaMasAlto = this.tenistas[0];

    for(let tenista of this.tenistas){
      if(tenista.altura > tenistaMasAlto.altura){
        tenistaMasAlto = tenista;
      }
    }

    this.tenistaMalAlto = tenistaMasAlto.nombre;

    let tenistaConGran = this.tenistas[0];

    for(let tenista of this.tenistas) {
      if(tenista.numeroGrandSlams > tenistaConGran.numeroGrandSlams){
        tenistaConGran = tenista;
      }
    }
    this.tenistaMasPremios = tenistaConGran.nombre;
  }

    
}
