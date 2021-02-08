import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface IProduct {
  id: number;
  name: string;
  active: boolean;
  expirationDate: string;
  description: string;
  type: string;
  features?: string[];
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: IProduct[] = [{
    id: generateId(),
    name: 'Iphone X',
    active: false,
    description: 'Used - Like Brand New',
    expirationDate: '30/03/2022',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'Samsung S20',
    active: false,
    description: 'Brand New',
    expirationDate: '20/02/2022',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'Poco X3 NFC',
    active: false,
    description: 'Brand New',
    expirationDate: '30/04/2022',
    type: 'mobile'
  },
    {
      id: generateId(),
      name: 'Redmi Note 9 Pro',
      active: false,
      description: 'Used - Very Good',
      expirationDate: '15/08/2021',
      type: 'mobile'
    }, {
      id: generateId(),
      name: 'Asus RoG',
      active: false,
      description: 'Brand New',
      expirationDate: '20/07/2021',
      type: 'laptop'
    },
    {
      id: generateId(),
      name: 'Samsung S6 Lite',
      active: false,
      description: 'Used - Like Brand New',
      expirationDate: '21/12/2021',
      type: 'tablet'
    }, {
      id: generateId(),
      name: 'Amazon Fire 10 HD',
      active: false,
      description: 'Used - Very Good',
      expirationDate: '15/06/2021',
      type: 'tablet'
    }, {
      id: generateId(),
      name: 'Sony 32 pulgadas',
      active: false,
      description: 'Brand New',
      expirationDate: '31/10/2021',
      type: 'monitor'
    }, {
      id: generateId(),
      name: 'Lenovo Legion',
      active: false,
      description: 'Used - Like Brand New',
      expirationDate: '22/11/2021',
      type: 'laptop'
    }, {
      id: generateId(),
      name: 'Panasonic 24 pulgadas',
      active: false,
      description: 'Used - Good',
      expirationDate: '14/08/2021',
      type: 'monitor'
    }];

  constructor() {
  }
}
