import { AppCollegueComponent } from './../../c.collegue/app-collegue/app-collegue.component';
import { DataService } from 'src/app/services/data.service';
import { Collegue, CollegueForms } from './../../models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegueForms: CollegueForms = {
    nom:'',
    prenom:'',
    pseudo: '',
    photo:''
  }

  //collegueForms:Partial<CollegueForms> = {}



  constructor(private dataSrv: DataService) {

  }

  ngOnInit(): void {
  }

  envoyerDataForms(){
    console.log(this.collegueForms);
    this.dataSrv.ajouterCollegue(this.collegueForms as CollegueForms)
        .subscribe({
          next: () => console.log('colléque créer'),
          error: () => console.log('erreur back')
        })
    //return this.dataSrv.
  }
}
function next(next: any, arg1: () => void) {
  throw new Error('Function not implemented.');
}

