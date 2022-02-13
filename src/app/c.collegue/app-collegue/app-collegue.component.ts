import { Component, Input, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Collegue, Vote } from './../../models';


@Component({
  selector: 'app-collegue',
  templateUrl: './app-collegue.component.html',
  styleUrls: ['./app-collegue.component.scss']
  // /* ,providers: DataService */ <= permet de définir un service intiment lié à un composants
})

export class AppCollegueComponent implements OnInit {

  constructor(private dataSrv: DataService) { }

  //@Input() collegue?: Collegue; => fonctionne avec un ngif si Collegue est undefined

  @Input() c!: Collegue;


  incrementScore: number = 10;
  erreurVote: number = 10000;

  //@Input() count = this.incrementScore;


  ngOnInit(): void {
  }



  prendreEnCompteAvis(vote: Vote){
    // console.log(vote)

/*     switch(vote) {
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
   } */

  if(this.c){
    this.dataSrv.donnerUnAvis(this.c, vote)
      .subscribe(
        collegueSurServeur => this.c = collegueSurServeur
      );
  };


  }



}
