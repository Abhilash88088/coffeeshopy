import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  saveData=[];
  private _form = new BehaviorSubject<any[]>([]);
  form$=this._form.asObservable();
  url ='https://random-data-api.com/api/coffee/random_coffee?size=50'

  constructor(private http:HttpClient) { }
users():Observable<user[]>{
  return this.http.get<user[]>(this.url);
}
}
export interface user{
  id:number
  uid: string
  blend_name: string
  origin: string
  variety: string
  notes: string
  intensifier: string
}

