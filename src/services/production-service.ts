import { PizzaProduction, PizzaStatus } from "../types/production-types";
import { pizzas } from "../data/pizzas";


const preparationTime = 600;  // 1 minute = 6 secondes (fact 1/10)
const cookingTime = 3000;     // 5 minutes = 30 secondes (fact 1/10)
const maxPizzasInOven = 3;     

export async function simulateProduction(pizzasInOrder: string[]): Promise<void> {
  const productionQueue: PizzaProduction[] = pizzasInOrder.map(pizzaId => ({
    pizzaId,
    status: 'en attente de préparation',
    startTime: new Date(),
    estimatedEndTime: new Date() 
  }));

  const productionLog: PizzaProduction[] = [];

  while (productionQueue.length > 0) {
    // Simuler la préparation
    const pizzasToPrepare = productionQueue.filter(p => p.status === 'en attente de préparation');
    await updatePizzaStatus(pizzasToPrepare, 'préparation en cours', preparationTime);

    // Simuler la cuisson
    const pizzasToCook = productionQueue.filter(p => p.status === 'en attente de cuisson');
    await cookPizzasInBatches(pizzasToCook);

    // Vérifier si des pizzas sont prêtes
    const pizzasReady = productionQueue.filter(p => p.status === 'prête');
    pizzasReady.forEach(pizza => {
      console.log(`Pizza prête : ${pizza.pizzaId}`);
      productionQueue.splice(productionQueue.indexOf(pizza), 1); //retirer les pizzas prêtes
    });

    await new Promise(r => setTimeout(r, 1000)); //simuler boucle d'attente
  }

  console.log('Toutes les pizzas sont prêtes !');
}

async function updatePizzaStatus(pizzas: PizzaProduction[], newStatus: PizzaStatus, delay: number) {
  for (const pizza of pizzas) {
    console.log(`Mise à jour de ${pizza.pizzaId}: ${newStatus}`);
    pizza.status = newStatus;
    pizza.startTime = new Date();
    pizza.estimatedEndTime = new Date(pizza.startTime.getTime() + delay);
    await new Promise(r => setTimeout(r, delay)); //attendre le temps nécessaire pour chaque pizza
    if (newStatus === 'préparation en cours') {
      pizza.status = 'en attente de cuisson';
    } else if (newStatus === 'cuisson en cours') {
      pizza.status = 'prête';
    }
  }
}

async function cookPizzasInBatches(pizzas: PizzaProduction[]): Promise<void> {
  const batches = [];
  while (pizzas.length > 0) {
    const batch = pizzas.splice(0, maxPizzasInOven);
    console.log(`Cuisson d'un lot de pizzas : ${batch.map(p => p.pizzaId).join(', ')}`);
    await updatePizzaStatus(batch, 'cuisson en cours', cookingTime);
  }
}

export const estimateTotalProductionTime = (numberOfPizzas: number): number => {
    const preparationTime = 6 * numberOfPizzas; // 6 secondes par pizza pour la préparation
    const batches = Math.ceil(numberOfPizzas / 3); // Nombre de lots pour la cuisson
    const cookingTime = 30 * batches; // 30 secondes par lot de cuisson
  
    return preparationTime + cookingTime;
  };
  