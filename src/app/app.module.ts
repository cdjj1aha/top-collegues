import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppAvisComponent } from './c.avis/app-avis/app-avis.component';
import { AppCollegueComponent } from './c.collegue/app-collegue/app-collegue.component';
import { AppListeColleguesComponent } from './c.listCollegue/app-liste-collegues/app-liste-collegues.component';
import { AppAccueilComponent } from './c.accueil/app-accueil/app-accueil.component';
import { ScorePipe } from './pipes/score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppAvisComponent,
    AppCollegueComponent,
    AppListeColleguesComponent,
    AppAccueilComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
