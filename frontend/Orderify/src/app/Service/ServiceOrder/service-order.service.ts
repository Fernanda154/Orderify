import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { ServiceOrder } from './service-order.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrderService {

  private apiUrl = 'http://127.0.0.1:8000/api/orders'; // Substitua pela sua API

  constructor(private http: HttpClient) { }

  createOrder(order: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }

  getOrder(): Observable<ServiceOrder[]> {
    return this.http.get<{ data: ServiceOrder[] }>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  getOrderById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<{ data: ServiceOrder }>(url).pipe(
      map(response => response.data)
    );
  }

  updateOrder(id: number, updatedOrder: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, updatedOrder);
  }

  deleteOrder(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
