import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Trainer } from './features/trainer/trainer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Trainer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learn-piano');
}
