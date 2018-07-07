import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../model/user.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://127.0.0.1:3000/api/user";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  create(user) {
    let url: string = `${apiUrl}`;
    return this.http.post(url, user, httpOptions);
  }

  read(id?: string) {
    let url: string;
    if (id === undefined) {
      url = `${apiUrl}`;
    } else {
      url = `${apiUrl}/${id}`;
    }
    return this.http.get(url, httpOptions);;
  }

  update(user: User) {
    let url: string = `${apiUrl}/${user._id}`;
    return this.http.put(url, user, httpOptions);
  }

  delete(id: string) {
    let url: string = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
