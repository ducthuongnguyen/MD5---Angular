import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() {
  }

  products: Product[] = [
    {id: 1, name: 'Iphone', color: 'black'},
    {id: 2, name: 'Samsung', color: 'red'},
    {id: 3, name: 'Xiaomi', color: 'blue'}
  ];

  ngOnInit() {
    return this.products;
  }
}
