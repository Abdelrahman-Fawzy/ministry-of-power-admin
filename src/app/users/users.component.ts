import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  breadCrumbList = [
    { name: 'المستخدمين', url: '/users'}
  ]

  users: any

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.usersService.getUsers().subscribe((users: any) => {
      this.users = users
      console.log(this.users);
      
    })
  }

}
