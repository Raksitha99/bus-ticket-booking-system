import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SearchService {
  private baseUrl = 'https://projectapi.gerasim.in/api/BusBooking/';
  private http = inject(HttpClient);

  getLocations(){
    return this.http.get(this.baseUrl + "GetBusLocations");
  }

}
