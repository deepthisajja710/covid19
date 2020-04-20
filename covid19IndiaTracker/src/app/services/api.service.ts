import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService:HttpClient) { }
  baseUrl = "https://api.covid19india.org/";

  getCasesData(){
    return this.httpService.get(this.baseUrl+'data.json');
  }
}
