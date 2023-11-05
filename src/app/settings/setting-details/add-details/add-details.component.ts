import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent {

  modalRef?: BsModalRef;

  constructor(public modalService: BsModalService) {}

  closeModal() {
    this.modalService.hide();
  }

}
