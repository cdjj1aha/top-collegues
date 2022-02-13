import { Collegue } from './models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues';
/*   unCollegue: Collegue = {
      pseudo: "un pseudo",
      score: 1000,
      photo: "https://randomuser.me/api/portraits/lego/0.jpg"
    };
  unDeuxiemeCollegue: Collegue = {
      pseudo: "deux pseudo",
      score: -990,
      photo: "https://randomuser.me/api/portraits/lego/1.jpg"
    }; */

// comment l'appeler dans app-liste-collegues.component.ts
/*   tableauColleguesFictifs = [
      {
        photo:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
        pseudo:"Miaou1",
        score:900
      },
      {
        photo:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
        pseudo:"Miaou2",
        score:900
      },
      {
        photo:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
        pseudo:"Miaou3",
        score:900
      }
    ]; */


}
