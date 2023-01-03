import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-atributos',
  templateUrl: './d-atributos.component.html',
  styleUrls: ['./d-atributos.component.css']
})
export class DAtributosComponent implements OnInit {
  estilo:string = "enable";
  corFundo:string = "green";
  corFonte:string = "white";
  item:string = "";
  lista:string[] = [];
  isEnableBlock:boolean = true;



  constructor() { }
  addLista(){
    this.lista.push(this.item)
  }

  ngOnInit(): void {
  }
  trocar(){
    if(this.estilo == "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }

}
