import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private RestService: RestService) { 
  }

  ngOnInit(): void {
    this.verificar_Login()
  }
  title = 'exameninterciclo';
  public activo : boolean = false;
  public username: String = "";
  public password: String = "";
  public mensaje: String = "";
  public login(){
    if (!this.username.trim() && !this.password.trim()){
      const respuesta = this.RestService.Get_Usuario(`https://protected-woodland-45407.herokuapp.com/Usuarios/Login/${this.username}/${this.password}`)
      .subscribe(respuesta => {
        var resp: any = respuesta;
        if (resp.exito){
          this.activo = true
          localStorage.setItem('activo', 'true' );
        }
      },(error) => {
        console.log(error.error);
        this.mensaje = "!Usuario y password incorrectos!"
       })
    }else{
      this.mensaje = "!Usuario y password incorrectos!"
    }
   
  }

  public verificar_Login(){
    if (localStorage.getItem('activo')){
      this.activo = true
    }else{
      this.activo = false
    }
  }

  
}
