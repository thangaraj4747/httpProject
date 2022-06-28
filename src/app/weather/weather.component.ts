import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city:string;
  Country:string;
  degree:number;
  humidity:number;
  weatherForm: FormGroup;
  view:boolean=false;
  constructor(public weatherSer: UserService) { }

  ngOnInit(): void {
    
    this.weatherForm = new FormGroup(
      {'city': new FormControl(null)}
      );
  }
doCheck(){
  
  this.weatherSer.doWeatherCheck(this.weatherForm.value).subscribe((data:any)=>{
    console.log(data);
    
    this.city=data.name;
    this.Country=data.sys.country;
    this.degree=data.main.temp;
    this.humidity=data.main.humidity;
  }, (error)=>{
    console.log(error);
  })
  
}
}
