import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test', // Указывает директорию для тестов
  use: {
    headless: true, // Запуск в headless-режиме
    screenshot: 'only-on-failure', // Скриншоты при падении теста
    video: 'retain-on-failure', // Видео при падении теста
  },
});
