export interface Product {
    id: string;
    title: string;
    description: string;
    // Add other fields as needed
  }
  
  export interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
  }
  