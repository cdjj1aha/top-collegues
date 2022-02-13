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


  constructor() { }

  ngOnInit(): void {
  }

}
