// nombre-lista.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-perfumes',
  templateUrl: './perfumes.component.html',
  styleUrls: ['./perfumes.component.css'],
})

export class Perfumes {
  public nombres: string[] = ['perfume1', 'perfume2', 'perfume3', 'perfume4'];
  public nombresOriginales: string[] = [...this.nombres];
  public mensaje: string = '';
  public nombreUsuario: string = 'kevin pinsag';
  public edadUsuario: number | null = null;

  eliminarNombre(): void {
    const nombreEliminado = this.nombres.pop();
    this.mensaje = nombreEliminado ? `Se eliminó el perfume: ${nombreEliminado}` : 'No hay más perfumes para eliminar';
  }

  resetearValores(): void {
    this.nombreUsuario = '';
    this.edadUsuario = null;
    this.mensaje = '';
    this.nombres = [...this.nombresOriginales]; 
  }
}
