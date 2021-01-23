export interface ISearchResponse {
  author: {
    name: string,
    lastname: string;
  };
  items: Item[];
  categories: string[];
}

export interface Item {
  id: string;
  title: string;
  price: {
    currency: string,
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}
