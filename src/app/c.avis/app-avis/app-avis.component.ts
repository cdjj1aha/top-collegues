import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './app-avis.component.html',
  styleUrls: ['./app-avis.component.scss']
})
export class AppAvisComponent implements OnInit {

  constructor() { }

  @Output() donnerUnAvisEvt = new EventEmitter<string>();

  ngOnInit(): void {
  }

  donnerUnAvis(){
    //console.log("j'aime")
    this.donnerUnAvisEvt.emit(); // emission de l"evenement

  }

}
