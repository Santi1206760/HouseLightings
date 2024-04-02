import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  luces: { [key: string]: { encendida: boolean } } = {
    cocina: { encendida: false },
    comedor: { encendida: false },
    dormitorio: { encendida: false },
    oficina: { encendida: false }
  };

  Estado(location: string) {
    this.luces[location].encendida = !this.luces[location].encendida;
  }
}
