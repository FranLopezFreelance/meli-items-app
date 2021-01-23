export interface IItemResponse {
  author: {
    name: string,
    lastname: string;
  };
  item: Item;
  categories: string[];
}

export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shiping: boolean;
  sold_quantity: number;
  description: string;
}
