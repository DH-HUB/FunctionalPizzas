import {
    calculateAverageOrderAmount,
    calculateAveragePizzasPerOrder,
    findUnusedIngredients,
    countPizzasOrderedOnce,
    calculateAveragePreparationTime,
    calculateAverageDeliveryCostForTakeAway
  } from "../services/order-service";
  
  describe("Order Service Tests", () => {
    test("calculateAverageOrderAmount", () => {
      expect(calculateAverageOrderAmount()).toBeCloseTo(25.25, 2);
    });
  
    test("calculateAveragePizzasPerOrder", () => {
      expect(calculateAveragePizzasPerOrder()).toBeCloseTo(2.28, 2);
    });
  
    
  test("findUnusedIngredients", () => {
    expect(findUnusedIngredients()).toEqual(["Ananas"]); 
  });

  test("countPizzasOrderedOnce", () => {
    expect(countPizzasOrderedOnce()).toBe(0); 
  });

  test("calculateAveragePreparationTime", () => {
    expect(calculateAveragePreparationTime()).toBeCloseTo(9.01, 1); 
  });
    test("calculateAverageDeliveryCostForTakeAway", () => {
     expect(calculateAverageDeliveryCostForTakeAway()).toBeCloseTo(7.125, 2);
    });
  });
  