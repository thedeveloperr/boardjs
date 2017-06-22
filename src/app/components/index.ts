export * from './list';
export * from './board';
export * from './card';

import * as C from './';


export const COMPONENTS = [
  C.DialogboxComponent,
  C.EditDialogboxComponent,
  C.AddCardDialogboxComponent,
  C.BoardComponent,
  C.ListComponent,
  C.CardComponent,
  C.EditCardDialogboxComponent
];
export const ENTRY_COMPONENTS = [
  C.DialogboxComponent,
  C.AddCardDialogboxComponent,
  C.EditDialogboxComponent,
  C.EditCardDialogboxComponent
]
