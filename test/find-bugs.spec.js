import { test, expect } from '@playwright/test';
import { FindBugsPage } from '../src/pages/FindBugsPage';
import { ProductPage } from '../src/pages/ProductPage';
import { AuthenticationPage } from '../src/pages/AuthenticationPage';

test.describe('AcademyBugs UI Tests', () => {
  test('Verify crash bug on Find Bugs page', async ({ page }) => {
    const findBugsPage = new FindBugsPage(page);
    await findBugsPage.open();
    await findBugsPage.submitCrashBug();
    await findBugsPage.verifyCrashBug();
  });

  test('Verify content bug on Find Bugs page', async ({ page }) => {
    const findBugsPage = new FindBugsPage(page);
    await findBugsPage.open();
    await findBugsPage.submitContentBug();
    await findBugsPage.verifyContentBug();
  });

  test('Verify manufacturer link bug on Product page', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.open('white-underground-tshirt');
    await productPage.verifyManufacturerLinkBug();
  });

  test('Verify currency selection bug on Product page', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.open('white-underground-tshirt');
    await productPage.selectCurrency('EUR');
    await productPage.verifyCurrencyBug();
  });

  test('Verify Forgot Password crash bug in Authentication page', async ({ page }) => {
    const authPage = new AuthenticationPage(page);
    await authPage.openForgotPassword();
    await authPage.submitForgotPassword('test@test.ru');
    await authPage.verifyForgotPasswordCrashBug();
  });
});
