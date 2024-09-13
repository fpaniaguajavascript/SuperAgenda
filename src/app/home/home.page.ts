import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonList, IonItem, IonLabel, IonIcon, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../interfaces/contacto';
import { ContactosService } from '../services/contactos.service';
import { CommonModule } from '@angular/common';
import { FichaContactoComponent } from "../components/ficha-contacto/ficha-contacto.component";
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonIcon, IonLabel, FormsModule, IonItem, IonList, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FichaContactoComponent],
})
export class HomePage {
  public contacto: Contacto = { nombre: "", telefono: "", imagePath: "" };
  constructor(
    public contactosService: ContactosService,
    public photoService: PhotoService) { }
  agregar() {
    this.contactosService.agregar({
      nombre: this.contacto.nombre,
      telefono: this.contacto.telefono,
      imagePath: this.photoService.photoPath
    });
  }
  takePicture() {
    this.photoService.addNewToGallery();
  }
}
