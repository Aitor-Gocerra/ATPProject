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

  guardar() {
    if(id != null)
  }
}
