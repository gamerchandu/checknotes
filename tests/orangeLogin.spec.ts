import {  test, expect } from '@playwright/test';

    test('Login into OrangeHRM site', async ({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });