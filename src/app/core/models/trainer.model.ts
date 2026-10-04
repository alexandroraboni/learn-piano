/**
 * Representa a configuração e o estado do treinamento.
 */

import { Chord } from './chord.model';
import { Note } from './note.model';

export type TrainerType = 'note' | 'chord';

export type TrainerMode = 'manual' | 'automatic';

export type TrainerItem = Note | Chord;

export type TrainerConfig = {
  type: TrainerType;
  mode: TrainerMode;
  duration: number;
  showComposition: boolean;
};

export type TrainerState = {
  currentItem: TrainerItem | null;
  remainingTime: number;
  running: boolean;
};
