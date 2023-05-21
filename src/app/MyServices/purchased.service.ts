import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchasedService {

  private baseUrl:string="http://localhost:1111";
  constructor(private http:HttpClient) { }

  addPurchased(purchased:any)
  {
     return this.http.post<any>(`${this.baseUrl}/addPurchased`,purchased);
  }
  getAllPurchased()
  {
    return this.http.get<any>(`${this.baseUrl}/getAllPurchased`);
  }

  getPurchasedByUser(email:any)
  {
    return this.http.get<any>(`${this.baseUrl}/myOrder/`+email);
  }

}
