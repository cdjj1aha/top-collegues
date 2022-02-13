import { Collegue, Vote } from 'src/app/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  obs: Observable<any>; // test de variable dans un service

  constructor(private http: HttpClient) {
    this.obs = new Observable;
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


}
