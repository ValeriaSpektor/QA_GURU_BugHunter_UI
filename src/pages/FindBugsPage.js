import { expect } from '@playwright/test';

export class FindBugsPage {
  constructor(page) {
    this.page = page;
    this.url = '/find-bugs/';
    this.crashBugButton = 'button:has-text("Crash")';
    this.contentBugButton = 'button:has-text("Content")';
    this.submitButton = 'button:has-text("Submit")';
    this.overlay = '.academy-bug-overlay';
  }

  async open() {
    console.log('Opening Find Bugs page...');
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async submitCrashBug() {
    console.log('Submitting crash bug...');
    const crashButton = this.page.locator(this.crashBugButton);
    await crashButton.waitFor({ state: 'visible', timeout: 10000 });
    await crashButton.click();
    const submitButton = this.page.locator(this.submitButton);
    await submitButton.waitFor({ state: 'visible', timeout: 10000 });
    await submitButton.click();
  }

  async verifyCrashBug() {
    console.log('Verifying crash bug...');
    const overlay = this.page.locator(this.overlay);
    await overlay.waitFor({ state: 'visible', timeout: 10000 });
    await expect(overlay).toContainText('You found a crash bug');
  }

  async submitContentBug() {
    console.log('Submitting content bug...');
    const contentButton = this.page.locator(this.contentBugButton);
    await contentButton.waitFor({ state: 'visible', timeout: 10000 });
    await contentButton.click();
    const submitButton = this.page.locator(this.submitButton);
    await submitButton.waitFor({ state: 'visible', timeout: 10000 });
    await submitButton.click();
  }

  async verifyContentBug() {
    console.log('Verifying content bug...');
    const overlay = this.page.locator(this.overlay);
    await overlay.waitFor({ state: 'visible', timeout: 10000 });
    await expect(overlay).toContainText('You found a content bug');
  }
}
