import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cars } from '../model/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  baseURL = environment.APIurl;
  constructor(private http: HttpClient) { }

  getCars(): Observable<Cars[]>{
    return this.http.get<Cars[]>(this.baseURL)
  }
}
