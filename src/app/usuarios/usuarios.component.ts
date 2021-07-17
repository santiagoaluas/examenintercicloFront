import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private RestService: RestService) { }
  public listaUsuarios: any =[]
  public usuario: any = {}
  ngOnInit(): void {
    this.Get_User()
  }

  public Get_User(){
    const respuesta = this.RestService.Get_Usuario(`https://protected-woodland-45407.herokuapp.com/Usuarios`)
    .subscribe(respuesta => {
      var resp: any = respuesta;
      if (resp.exito){
        this.listaUsuarios = resp.data
      }
    })
  }

  public Details_User(idUsuario: string){
    this.usuario = this.listaUsuarios.filter((usuario:any) => usuario.id === idUsuario)[0];
    console.log(this.usuario)
  }

}
