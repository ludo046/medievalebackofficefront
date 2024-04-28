import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from '../../../interface/auth';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit{
  public form: FormGroup;
  public errorMsg: any;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      firstname: this.formbuilder.control('',Validators.required),
      lastname: this.formbuilder.control(''),
      phone: this.formbuilder.control(''),
      email: this.formbuilder.control('', Validators.required),
      password: this.formbuilder.control('',Validators.required),
      isAdmin: this.formbuilder.control('', Validators.required),
    })
  }

  // createUser():void{
  //   const user : userModel = {
  //     firstname : this.form.get('firstname').value,
  //     lastname : this.form.get('lastname').value,
  //     phone : this.form.get('phone').value,
  //     email : this.form.get('email').value,
  //     password : JSON.stringify(Math.floor(10000000 + Math.random() * 900000)),
  //     isAdmin : false,
  //   }
  //   this.authService.register(user).subscribe(
  //     () => {
  //         //this.router.navigate([this.urlPage + "/" +suppUrl])
  //         console.log(user);
          
  //     },
  //     error => {
  //     this.errorMsg = error.error.message
  //     }
  //   )
  // }
}
