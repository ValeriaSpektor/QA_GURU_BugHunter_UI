import { expect } from '@playwright/test';

export class AuthenticationPage {
  constructor(page) {
    this.page = page;
    this.forgotPasswordLink = 'a:has-text("Forgot Your Password?")';
    this.emailInput = 'input[name="email"]';
    this.retrievePasswordButton = 'button:has-text("RETRIEVE PASSWORD")';
    this.overlay = '.academy-bug-overlay';
  }

  async openForgotPassword() {
    console.log('Opening Forgot Password page...');
    await this.page.goto('/account/?ec_page=login');
    const forgotLink = this.page.locator(this.forgotPasswordLink);
    await forgotLink.waitFor({ state: 'visible', timeout: 10000 });
    await forgotLink.click();
  }

  async submitForgotPassword(email) {
    console.log(`Submitting Forgot Password for email: ${email}`);
    const emailInput = this.page.locator(this.emailInput);
    await emailInput.waitFor({ state: 'visible', timeout: 10000 });
    await emailInput.fill(email);
    const retrieveButton = this.page.locator(this.retrievePasswordButton);
    await retrieveButton.waitFor({ state: 'visible', timeout: 10000 });
    await retrieveButton.click();
  }

  async verifyForgotPasswordCrashBug() {
    console.log('Verifying Forgot Password crash bug...');
    const overlay = this.page.locator(this.overlay);
    await overlay.waitFor({ state: 'visible', timeout: 10000 });
    await expect(overlay).toContainText('You found a crash bug');
  }
}
