import { 
  countDifferentBases, 
  countTomatoBasePizzas, 
  countUniqueIngredients, 
  findUniqueIngredient, 
  countPizzasWithLessThan4Ingredients, 
  findUnsoldPizzas, 
  calculateAveragePriceOfTomatoPizzas, 
  countVegetarianPizzas, 
  findMostOrderedPizza 
} from "./services/pizza-service";

import { 
  calculateAverageOrderAmount, 
  calculateAveragePizzasPerOrder, 
  findUnusedIngredients, 
  countPizzasOrderedOnce, 
  calculateAveragePreparationTime, 
  calculateAverageDeliveryCostForTakeAway,
  recommendPizzasBasedOnOrderHistory 
} from "./services/order-service";

// Fonction pour obtenir les résultats sous forme de chaîne de caractères
export const getResultsAsString = (): string => {
  let result = "=== Gestion de la Pizzeria ===\n";

  result += `1. Combien de bases de pizzas différentes compte le menu ?\nRéponse: ${countDifferentBases()}\n\n`;
  result += `2. Combien de recettes de pizzas sont à base de tomate ?\nRéponse: ${countTomatoBasePizzas()}\n\n`;
  result += `3. Combien d'ingrédients sont proposés ?\nRéponse: ${countUniqueIngredients()}\n\n`;
  result += `4. Quel ingrédient est présent dans une seule recette ?\nRéponse: ${findUniqueIngredient().join(", ")}\n\n`;
  result += `5. Combien de recettes de pizzas comptent moins de 4 ingrédients ?\nRéponse: ${countPizzasWithLessThan4Ingredients()}\n\n`;
  result += `6. Quelle recette de pizza n'a jamais été vendue ?\nRéponse: ${findUnsoldPizzas().map(pizza => pizza.name).join(", ")}\n\n`;
  result += `7. Quel est le montant moyen des commandes de pizzas ?\nRéponse: ${calculateAverageOrderAmount().toFixed(2)} EUR\n\n`;
  result += `8. Quel est le prix moyen des pizzas à base de tomate ?\nRéponse: ${calculateAveragePriceOfTomatoPizzas().toFixed(2)} EUR\n\n`;
  result += `9. Combien de recettes de pizzas ne contiennent pas de viande ?\nRéponse: ${countVegetarianPizzas()}\n\n`;
  result += `10. Quelle recette de pizza a été la plus vendue ?\nRéponse: ${findMostOrderedPizza()?.name || "Aucune pizza vendue"}\n\n`;
  result += `11. En moyenne, combien de pizzas contient une commande ?\nRéponse: ${calculateAveragePizzasPerOrder().toFixed(2)} pizzas\n\n`;
  result += `12. Quels ingrédients n'ont pas été utilisés dans les pizzas vendues ?\nRéponse: ${findUnusedIngredients().join(", ")}\n\n`;
  result += `13. Combien de recettes de pizzas ont été commandées une seule fois ?\nRéponse: ${countPizzasOrderedOnce()}\n\n`;
  result += `14. Combien de minutes dure en moyenne la préparation d'une commande ?\nRéponse: ${calculateAveragePreparationTime().toFixed(2)} minutes\n\n`;
  result += `15. Quel est le montant moyen des frais de livraison pour les commandes de pizzas à emporter ?\nRéponse: ${calculateAverageDeliveryCostForTakeAway().toFixed(2)} EUR\n\n`;

  // Ajout des recommandations de pizzas
  const pizzaRecommendations = recommendPizzasBasedOnOrderHistory();
  result += `Recommandations de pizzas basées sur l'historique des commandes :\n`;
  Object.keys(pizzaRecommendations).forEach(pizza => {
    result += `Si vous avez aimé la pizza ${pizza}, vous pourriez aimer : ${pizzaRecommendations[pizza].join(', ')}\n`;
  });

  return result;
};

//transformation des résultats, division en lignes, nettoyage
const processResults = (results: string): string[] => {
  return results.split('\n').filter(line => line.length > 0).map(line => line.trim());
};

// affichage des résult
const display = (formattedResults: string[]): void => {
  formattedResults.forEach(result => {
    console.log(result);
  });
};

// Pipeline 
const main = () => {
  const rawResults = getResultsAsString(); //récupère la chaîne des résultats
  const formattedResults = processResults(rawResults); //transfore
  display(formattedResults); 
};

main();
