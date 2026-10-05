import { Service, signal } from '@angular/core';
import { chords } from '../data/chords.data';
import { notes } from '../data/notes.data';
import { TrainerConfig, TrainerItem, TrainerState, TrainerType } from '../models/trainer.model';

@Service()
export class TrainerService {
  // Entradas do usuário:
  private readonly config = signal<TrainerConfig>({
    type: 'chord',
    mode: 'manual',
    duration: 5,
    showComposition: true,
  });

  readonly trainerConfig = this.config.asReadonly();

  setConfig(config: TrainerConfig): void {
    this.config.set(config);
  }

  // Momento atual do treinamento:
  private readonly state = signal<TrainerState>({
    currentItem: null,
    remainingTime: 0,
    running: false,
  });

  readonly trainerState = this.state.asReadonly();

  private getItemKey(item: TrainerItem): string {
    return 'symbol' in item ? item.symbol : item.name;
  }

  // TrainerItem: type para 'Note | Chord':
  generate(type: TrainerType, currentItem: TrainerItem | null): TrainerItem {
    // Obtém a lista de notas ou acordes:
    const items = type === 'note' ? notes : chords;

    // Se tem apenas uma nota/acorde retorna ele:
    if (items.length === 1) {
      return items[0];
    }

    // Se existir uma nota/acorde remove ele da lista e retorna a lista sem ele, caso não exista retorna a lista completa:
    const availableItems = currentItem
      ? items.filter((item) => this.getItemKey(item) !== this.getItemKey(currentItem))
      : items;

    // Sorteia um índice:
    const index = Math.floor(Math.random() * availableItems.length);

    return availableItems[index];
  }

  start(): void {
    this.state.update((state) => ({
      ...state,
      running: true,
    }));

    this.next();
  }

  next(): void {
    const currentItem = this.state().currentItem;

    const item = this.generate(this.config().type, currentItem);

    this.state.update((state) => ({
      ...state,
      currentItem: item,
      remainingTime: this.config().duration,
    }));
  }
}
