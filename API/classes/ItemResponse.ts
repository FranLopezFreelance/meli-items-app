export class ItemResponse {
  author: Author;
  categories: string[];
  item: Item;

  constructor(data: any) {
    this.author = {name: 'Francisco', lastname: 'López'};
    this.categories = [];
    this.item = {
      id: data.id,
      category_id: data.category_id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: 0
      },
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      picture: data.pictures[0].url,
    };
  }

  setDescription(description: string): void {
    this.item.description = description;
  }

  setCategories(data: any): void {
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
  name: string;
  lastname: string;
}

interface Item {
  id: string;
  category_id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description?: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
