import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  reporter: [['list'], ['allure-playwright']],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://academybugs.com',
    timeout: 60000, // Increased timeout for slow-loading pages
  },
});
