import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor(private http: HttpClient) { }


    listsAllCharacters () {
        return this.http.get('https://api.got.show/api/characters').toPromise();
    }
    getACharacter (id) {
        return this.http.get(`https://api.got.show/api/characters/byId/${id}`).toPromise();
    }
}
