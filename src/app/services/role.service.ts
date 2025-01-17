import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/role';
import { RoleCreateRequest } from '../interfaces/role-create-request';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRoles = (): Observable<Role[]> =>
    this.http.get<Role[]>(`${this.apiUrl}roles`);

  createRole = (role: RoleCreateRequest): Observable<{ message: string }> =>
    this.http.post<{ message: string }>(`${this.apiUrl}Roles`, role);

  delete = (id: string): Observable<{ message: string }> =>
    this.http.delete<{ message: string }>(`${this.apiUrl}Roles/${id}`);

  assignRole(userId: string, roleId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}roles/assign`, {
      userId,
      roleId,
    });
  }

}
