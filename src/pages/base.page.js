export class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    // Переход на указанный URL
    async navigate(url) {
      await this.page.goto(url);
    }
  
    // Клик по элементу
    async click(selector) {
      await this.page.locator(selector).click();
    }
  
    // Ввод текста в поле
    async fillInput(selector, value) {
      await this.page.locator(selector).fill(value);
    }
  
    // Выбор значения из выпадающего списка
    async selectOption(selector, value) {
      await this.page.locator(selector).selectOption(value);
    }
  
    // Получение текста элемента
    async getText(selector) {
      return await this.page.locator(selector).textContent();
    }
  
    // Проверка видимости элемента
    async isVisible(selector) {
      return await this.page.locator(selector).isVisible();
    }
  
    // Ожидание загрузки страницы
    async waitForLoad() {
      await this.page.waitForLoadState('networkidle');
    }
  
    // Закрытие модального окна
    async closeModal(buttonSelector = 'button:has-text("Close")') {
      await this.click(buttonSelector);
    }
  }
  