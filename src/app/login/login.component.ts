import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { FormGroup,FormControl,FormBuilder,FormArray, Validators, NgForm } from '@angular/forms';
//import { MatDialog } from '@angular/material/dialog';
//import { SuccessCardComponent } from '../success-card/success-card.component';
//import { FailureCardComponent } from '../failure-card/failure-card.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  username = '';
  password = '';
  constructor(private router: Router){}
  
  onSubmit() {
      this.router.navigate(['/productList']);
  }
 }

//  myForm!:FormGroup;
//  constructor(private formBuilder:FormBuilder, private dialog:MatDialog,private router: Router) { }
//  arraydata: FormGroup[]=[];
//  ngOnInit(): void {
//    this.myForm=new FormGroup({
//      'username':new FormControl('',Validators.required),
//      'password':new FormControl('',Validators.required)

//    })
//    // onSubmit(form:NgForm){
//    //   this.arraydata.push(FormGroup.value);
//    //   }
//  }
//  onSubmit(){
//    if(this.username?.valid && this.password?.valid ){
//      this.dialog.open(SuccessCardComponent,{ data: {
//        message:  "Success...!!!"
         

//    }});
//    this.router.navigate(['/productList']);
//    this.arraydata.push(this.myForm.value);
//    console.log(this.arraydata);
//  }
//    else{
//      this.dialog.open(FailureCardComponent,{ data: {
//        message:  "Fail..!!!"
//    }});
//  }

//  }
//  get username(){
//    return this.myForm.get('username')
//  }
//  get password(){
//    return this.myForm.get('password')
//  }
// }

 
