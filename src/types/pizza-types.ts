export type Pizza = {
    id: string;
    name: string;
    price: number;
    base: "Tomate" | "Crème" | "Nature";
    ingredients: string[];
  };
  
  export type OrderItem = {
    pizzaId: string;
    quantity: number;
    price: number;
    amount: number;
  };
  
  export type Order = {
    id: string;
    orderedAt: string;
    readyAt: string;
    orderType: "Delivery" | "Take Away" | "For Here";
    status: "Completed";
    amount: number;
    totalAmount: number;
    items: OrderItem[];
    deliveryCosts?: number;
  };
  