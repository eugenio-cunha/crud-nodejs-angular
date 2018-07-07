import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from "rxjs/operators";

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string;
  public user: any;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.onRead();
  }

  onRead() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });

  this.userService.read(this.id).subscribe(
    data => {
      this.user = data
    })
  }

  onSubmit() {
    if (this.id) {
      this.userService.delete(this.id)
        .pipe(first())
        .subscribe(data => {
          this.router.navigate(['user/read'])
      }, error => {
        console.log(error);
      });
    }
  }

  onCancel() {
    this.router.navigate(['user/read']);
  }
}
