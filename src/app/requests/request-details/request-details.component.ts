import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/shared/services/requests.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
  breadCrumbList = [
    { name: 'الطلبات', url: '/requests'},
    { name: 'اكاديمية 6 أكتوبر'}
  ]
  requestId: any
  request: any

  constructor(private requestService: RequestsService, public activatedRoute: ActivatedRoute) {
    this.requestId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getRequest(this.requestId)
  }

  getRequest(id: number) {
    this.requestService.getRequest(id).subscribe((request: any) => {
      this.request = request
      console.log(request);
      
    })
  }

  getFileName(event: any) {
    const fileChosen = document.getElementById('file-chosen');

    fileChosen!.textContent = event.target.files[0].name;
  }
}
