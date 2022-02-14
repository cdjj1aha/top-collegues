import { DataService } from 'src/app/services/data.service';
import { AppListeColleguesComponent } from './../../c.listCollegue/app-liste-collegues/app-liste-collegues.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './app-accueil.component.html',
  styleUrls: ['./app-accueil.component.scss']
})
export class AppAccueilComponent implements OnInit {


/*   @ViewChild(AppListeColleguesComponent)
  composantListeCollegues?: AppListeColleguesComponent; */


  constructor(private dataSrv: DataService) {

  }

  ngOnInit(): void {
  }

/*   actualiser(){
    //this.composantListeCollegues?.rafraichir();
  } */

  actualiser(){
    //this.dataSrv.abonnerFluxTabCollegues();
    this.dataSrv.rafraichirListeCollegues();
  }
}
