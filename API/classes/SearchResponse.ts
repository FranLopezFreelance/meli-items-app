export class SearchResponse {
  author: Author;
  category_id?: string;
  categories: string[];
  items: Item[];

  constructor(data: any){
    this.author = {name: 'Francisco', lastname: 'López'};
    this.categories = [];
    this.items = data.results.map((result: any) => {
      if(!this.category_id){
        this.category_id = result.category_id;
      }
      const item: Item = {
        id: result.id,
        title: result.title || 'Sin nombre',
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimals: 0
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping
      };
      return item;
    });
  }

  setCategories(data: any) {
    data.path_from_root.forEach((category: any) => {
      this.categories.push(category.name);
    });
    if (data.children_categories.length) {
      data.children_categories.forEach((category: any) => {
        this.categories.push(category.name);
      });
    }
  }
}


interface Author {
  name: string,
  lastname: string;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface Price {
  currency: string,
  amount: number;
  decimals: number;
}

