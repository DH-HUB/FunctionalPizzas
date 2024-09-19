import pizzasData from '../../data/pizzas.json'; 
import { Pizza } from '../types/pizza-types';    

const pizzas: Pizza[] = pizzasData as Pizza[];  

export { pizzas };
