import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl:string="http://localhost:1111"
  constructor(private http:HttpClient) { }

  getProducts()
  {
    return this.http.get<any>(`${this.baseUrl}/getProducts`);
  }

  addProduct(data:any)
  {
    return this.http.post(`${this.baseUrl}/addProduct`,data);
  }

  addImageUrl(url:any,productId:any)
  {
    return this.http.put(`${this.baseUrl}/uploadImage/`+productId,url);
  }

  getProductById(id:any)
  {
    return this.http.get<any>(`${this.baseUrl}/getProductById/`+id);
  }

  getNameOrCategory(search:any)
  {
    return this.http.get<any>(`${this.baseUrl}/getNameOrCategory/`+search);
  }
}
