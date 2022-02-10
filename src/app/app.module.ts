import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppAvisComponent } from './c.avis/app-avis/app-avis.component';
import { AppCollegueComponent } from './c.collegue/app-collegue/app-collegue.component';
import { AppListeColleguesComponent } from './c.listCollegue/app-liste-collegues/app-liste-collegues.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAvisComponent,
    AppCollegueComponent,
    AppListeColleguesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
