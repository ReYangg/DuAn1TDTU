import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminproductsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/products';

  getAllProducts(){
    return this.http.get<any[]>(this.url);
  }

  addProduct(data:any){
    return this.http.post(this.url, data);
  }

  deleteProduct(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
