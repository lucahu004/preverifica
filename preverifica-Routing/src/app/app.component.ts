import { Component } from '@angular/core';
import { ECommerce } from './models/ecommerce.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: ECommerce;
  serviceURL: string = 'https://my-json-server.typicode.com/paolocarugati/PC_ecommerce/db';
  oECommerce: Observable<ECommerce>;

  constructor(public http: HttpClient) {
    this.makeTypedRequest();
  }

  makeTypedRequest() : void
  {
    
    this.oECommerce = this.http.get<ECommerce>(this.serviceURL);
    this.oECommerce.subscribe(d => {this.data = d;});
  } 
}
