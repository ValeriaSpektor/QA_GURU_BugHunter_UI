import { expect } from '@playwright/test';

export class ProductPage {
  constructor(page) {
    this.page = page;
    this.manufacturerLink = 'a:has-text("Underground")';
    this.currencyDropdown = '#ec_currency_conversion';
    this.overlay = '.academy-bug-overlay';
  }

  async open(productSlug) {
    console.log(`Opening Product page: ${productSlug}`);
    await this.page.goto(`/store/${productSlug}/`);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyManufacturerLinkBug() {
    console.log('Verifying manufacturer link bug...');
    const manufacturerLink = this.page.locator(this.manufacturerLink);
    await manufacturerLink.waitFor({ state: 'visible', timeout: 10000 });
    await manufacturerLink.click();
    const overlay = this.page.locator(this.overlay);
    await overlay.waitFor({ state: 'visible', timeout: 10000 });
    await expect(overlay).toContainText('You found a manufacturer link bug');
  }

  async selectCurrency(currency) {
    console.log(`Selecting currency: ${currency}`);
    const dropdown = this.page.locator(this.currencyDropdown);
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.selectOption(currency);
  }

  async verifyCurrencyBug() {
    console.log('Verifying currency bug...');
    const overlay = this.page.locator(this.overlay);
    await overlay.waitFor({ state: 'visible', timeout: 10000 });
    await expect(overlay).toContainText('You found a currency selection bug');
  }
}
