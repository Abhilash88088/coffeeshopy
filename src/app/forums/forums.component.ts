import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,FormArray, Validators, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessCardComponent } from '../success-card/success-card.component';
import { FailureCardComponent } from '../failure-card/failure-card.component';
@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent {
  myForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private dialog:MatDialog) { }
  arraydata: FormGroup[]=[];
  ngOnInit(): void {
    this.myForm=new FormGroup({
      'textInput':new FormControl('',Validators.required),
      'textTitle':new FormControl('',Validators.required),
      'author':new FormControl('',Validators.required),
      'category':new FormControl('',Validators.required),
      'tag':new FormControl('',Validators.required),
      'date':new FormControl('',Validators.required)

    })
    // onSubmit(form:NgForm){
    //   this.arraydata.push(FormGroup.value);
    //   }
  }
  onSubmit(){
    if(this.textInput?.valid && this.textTitle?.valid && this.author?.valid && this.date?.valid){
      this.dialog.open(SuccessCardComponent,{ data: {
        message:  "Success...!!!"
      
    }});
    this.arraydata.push(this.myForm.value);
    console.log(this.arraydata);
  }
    else{
      this.dialog.open(FailureCardComponent,{ data: {
        message:  "Fail..!!!"
    }});
  }

  }
  get textTitle(){
    return this.myForm.get('textTitle')
  }
  get textInput(){
    return this.myForm.get('textInput')
  }
  get author(){
    return this.myForm.get('author')
  }
  get date(){
    return this.myForm.get('date')
  }
  get tag(){
    return this.myForm.get('tag')
  }
  get category(){
    return this.myForm.get('category')
  }
}
