import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ["https://www.48hourslogo.com/oss/works/2021/06/26/13432220568/109895_74913_448763f0-855b-447f-bfee-8ae4e6a29966.jpg",
            "https://www.ucacue.edu.ec/wp-content/uploads/2020/05/UCACUE-catalogo-carreras-sept2020-feb2021.jpg", 
            "https://www.tithink.com/wp-content/uploads/2018/05/practicas-desarollo-software.jpeg"]
            .map((n) => `${n}`);
  constructor(config: NgbCarouselConfig) { 
     // customize default values of carousels used by this component tree
     config.interval = 10000;
     config.wrap = false;
     config.keyboard = false;
     config.pauseOnHover = false;
  }

  ngOnInit(): void {
   
  }

  
}
