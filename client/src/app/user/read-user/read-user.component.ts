import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
 
@Component({
  selector: 'app-read',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.read();
  }

  read(): void {
    this.userService.read().subscribe((user: User[]) => {
      this.users = user;
    });
  }
}
