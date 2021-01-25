import { Router, Request, Response } from 'express';
import axios from 'axios';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { SearchResponse } from '../classes/SearchResponse';
import { ItemResponse } from '../classes/ItemResponse';

const itemsRouter = Router();

itemsRouter.get('/items', (req: Request, res: Response) => {

  const query = req.query.q;

  if (query) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;
    const urlCategories = `https://api.mercadolibre.com/categories/`;

    const getData = (urlData: string): Observable<any> => {
      return from(axios.get(encodeURI(urlData)));
    };

    const getCategories = (urlCat: string, categoryId: any): Observable<any> => {
      return from(axios.get(`${urlCat}${categoryId}`));
    };

    getData(url).pipe(
      map(meliResponse => new SearchResponse(meliResponse.data)),
      mergeMap((searchResponse: SearchResponse) => getCategories(urlCategories, searchResponse.categoryId).pipe(
        map(meliCatResponse => {
          searchResponse.setCategories(meliCatResponse.data);
          return searchResponse;
        }),
      )),
    ).subscribe(response => {
      res.json(response);
    }, (error) => {
      res.status(500).json(error);
    });
  } else {
    res.status(400).json({error: 'Faltan parámetros requeridos'});
  }
});

itemsRouter.get('/items/:id', (req: Request, res: Response) => {

  const id = req.params.id;
  if (id) {
    const urlItem = `https://api.mercadolibre.com/items/${id}`;
    const urlDescription = `https://api.mercadolibre.com/items/${id}/description`;
    const urlCategories = `https://api.mercadolibre.com/categories/`;

    const getItem = (url: string): Observable<any> => {
      return from(axios.get(url));
    };

    const getDescription = (url: string): Observable<any> => {
      return from(axios.get(url));
    };

    const getCategories = (url: string, categoryId: any): Observable<any> => {
      return from(axios.get(`${url}${categoryId}`));
    };

    getItem(urlItem).pipe(
      map(meliItemResponse => new ItemResponse(meliItemResponse.data)),
      mergeMap((item: ItemResponse) => getDescription(urlDescription).pipe(
        map(meliDescResponse => {
          item.setDescription(meliDescResponse.data.plain_text);
          return item;
        }),
        mergeMap((itemResponse: ItemResponse) => getCategories(urlCategories, itemResponse.item.categoryId).pipe(
          map(meliCatResponse => {
            itemResponse.setCategories(meliCatResponse.data);
            return itemResponse;
          }),
        )),
      )),
    ).subscribe(response => {
      res.json(response);
    }, (error) => {
      res.status(500).json(error);
    });

  } else {
    res.status(400).json({error: 'Faltan parámetros requeridos'});
  }
});

export default itemsRouter;
