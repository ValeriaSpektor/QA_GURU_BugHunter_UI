import { MainPage } from './main.page.js'; 
import { ProductDetails } from './productDetails.page.js'; 
import { BasePage } from './base.page.js';

export class App {
  constructor(page) {
    this.page = page;
    this.mainPage = new MainPage(page); 
    this.productDetails = new ProductDetails(page);
  }
}
