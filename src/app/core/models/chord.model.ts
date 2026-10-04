import { Note } from './note.model';

/**
 * Representa um acorde e sua composição (notas).
 */

export type Chord = {
  name: string;
  notes: Note[];
};
