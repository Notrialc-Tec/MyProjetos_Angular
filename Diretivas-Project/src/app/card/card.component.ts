import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  itens:string[] = []
  menuType:string = "user"

  constructor() {
    this.itens = [
      "Mause",
      "Teclado",
      "Cabos",
      "Fonts",
      "Notbook",
      "Tablet",
      "Canetas"
    ]
   }
   adcionar(){
    this.itens.push("Novo produto");
   }

  ngOnInit(): void {
  }

}
