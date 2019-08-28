import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../service/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
   user: User;
 
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,private toastr: ToastrService) {
    this.user = new User();
  }
 
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
    this.toastr.success('Sucessfully!', 'Record Saved!');
  }
 
  gotoUserList() {
    this.router.navigate(['/create']);
  }

}
