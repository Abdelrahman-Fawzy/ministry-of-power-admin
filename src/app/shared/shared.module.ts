import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TableModule } from 'primeng/table';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TableModule,
    BsDropdownModule,
    ModalModule.forRoot(),
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
    BreadcrumbComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    BsDropdownModule,
    ModalModule
  ]
})
export class SharedModule { }
