import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weathercomponent',
  templateUrl: './WeatherComponent.component.html',
  styleUrls: ['./WeatherComponent.component.css']
})
export class WeatherComponentComponent implements OnInit {

  values: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
  getValues()  {
    this.httpClient.get('http://localhost:5000/WeatherForecast').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
