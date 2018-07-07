import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from "rxjs/operators";

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  userForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      _id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    });

    this.onRead();
  }

  onRead() {
    let id: string;
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
  });

  this.userService.read(id).subscribe(
    data => {
      this.userForm.setValue(data);
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.update(this.userForm.value)
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
