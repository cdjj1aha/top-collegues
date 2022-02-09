import { Vote } from './../../models';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './app-avis.component.html',
  styleUrls: ['./app-avis.component.scss']
})
export class AppAvisComponent implements OnInit {

  constructor() { }

  @Output() donnerUnAvisEvt = new EventEmitter<Vote>();

  @Input() desactivIncrement: boolean = false;
  @Input() desactivDecrement: boolean = false;

  ngOnInit(): void {
  }

/*   donnerUnAvis(){
    //console.log("j'aime")
    this.donnerUnAvisEvt.emit(); // emission de l"evenement

  } */

  voteAime(){
    //console.log("j'aime")
    this.donnerUnAvisEvt.emit(Vote.AIMER); // emission de l"evenement

  }

  voteDeteste(){
    //console.log("je deteste")
    this.donnerUnAvisEvt.emit(Vote.DETESTER); // emission de l"evenement

  }

}
