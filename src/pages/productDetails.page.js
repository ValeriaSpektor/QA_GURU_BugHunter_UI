import { BasePage } from './base.page.js'; // Импорт базового класса

export class ProductDetails extends BasePage {
  constructor(page) {
    super(page);
    this.currencySelect = 'select[name="currency"]'; // Локатор выбора валюты
    this.commentField = '#comment'; // Локатор поля комментария
    this.sendCommentButton = '#submit-comment'; // Локатор кнопки отправки комментария
  }

  async selectCurrency(currency) {
    await this.selectOption(this.currencySelect, currency); // Выбрать валюту
  }

  async fillFieldComment(comment) {
    await this.fillInput(this.commentField, comment); // Ввести комментарий
  }

  async sendComment() {
    await this.click(this.sendCommentButton); // Отправить комментарий
  }
}
