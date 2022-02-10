import { Component, Input, OnInit } from '@angular/core';
import { Collegue, tableauColleguesFictifs } from 'src/app/models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './app-liste-collegues.component.html',
  styleUrls: ['./app-liste-collegues.component.scss']
})
export class AppListeColleguesComponent implements OnInit {

  //@Input() c!: Collegue;

  collegues: Collegue[];

  constructor() {
    // jeu de données provisoire (pour tester)
    // tableauColleguesFictifs est dans models.ts
    // car eje n'arrive pas à l'appeler lorsqu'il est définit
    // dans app.component.ts
    this.collegues = tableauColleguesFictifs;
  }

  ngOnInit(): void {
  }

}
