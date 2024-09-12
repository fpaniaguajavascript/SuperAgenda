import { Component, Input, OnInit } from '@angular/core';
import { IonLabel, IonItem, IonCardTitle, IonCardSubtitle, IonCard, IonCardHeader, IonCardContent } from "@ionic/angular/standalone";
import { Contacto } from 'src/app/interfaces/contacto';

@Component({
  selector: 'app-ficha-contacto',
  templateUrl: './ficha-contacto.component.html',
  styleUrls: ['./ficha-contacto.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle, IonLabel, IonItem]
})
export class FichaContactoComponent implements OnInit {
  @Input() elcontacto: Contacto | undefined;
  constructor() { }

  ngOnInit() { }

}
