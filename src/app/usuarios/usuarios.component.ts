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
    try {
      if (idUsuario !== ""){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        
        this.usuario = this.listaUsuarios.filter((usuario:any) => usuario.id === idUsuario)[0];
       
        var date_test = new Date(this.usuario.fecha_nacimiento.toString());
        console.log(dd)
        console.log(date_test.getDate())
  
        if (dd == String(date_test.getDate()).padStart(2, '0') &&  mm == String(date_test.getMonth() + 1).padStart(2, '0')){
          this.usuario = {...this.usuario, cumple: true}
        }else{
          this.usuario = {...this.usuario, cumple: false}
        }
        
        console.log(this.usuario)
      }
    } catch (error) {
      
    }
   
   
  }

}
