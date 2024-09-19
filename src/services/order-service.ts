import { orders } from "../data/orders";
import { Order } from '../types/order-types'; 
<<<<<<< HEAD
import { pizzas } from "../data/pizzas";  
import { orders } from "../data/orders";
=======
import { pizzaNames } from './pizza-names'; 
>>>>>>> 22b043c (programme)


// 7. Quel est le montant moyen des commandes de pizzas ?
export const calculateAverageOrderAmount = (): number => {
  const total = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  return orders.length === 0 ? 0 : total / orders.length;
};

// 11. En moyenne, combien de pizzas contient une commande ?
export const calculateAveragePizzasPerOrder = (): number => {
  const totalPizzas = orders.reduce((sum, order) => sum + order.items.reduce((subSum, item) => subSum + item.quantity, 0), 0);
  return orders.length === 0 ? 0 : totalPizzas / orders.length;
};

// 12. Quels ingrédients n'ont pas été utilisés dans les pizzas vendues ?
import { pizzas } from "../data/pizzas";

export const findUnusedIngredients = (): string[] => {
  const soldPizzaIds = new Set(orders.flatMap((order) => order.items.map((item) => item.pizzaId)));
  const soldIngredients = pizzas
    .filter((pizza) => soldPizzaIds.has(pizza.id))
    .flatMap((pizza) => pizza.ingredients);

  const allIngredients = new Set(pizzas.flatMap((pizza) => pizza.ingredients));
  const usedIngredients = new Set(soldIngredients);

  return Array.from(allIngredients).filter((ingredient) => !usedIngredients.has(ingredient));
};

// 13. Combien de recettes de pizzas ont été commandées une seule fois ?
export const countPizzasOrderedOnce = (): number => {
  const pizzaOrderCount = orders.flatMap((order) => order.items)
    .reduce((countMap, item) => {
      countMap[item.pizzaId] = (countMap[item.pizzaId] || 0) + 1;
      return countMap;
    }, {} as Record<string, number>);

  return Object.values(pizzaOrderCount).filter((count) => count === 1).length;
};

// 14. Combien de minutes dure en moyenne la préparation d'une commande ?
export const calculateAveragePreparationTime = (): number => {
  const totalPrepTime = orders.reduce((sum, order) => {
    const orderTime = new Date(order.readyAt).getTime() - new Date(order.orderedAt).getTime();
    return sum + orderTime / 60000; // Convertir en minutes
  }, 0);
  return orders.length === 0 ? 0 : totalPrepTime / orders.length;
};

// 15. Quel est le montant moyen des frais de livraison pour les commandes de pizzas à emporter ?
export const calculateAverageDeliveryCostForTakeAway = (): number => {
  const takeAwayOrders = orders.filter((order) => order.orderType === "Delivery" && order.deliveryCosts);
  const totalDeliveryCosts = takeAwayOrders.reduce((sum, order) => sum + (order.deliveryCosts || 0), 0);
  return takeAwayOrders.length === 0 ? 0 : totalDeliveryCosts / takeAwayOrders.length;
};

// 16. Comment créer un système de recommandations de pizzas basé sur les commandes passées, 
//en utilisant un algorithme d'association entre les ingrédients des pizzas commandées ensemble ?

// Pour introduit un système de recommandations basé sur des associations entre les ingrédients des pizzas souvent commandées ensemble. 
//L'idée est de proposer des pizzas similaires ou complémentaires aux pizzas fréquemment commandées par les clients.


//recommander des pizzas basées sur l'historique des commandes
<<<<<<< HEAD

export function recommendPizzasBasedOnOrderHistory(): { [pizza: string]: string[] } {
  const pizzaPairs: { [pizza: string]: Set<string> } = {}; 

  // Analyse des commandes pour trouver des associations entre pizzas commandées ensemble
  orders.forEach((order) => {
      const pizzasInOrder = order.items.map(item => item.pizzaId); 
      pizzasInOrder.forEach((pizza1Id: string) => {
          if (!pizzaPairs[pizza1Id]) {
              pizzaPairs[pizza1Id] = new Set();
          }
          pizzasInOrder.forEach((pizza2Id: string) => {
              if (pizza1Id !== pizza2Id) {
                  pizzaPairs[pizza1Id].add(pizza2Id); // Associer les pizzas commandées ensemble
=======
export function recommendPizzasBasedOnOrderHistory(): { [pizza: string]: string[] } {
  const pizzaPairs: { [pizza: string]: Set<string> } = {}; 
  
  //analyse des commandes pour trouver des associations entre pizzas commandées ensemble
  orders.forEach((order) => {
      const pizzas = order.items.map(item => item.pizzaId); 
      pizzas.forEach((pizza1: string) => {
          if (!pizzaPairs[pizza1]) {
              pizzaPairs[pizza1] = new Set();
          }
          pizzas.forEach((pizza2: string) => {
              if (pizza1 !== pizza2) {
                  pizzaPairs[pizza1].add(pizza2); //associer les pizzas commandées ensemble
>>>>>>> 22b043c (programme)
              }
          });
      });
  });

<<<<<<< HEAD
  // Convertir les id en noms de pizzas
  const result: { [pizza: string]: string[] } = {};
  Object.keys(pizzaPairs).forEach(pizza1Id => {
      const pizza1 = pizzas.find(pizza => pizza.id === pizza1Id);
      if (pizza1) {
          result[pizza1.name] = Array.from(pizzaPairs[pizza1Id]).map(pizza2Id => {
              const pizza2 = pizzas.find(pizza => pizza.id === pizza2Id);
              return pizza2 ? pizza2.name : "Pizza inconnue";
          });
      }
=======
  // Convertir  en tableaux
  const result: { [pizza: string]: string[] } = {};
  Object.keys(pizzaPairs).forEach(pizza => {
      result[pizza] = Array.from(pizzaPairs[pizza]);
>>>>>>> 22b043c (programme)
  });

  return result;
}
