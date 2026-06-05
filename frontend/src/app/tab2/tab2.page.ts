import { Component, signal } from '@angular/core';
import { WorkoutsService } from '../services/workouts-service';
import { Iworkout } from '../interfaces/iworkout';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  workouts = signal<Iworkout[]>([]);

  constructor(private service: WorkoutsService){
    this.service.getWorkouts().subscribe((result) => {
      console.log(result);
      this.workouts.set(result);
    });
  }

}
