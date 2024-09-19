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
  } from "../services/pizza-service";
  
  describe("Pizza Service Tests", () => {
    test("countDifferentBases", () => {
      expect(countDifferentBases()).toBe(3);
    });
  
   
    test("countTomatoBasePizzas", () => {
      expect(countTomatoBasePizzas()).toBe(9); 
    });

    test("countUniqueIngredients", () => {
      expect(countUniqueIngredients()).toBe(20); 
    });

    test("findUniqueIngredient", () => {
      expect(findUniqueIngredient()).toEqual(["Roquette", "Anchois", "Gorgonzola", "Provola", "Courgettes", "Ail", "Origan", "Ananas"]); // Ajusté
    });
    test("countPizzasWithLessThan4Ingredients", () => {
      expect(countPizzasWithLessThan4Ingredients()).toBe(8);
    });
  
    test("findUnsoldPizzas", () => {
      const unsoldPizzas = findUnsoldPizzas().map((pizza) => pizza.name);
      expect(unsoldPizzas).toEqual(["Boscaiola", "Hawaï"]); 
    });
    
  
  
    test("calculateAveragePriceOfTomatoPizzas", () => {
      expect(calculateAveragePriceOfTomatoPizzas()).toBeCloseTo(9.78, 1); 
    });
  
  
    test("countVegetarianPizzas", () => {
      expect(countVegetarianPizzas()).toBe(6); 
    });

  
    test("findMostOrderedPizza", () => {
      expect(findMostOrderedPizza()?.name).toBe("Diavola"); 
    });
  });
  