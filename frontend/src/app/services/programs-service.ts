import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iprogram } from '../interfaces/iprogram';


@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  
constructor(private http: HttpClient){

  }

  getPrograms() {
    return this.http.get<Iprogram[]>('http://localhost:3000/programs');
  }
}