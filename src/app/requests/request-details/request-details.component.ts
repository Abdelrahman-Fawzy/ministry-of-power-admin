import { Component } from '@angular/core';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent {
  breadCrumbList = [
    { name: 'الطلبات', url: '/requests'},
    { name: 'اكاديمية 6 أكتوبر'}
  ]

  getFileName(event: any) {
    const fileChosen = document.getElementById('file-chosen');

    fileChosen!.textContent = event.target.files[0].name;
  }
}
