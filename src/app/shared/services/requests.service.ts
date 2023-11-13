import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  baseUrl = environment.baseUrl
  paginationInfo = {
    "pageNumber": 1,
    "pageSize": 100
  }
  constructor(private http: HttpClient, public router: Router) { }

  getRequests() {
    return this.http.post(`${this.baseUrl}/RequestDocument`, this.paginationInfo)
  }

  getRequest(id: number) {
    let Url = `${this.baseUrl}/RequestDocument/ViewRequest?id=${id}`;
    return this.http.post(Url, {})
  }
}
