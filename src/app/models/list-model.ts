import { CardModel } from './card-model';

export interface ListModel {
  id: string;
  position: number;
  content: CardModel[];
}
