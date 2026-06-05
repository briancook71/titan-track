import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iworkout } from '../interfaces/iworkout';


@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  
constructor(private http: HttpClient){

  }

  getWorkouts() {
    return this.http.get<Iworkout[]>('http://localhost:3000/workouts');
  }
}