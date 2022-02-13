import { Collegue, Vote } from 'src/app/models';
import { Injectable } from '@angular/core';
import { delay, interval, Observable, Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  obs: Observable<any>; // test de variable dans un service

  // creation d'un bus
  private busTabCollegues = new Subject<Collegue[]>();

  constructor(private http: HttpClient) {
    this.obs = new Observable;
    // a utiliser pour tester le comportement des abonements au bus .
/*     interval(2000)
    .subscribe(() => this.busTabCollegues.next([
      {
        pseudo: "MOUARFFF",
        photo: "https://randomuser.me/api/portraits/lego/6.jpg",
        score: 65000
      }
    ])) */

  }

//GET https://formation-angular-collegues.herokuapp.com/api/v1/collegues
  listerCollegues(): Observable<Collegue[]>{

    return this.http.get<Collegue[]>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues')

    //return this.obs;
    //return null;

  }

  donnerUnAvis(collegue: Collegue, avis: Vote): Observable<Collegue> {
        return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/votes", {
      avis,
      pseudo: collegue.pseudo
    }
    );
  }

  rafraichirListeCOllegues(){
    //this.busTabCollegues.next([]);
    this.listerCollegues()
      .pipe(
        delay(3000)
      )
      .subscribe(
        colleguesServeur => this.busTabCollegues.next(colleguesServeur)
      )

  }


  abonnerFluxTabCollegues(): Observable<Collegue[]> {
    //throw new Error('Method not implemented.');
    return this.busTabCollegues.asObservable();
  }

}
