import { Component } from '@angular/core';

@Component({
  selector: 'app-konyvajanlo',
  templateUrl: './konyvajanlo.component.html',
  styleUrl: './konyvajanlo.component.scss'
})
export class KonyvajanloComponent {
  konyvek = [
  { name: 'A Gyűrű Szövetsége', price: 2500, sale: false },
  { name: 'A két torony', price: 2000, sale: false },
  { name: 'A király visszatér', price: 3000, sale: true },
]
  name: string= ""
  price:number |null = null
  sale: boolean = false

kiiras(i: number) {
  if (this.konyvek[i].sale === true) {
    return 'Akciós'
  } else {
    return 'Nem akciós'
  }
}



  
 
}
/*kiiras(sale: boolean) {
  return sale ? 'Akciós' : 'Nem akciós'
}*/

