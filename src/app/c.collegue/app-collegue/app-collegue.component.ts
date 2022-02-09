import { Component, Input, OnInit } from '@angular/core';
import { Collegue, Vote } from './../../models';


@Component({
  selector: 'app-collegue',
  templateUrl: './app-collegue.component.html',
  styleUrls: ['./app-collegue.component.scss']
})

export class AppCollegueComponent implements OnInit {

  constructor() { }

  //@Input() collegue?: Collegue; => fonctionne avec un ngif si Collegue est undefined

  @Input() c!: Collegue;


  incrementScore: number = 10;
  erreurVote: number = 10000;

  @Input() count = this.incrementScore;


  ngOnInit(): void {
  }



  prendreEnCompteAvis(vote: Vote){
    // console.log(vote)

    switch(vote) {
      case Vote.AIMER: {
        this.c.score = this.c.score + this.incrementScore;
        break;
      }
      case Vote.DETESTER: {
        this.c.score = this.c.score - this.incrementScore;
        break;
      }
      default: {
        this.c.score = this.incrementScore * this.erreurVote;
        break;
      }
   }


  }


}
