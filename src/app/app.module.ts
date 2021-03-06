import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppAvisComponent } from './c.avis/app-avis/app-avis.component';
import { AppCollegueComponent } from './c.collegue/app-collegue/app-collegue.component';
import { AppListeColleguesComponent } from './c.listCollegue/app-liste-collegues/app-liste-collegues.component';
import { AppAccueilComponent } from './c.accueil/app-accueil/app-accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { NouveauCollegueTemplateFormComponent } from './c.forms/nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RafraichirComponent } from './rafraichir/rafraichir.component';
import { RouterModule, Routes } from '@angular/router';

// Mapping de route (/page ? et le composant )
const routerConfig: Routes = [
  {
    path:'newcol', component: NouveauCollegueTemplateFormComponent
  },
  {
    path:'liste', component: AppListeColleguesComponent
  },
  {
    path:'', pathMatch: 'full', redirectTo: '/liste'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AppAvisComponent,
    AppCollegueComponent,
    AppListeColleguesComponent,
    AppAccueilComponent,
    ScorePipe,
    RafraichirComponent,
    NouveauCollegueTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
