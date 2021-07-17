import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuarios-details',
  templateUrl: './usuarios-details.component.html',
  styleUrls: ['./usuarios-details.component.css']
})
export class UsuariosDetailsComponent implements OnInit {
  @Input() usuario: any ;
  constructor() { }

  ngOnInit(): void {
  }

}
