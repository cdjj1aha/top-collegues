import { Collegue } from './models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues';
  unCollegue: Collegue = {
      pseudo: "un pseudo",
      score: 1000,
      photoUrl: "https://randomuser.me/api/portraits/lego/0.jpg"
    };
  unDeuxiemeCollegue: Collegue = {
      pseudo: "pas pseudo",
      score: -100,
      photoUrl: "https://randomuser.me/api/portraits/lego/1.jpg"
    };
}
