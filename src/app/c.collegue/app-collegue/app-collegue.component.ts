import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from './../../models';


@Component({
  selector: 'app-collegue',
  templateUrl: './app-collegue.component.html',
  styleUrls: ['./app-collegue.component.scss']
})

export class AppCollegueComponent implements OnInit {

  constructor() { }

  //@Input() collegue?: Collegue; => fonctionne avec un ngif si Collegue est undefined

  @Input() c!: Collegue;

  ngOnInit(): void {
  }

  prendreEnCompteAvis(){
    console.log("avis donné")
    this.c.score = this.c.score + 10;
  }


}
