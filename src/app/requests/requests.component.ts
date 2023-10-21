import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  breadCrumbList = [
    { name: 'الطلبات', url: '/requests'}
  ]

  requests: any[] = [
    {status: 'rejected'},
    {status: 'full-rejected'},
    {status: 'pending'},
    {status: 'accepted'},
    {status: 'rejected'},
    {status: 'full-rejected'},
    {status: 'pending'},
    {status: 'accepted'},
  ]

  products!: Product[];

    selectedProducts!: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    customSort(event: SortEvent) {
      event.data?.sort((data1, data2) => {
          let value1 = data1[event.field!];
          let value2 = data2[event.field!];
          let result = null;

          if (value1 == null && value2 != null) result = -1;
          else if (value1 != null && value2 == null) result = 1;
          else if (value1 == null && value2 == null) result = 0;
          else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
          else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

          return event.order! * result;
      });
  }
}
