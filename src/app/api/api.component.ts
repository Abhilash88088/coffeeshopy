import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { user } from '../items.service';
import { NewService } from '../items.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
  export class ApiComponent implements OnInit {
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;
  //length: number | undefined;
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
    theUser: user[]=[];
    c =['id','uid','blend_name','origin','variety','notes','intensifier']
   
  
   constructor(private NewService:NewService){}
   
  ngOnInit(): void {
    this.NewService.users().subscribe((data: user[])=>{
      this.theUser=data;
      console.log(this.theUser)
    })   
  }
  }
  