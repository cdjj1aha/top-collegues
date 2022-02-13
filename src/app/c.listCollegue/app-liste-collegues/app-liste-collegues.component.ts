import { DataService } from 'src/app/services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Collegue, tableauColleguesFictifs } from 'src/app/models';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './app-liste-collegues.component.html',
  styleUrls: ['./app-liste-collegues.component.scss']
})

export class AppListeColleguesComponent implements OnInit {

  //@Input() c!: Collegue;

  // modélise l'absence des données collègues ?

  // 1. collegues = [] puis collegues = DataServeur
  // => pas trop fan : comment différentier une data serveur vide avec pas encore de données reçues

  // 2. collegues?
  // => correct => OK
  // => le moins - => if if if if

  // 3. collegues: Observable<Collegues>, | async
  // => correct
  // => une affection de l'industrie sur cette option
  // => c'est bon pour la période d'essai ;-)

  // ?4. collegues! => bugs en perspective ;-)
  // => Bidouille ;-)
  // => vous prenez vos responsabilités

  //collegues: Collegue[] = [];
  collegues: Observable<Collegue[]>;

  constructor(private dateSrv: DataService) {
    // jeu de données provisoire (pour tester) tableauColleguesFictifs est dans models.ts
    // car je n'arrive pas à l'appeler lorsqu'il est définit dans app.component.ts
    //this.collegues = tableauColleguesFictifs;

/*     this.collegues = of(tableauColleguesFictifs)
                      .pipe(delay(3000)); */
/*     // pour tester affichage
    this.collegues = of([])
                      .pipe(delay(3000)); */

      //const obs$ = this.dateSrv.listerCollegues();
      //console.log(obs$);
      //obs$.subscribe();
      this.collegues = this.dateSrv.listerCollegues()
                            .pipe(delay(3000));

    }

  ngOnInit(): void {

/*     setTimeout(()=> {
      //this.collegues = tableauColleguesFictifs;
      this.collegues;
    }, 3000); */

    // this.rafraichir();

    this.collegues = this.dateSrv.abonnerFluxTabCollegues();

  }

/*   rafraichir () {
    this.collegues = this.dateSrv.listerCollegues()
                            .pipe(delay(3000));
      } */

}
