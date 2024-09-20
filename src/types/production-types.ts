export type PizzaStatus =
  | 'en attente de préparation'
  | 'préparation en cours'
  | 'en attente de cuisson'
  | 'cuisson en cours'
  | 'prête';

export interface PizzaProduction {
  pizzaId: string;            
  status: PizzaStatus;       
  startTime: Date;// l'heure de début de l'étape actuelle
  estimatedEndTime: Date; //l'heure estimée de fin de l'étape
}

