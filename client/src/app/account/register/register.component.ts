import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm=new FormGroup({
      displayName: new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password: new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    this.accountService.register(this.registerForm.value).subscribe(()=>{
      this.router.navigateByUrl('/shop');
    },error=>{
      console.log(error);
    });
  }

  requiredInputInValid<Boolean>(input:string){
    return this.registerForm.get(input)?.invalid
    && this.registerForm.get(input)?.touched 
    &&  this.registerForm.get(input)?.hasError('required');
  }
  patternInputInvalid<Boolean>(input:string){
    return this.registerForm.get(input)?.invalid
    && this.registerForm.get(input)?.touched 
    &&  this.registerForm.get(input)?.hasError('pattern');
  }

}
