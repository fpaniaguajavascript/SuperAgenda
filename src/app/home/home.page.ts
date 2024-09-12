import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../interfaces/contacto';
import { ContactosService } from '../services/contactos.service';
import { CommonModule } from '@angular/common';
import { FichaContactoComponent } from "../components/ficha-contacto/ficha-contacto.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, FormsModule, IonItem, IonList, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FichaContactoComponent],
})
export class HomePage {
  public contacto: Contacto = { nombre: "", telefono: "" };
  constructor(public contactosService: ContactosService) { }
  agregar() {
    this.contactosService.agregar(this.contacto);
  }
}
