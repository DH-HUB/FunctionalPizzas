import { simulateProduction, estimateTotalProductionTime } from "../services/production-service";


test('Estimate total production time', () => {
    expect(estimateTotalProductionTime(5)).toBeCloseTo(90, 1); // 5 pizzas = 90 secondes
  });  
  

test('Simulate production', async () => {
  await simulateProduction(["pizza1", "pizza2", "pizza3"]);
}, 25000); 


