import { Component } from '@angular/core';
import { Alumno } from 'src/models/Alumno';
 

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos = Alumno.obtenerAlumnos();
  soloAprobados = false;

  revisarAprobado(alumno: Alumno): boolean {
    return alumno.promedio > 6;
  }
}
