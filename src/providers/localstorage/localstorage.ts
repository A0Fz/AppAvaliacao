import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalstorageProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello LocalstorageProvider Provider');
  }

 

}
