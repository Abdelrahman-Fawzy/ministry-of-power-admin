import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseUrl
  paginationInfo = {
    "pageNumber": 1,
    "pageSize": 100
  }
  constructor(private http: HttpClient, public router: Router) { }

  getUsers() {
    return this.http.post(`${this.baseUrl}/UsersApp/GetClientCard`, this.paginationInfo)
  }
}
