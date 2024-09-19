export type OrderItem = {
    pizzaId: string;
    quantity: number;
    price: number;
    amount: number;
  };
  
  export type Order = {
    id: string;
    orderedAt: string;    
    readyAt: string;       // Date à laquelle la commande est prête
    orderType: 'Delivery' | 'Pickup'; 
    status: 'Completed' | 'Pending' | 'Cancelled';  
    amount: number;        
    totalAmount: number;  
    items: OrderItem[];    // Liste des pizzas commandées
    deliveryCosts: number; 
  };
  