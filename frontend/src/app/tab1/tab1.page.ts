import { Component, signal } from '@angular/core';
import { Iprogram } from '../interfaces/iprogram';
import { ProgramsService } from '../services/programs-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  programs = signal<Iprogram[]>([]);

  constructor(private service: ProgramsService){
    this.service.getPrograms().subscribe((result) => {
      console.log(result);
      this.programs.set(result);
    });
  }

}




 
