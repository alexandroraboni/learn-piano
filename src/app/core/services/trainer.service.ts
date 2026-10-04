import { Service, signal } from '@angular/core';
import { chords } from '../data/chords.data';
import { notes } from '../data/notes.data';
import { Chord } from '../models/chord.model';
import { Note } from '../models/note.model';
import { TrainerConfig, TrainerState, TrainerType } from '../models/trainer.model';

@Service()
export class TrainerService {
  private readonly config = signal<TrainerConfig>({
    type: 'note',
    mode: 'manual',
    duration: 5,
    showComposition: true,
  });

  private readonly state = signal<TrainerState>({
    currentItem: null,
    remainingTime: 0,
    running: false,
  });

  generate(type: TrainerType): Note | Chord {
    // Obtém a lista de notas ou acordes:
    const items = type === 'note' ? notes : chords;

    // Sorteia um índice:
    const index = Math.floor(Math.random() * items.length);

    if (!index) {
      return items[0];
    }

    return items[index];
  }

  start(): void {
    this.state.update((state) => ({
      ...state,
      running: true,
    }));

    this.next();
  }

  next(): void {
    const item = this.generate(this.config().type);

    this.state.update((state) => ({
      ...state,
      currentItem: item,
      remainingTime: this.config().duration,
    }));
  }
}
