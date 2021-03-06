import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient

  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://projetinhoblogpessoal.herokuapp.com/usuarios/logar',userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://projetinhoblogpessoal.herokuapp.com/usuarios/cadastrar', user)

  }

  getByIdUser(id: number) : Observable<User>{
    return this.http.get<User>(`https://projetinhoblogpessoal.herokuapp.com/usuarios/${id}`)
  }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization' , environment.token)
    }
  }
}
