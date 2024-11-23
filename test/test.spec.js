import { test, expect } from '@playwright/test';
import { App } from '../src/pages/index.js';

// Константы для тестов
const URL = 'https://academybugs.com/find-bugs/';
const mistakeText = 'You found a crash bug, examine the page for';
const productName = 'Professional Suit';
const productOption = 'Green';
const currency = 'USD';

let app;

test.describe('UI Tests for Academy Bugs', () => {
  // Перед каждым тестом создаём объект App и открываем главную страницу
  test.beforeEach(async ({ page }) => {
    app = new App(page);
    await app.mainPage.open(URL);
    await app.mainPage.clickCookie('Functional only');
  });

  // Тест 1: Проверка навигации и отображения информации о баге
  test('Verify navigation and bug info', async () => {
    await app.mainPage.clickByFirstProduct();
    await app.productDetails.selectCurrency(currency);
    await expect(await app.productDetails.waitForBugInfo()).toBeTruthy();
  });

  // Тест 2: Проверка добавления комментария к продукту
  test('Select product and add comment', async () => {
    await app.mainPage.clickByFirstProduct();
    await app.productDetails.fillFieldComment('This is a test comment');
    await app.productDetails.sendComment();
    await expect(await app.productDetails.waitForBugInfo()).toBeTruthy();
  });

  // Тест 3: Выбор продукта с определёнными опциями
  test('Choose product with specific options', async () => {
    await app.mainPage.clickByProduct(productName);
    await app.productDetails.chooseDetailsOption(productOption);
    await app.productDetails.addQuantity();
    await expect(await app.productDetails.waitForBugInfo()).toBeTruthy();
  });

  // Тест 4: Изменение количества элементов на странице
  test('Change per-page setting and check bugs', async () => {
    await app.mainPage.choosePerPage(10);
    await expect(await app.mainPage.waitForBugInfo()).toBeTruthy();
  });

  // Тест 5: Проверка, что фильтр по цене не меняет URL
  test('Verify price widget does not change URL', async () => {
    await app.mainPage.clickByFirstProduct();
    const initialUrl = app.page.url();
    await app.productDetails.clickPricePointWidget();
    await expect(app.page).toHaveURL(initialUrl);
  });

  // Тест 6: Проверка описания продукта
  test('Check product description', async () => {
    await app.mainPage.clickByFirstProduct();
    await app.productDetails.waitForLoad();
    const description = await app.productDetails.getText('.product-description');
    await expect(description).toContain('Nam nec tellus a odio tincidunt auctor a ornare odio.');
  });
});
