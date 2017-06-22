import { CardModel } from './card-model';

export interface ListModel {
  id: string;
  name: string;
  position: number;
  content: CardModel[];
}
