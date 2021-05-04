import { Injectable } from '@angular/core';

// import Capacitor dependencies and get references to the Camera, Filesystem, and Storage plugins
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  //define an array of Photos, which will contain a reference to each photo captured with the Camera.
  public photos: Photo[] = [];

  constructor() { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    //newly captured photo to the beginning of the Photos array
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }

}

export interface Photo {
  filepath: string;
  webviewPath: string;
  
}
