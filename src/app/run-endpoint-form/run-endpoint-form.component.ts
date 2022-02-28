import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Endpoint } from './endpoint';

@Component({
  selector: 'app-run-endpoint-form',
  templateUrl: './run-endpoint-form.component.html',
  styleUrls: ['./run-endpoint-form.component.css']
})

export class RunEndpointFormComponent implements OnInit {

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
  }

  runEndpoint(endpoint: Endpoint) {
    switch(endpoint.method.toLowerCase()) {
      case "get":
        this.http.get<any>(`${endpoint.baseURL}${endpoint.path}`).subscribe(data => {
          console.log(data)
      });
      break;
      case "post":
        this.http.post<any>(`${endpoint.baseURL}${endpoint.path}`, endpoint.body).subscribe(data => {
          console.log(data)
      });
      break;
      case "put":
        this.http.put<any>(`${endpoint.baseURL}${endpoint.path}`, endpoint.body).subscribe(data => {
          console.log(data)
      });
      break;
      case "delete":
        this.http.put<any>(`${endpoint.baseURL}${endpoint.path}`, endpoint.body).subscribe(data => {
          console.log(data)
      });
      break;
      default:
        console.warn(`No such mehtod ${endpoint.method.toLowerCase()}`)
    }
  }

  model = new Endpoint("/", "Get", "", "<ENTER YOUR URL>");

}
