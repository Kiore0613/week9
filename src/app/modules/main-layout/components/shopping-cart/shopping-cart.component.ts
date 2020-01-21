import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: any = [];
  test = [
    {
      category: { id: 23, slug: 'beauty-baby', name: 'Beauty & Baby' },
      description: 'Sour Candy',
      image: { url: 'https://picsum.photos/200' },
      master: {
        price: '3.99'
      },
      name: 'Warheads Smashups',
      slug: 'warheads-smashups'
    },
    {
      category: { id: 23, slug: 'beauty-baby', name: 'Beauty & Baby' },
      description: 'Sour Candy',
      image: { url: 'https://picsum.photos/200' },
      master: {
        price: '3.99'
      },
      name: 'Warheads Smashups',
      slug: 'warheads-smashups'
    },
    {
      category: { id: 23, slug: 'beauty-baby', name: 'Beauty & Baby' },
      description: 'Sour Candy',
      image: { url: 'https://picsum.photos/200' },
      master: {
        price: '3.99'
      },
      name: 'Warheads Smashups',
      slug: 'warheads-smashups'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.products = this.test;
  }
}
