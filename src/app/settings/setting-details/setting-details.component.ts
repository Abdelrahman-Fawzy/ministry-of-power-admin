import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddDetailsComponent } from './add-details/add-details.component';

@Component({
  selector: 'app-setting-details',
  templateUrl: './setting-details.component.html',
  styleUrls: ['./setting-details.component.scss']
})
export class SettingDetailsComponent {
  breadCrumbList = [
    { name: 'الإعدادات', url: '/settings'},
    { name: 'مرفقات انشاء حساب جديد'}
  ]

  modalRef?: BsModalRef;

  constructor(public modalService: BsModalService) {}

  addAttachment() {
    this.modalRef = this.modalService.show(AddDetailsComponent, { class: 'modal-md modal-dialog-centered radius-modal' }); 
  }

}
