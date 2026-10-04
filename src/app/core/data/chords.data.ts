import { Chord } from '../models/chord.model';
import { Note } from '../models/note.model';
import { notes } from './notes.data';

const getNote = (symbol: string): Note => {
  const note = notes.find((note) => note.symbol === symbol);

  if (!note) {
    throw new Error(`Nota não encontrada: ${symbol}`);
  }

  return note;
};

export const chords: Chord[] = [
  {
    name: 'C',
    notes: [getNote('C'), getNote('E'), getNote('G')],
  },
  {
    name: 'D',
    notes: [getNote('D'), getNote('F#'), getNote('A')],
  },
  {
    name: 'E',
    notes: [getNote('E'), getNote('G#'), getNote('B')],
  },
  {
    name: 'F',
    notes: [getNote('F'), getNote('A'), getNote('C')],
  },
  {
    name: 'G',
    notes: [getNote('G'), getNote('B'), getNote('D')],
  },
  {
    name: 'A',
    notes: [getNote('A'), getNote('C#'), getNote('E')],
  },
  {
    name: 'B',
    notes: [getNote('B'), getNote('D#'), getNote('F#')],
  },
];
