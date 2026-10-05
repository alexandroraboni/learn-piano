import { Component, inject } from '@angular/core';
import { TrainerService } from '../../core/services/trainer.service';

@Component({
  imports: [],
  selector: 'app-trainer',
  styleUrl: './trainer.css',
  templateUrl: './trainer.html',
})
export class Trainer {
  protected readonly trainerService = inject(TrainerService);

  start(): void {
    this.trainerService.start();
  }

  next(): void {
    this.trainerService.next();
  }
}
