import { IItemResponse } from '../models/IItemResponse';

export const ITEM_DETAIL: IItemResponse = {
  author: { name: 'Francisco', lastname: 'López' },
  item: {
    id: 'MLA897952360',
    categoryId: 'MLA429731',
    title: 'Teléfono Inalámbrico Noblex Ndt4000tw Negro',
    price: { currency: 'ARS', amount: 4990, decimals: 0 },
    picture: 'http://http2.mlstatic.com/D_987389-MLA33000989142_112019-O.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 5,
    description: 'Luego de más de 80 años de trayectoria, Noblex mantiene su nivel de excelencia y calidad en cada uno de los productos de su amplia gama, ideados para brindar bienestar y comodidad a las personas. Gracias a esto, tu teléfono Noblex te ofrecerá gran utilidad en la vida cotidiana: comunicarte con las personas que querés, será cómodo y muy sencillo.\n\nComodidad y practicidad\nSu función manos libres facilitará tu rutina: conversá cuando quieras sin dejar de hacer otras actividades.'
  },
  categories: [
    'Celulares y Teléfonos',
    'Telefonía Fija e Inalámbrica',
    'Teléfonos'
  ]
};
