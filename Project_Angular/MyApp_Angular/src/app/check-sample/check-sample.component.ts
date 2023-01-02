import { Component, OnInit, DoCheck, AfterContentChecked,AfterViewChecked, AfterContentInit, AfterViewInit , OnDestroy} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit ,DoCheck, AfterContentChecked,AfterViewChecked, AfterContentInit, AfterViewInit, OnDestroy{

  quantidade:number = 0;

  constructor() { }
  ngOnDestroy(): void {
    console.log("Goodbye my Friend");
  }
  ngDoCheck(): void {
    console.log("Dochanges");
  }
  adcicionar(){
    this.quantidade +=1
  }
  decrementar(){
    this.quantidade -=1
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log(" ngAfterContentInit");
  }
  ngAfterViewInit(): void {
    console.log(" ngAfterViewInit");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
