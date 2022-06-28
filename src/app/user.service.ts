import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  index: any;

  constructor(public http: HttpClient) { }

  checkLogin() {

    return this.http.get("assets/users.json");

  }
  doWeatherCheck(data: any) {
    console.log(data.city);

    var queryParms = new HttpParams()
    queryParms = queryParms.append('q', data.city);
    queryParms = queryParms.append("appid", "3a3eb62e70b9745f96cb7c04245a9cb8");
    return this.http.get("http://api.openweathermap.org/data/2.5/weather", {
      params: queryParms
    });
  }

  doCheckNews() {
    var queryParms = new HttpParams()
    queryParms = queryParms.append('country', 'in');
    queryParms = queryParms.append("apiKey", "408b4153b994422d8638da72f2d3ac5b");
    return this.http.get("https://newsapi.org/v2/top-headlines", {
      params: queryParms
    });
  }

  doCheckNewsWithCat(category) {
    return this.http.get("https://newsapi.org/v2/top-headlines", {
      params: {
        "country": "in",
        "category": category,
        "apiKey": "408b4153b994422d8638da72f2d3ac5b"
      }
    })
  }

  doCheckMore(x: any) {
    this.index = x;
  }

  doNewsLetter() {
    return this.index;
  }

  isLoggedIn() {
    return !!localStorage.getItem("user");
  }

}
