import { Pizza } from "../types/pizza-types";
import { pizzas } from "../data/pizzas";

// 1. Combien de bases de pizzas différentes compte le menu ?
export const countDifferentBases = (): number => {
  const bases = pizzas.map((pizza) => pizza.base);
  return new Set(bases).size;
};

// 2. Combien de recettes de pizzas sont à base de tomate ?
export const countTomatoBasePizzas = (): number => {
  return pizzas.filter((pizza) => pizza.base === "Tomate").length;
};

// 3. Combien d'ingrédients sont proposés ?
export const countUniqueIngredients = (): number => {
  const ingredients = pizzas.flatMap((pizza) => pizza.ingredients);
  return new Set(ingredients).size;
};

// 4. Quel ingrédient est présent dans une seule recette ?
export const findUniqueIngredient = (): string[] => {
  const ingredientCount = pizzas.flatMap((pizza) => pizza.ingredients)
    .reduce((countMap, ingredient) => {
      countMap[ingredient] = (countMap[ingredient] || 0) + 1;
      return countMap;
    }, {} as Record<string, number>);

  return Object.entries(ingredientCount)
    .filter(([_, count]) => count === 1)
    .map(([ingredient]) => ingredient);
};

// 5. Combien de recettes de pizza comptent moins de 4 ingrédients ?
export const countPizzasWithLessThan4Ingredients = (): number => {
  return pizzas.filter((pizza) => pizza.ingredients.length < 4).length;
};

// 6. Quelle recette de pizza n'a jamais été vendue ?
import { orders } from "../data/orders";

export const findUnsoldPizzas = (): Pizza[] => {
  const soldPizzaIds = new Set(orders.flatMap((order) => order.items.map((item) => item.pizzaId)));
  return pizzas.filter((pizza) => !soldPizzaIds.has(pizza.id));
};

// 8. Quel est le prix moyen des pizzas à base de tomate ?
export const calculateAveragePriceOfTomatoPizzas = (): number => {
  const tomatoPizzas = pizzas.filter((pizza) => pizza.base === "Tomate");
  const total = tomatoPizzas.reduce((sum, pizza) => sum + pizza.price, 0);
  return tomatoPizzas.length === 0 ? 0 : total / tomatoPizzas.length;
};

// 9. Combien de recettes de pizzas ne contiennent pas de viande ?
export const countVegetarianPizzas = (): number => {
  const meatIngredients = ["Jambon Cru", "Jambon Cuît", "Saucisson Piquant"];
  return pizzas.filter((pizza) =>
    pizza.ingredients.every((ingredient) => !meatIngredients.includes(ingredient))
  ).length;
};

// 10. Quelle recette de pizza a été la plus vendue ?
export const findMostOrderedPizza = (): Pizza | undefined => {
  const pizzaOrderCount = orders.flatMap((order) => order.items)
    .reduce((countMap, item) => {
      countMap[item.pizzaId] = (countMap[item.pizzaId] || 0) + item.quantity;
      return countMap;
    }, {} as Record<string, number>);

  const mostOrderedPizzaId = Object.entries(pizzaOrderCount).reduce((maxId, [pizzaId, count]) =>
    !maxId || count > pizzaOrderCount[maxId] ? pizzaId : maxId, "");

  return pizzas.find((pizza) => pizza.id === mostOrderedPizzaId);
};
