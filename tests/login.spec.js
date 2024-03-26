import {  test, expect } from '@playwright/test';

test('login into app', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page.url()).toEqual('https://the-internet.herokuapp.com/login');
    await expect(page.getByRole('heading','Login Page').first()).toHaveText('Login Page');
});