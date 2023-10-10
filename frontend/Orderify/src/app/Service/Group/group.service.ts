import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Group } from './group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private apiUrl = 'http://127.0.0.1:8000/api/groups'; // Substitua pela sua API

  constructor(private http: HttpClient) { }

  createGroup(group: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, group);
  }

  getGroup(): Observable<Group[]> {
    return this.http.get<{ data: Group[] }>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  getGroupById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<{ data: Group }>(url).pipe(
      map(response => response.data)
    );
  }

  updateGroup(id: number, updatedGroup: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, updatedGroup);
  }

  deleteGroup(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
