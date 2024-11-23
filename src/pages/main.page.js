import { BasePage } from './base.page.js'; // Импорт базового класса

export class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.cookieButton = 'text=Functional only'; // Локатор кнопки cookie
    this.firstProduct = '.product:first-of-type'; // Локатор первого продукта
  }

  async open(url) {
    await this.navigate(url); // Открыть URL
  }

  async clickCookie(buttonText) {
    await this.click(`button:has-text("${buttonText}")`); // Кликнуть по кнопке Cookie
  }

  async clickByFirstProduct() {
    await this.click(this.firstProduct); // Кликнуть по первому продукту
  }
}
