import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ministry-of-power-admin';

  ngOnInit(): void {
    localStorage.setItem('adminUser', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJhZG1pbkBnbWFpbC5jb20iLCJUeXBlIjoiVXNlciIsImZhbWlseV9uYW1lIjoiYWRtaW5AZ21haWwuY29tIiwibmJmIjoxNjk5ODk1NTE3LCJleHAiOjE2OTk5Mzc1MTcsImlhdCI6MTY5OTg5NTUxN30.UlNo0w5KR4i8UL9Q3O3CSvdOcAxaF-CGAOVacDyv1H1-4bFNr6D3wxDnyRvGzUuoizT7Ee7p-PKZMLWPEkoFpw')
  }

}
