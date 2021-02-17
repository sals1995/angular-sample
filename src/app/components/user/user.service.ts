import { ApiService } from 'src/app/shared/services/api.service';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }
 
removeUserActions()
{
  localStorage.removeItem("Roles");
}
signOut() {
  this.removeUserActions();
  return this.apiService.get(`/User/SignOut`);
}

login(model:LoginViewModel){
  return this.apiService.post(`/User/login`,model);

}
  
}
