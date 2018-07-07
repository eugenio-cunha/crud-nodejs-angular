import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.create(this.userForm.value)
        .pipe(first())
        .subscribe(data => {
          this.router.navigate(['user/read']);
      }, error => {
        console.log(error);
      });
    }
  }

  onCancel() {
    this.router.navigate(['user/read']);
  }

}
