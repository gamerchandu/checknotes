import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

const TODO_ITEMS = ['buy flat', 'buy car', 'goog health', 'best wealth'];

test.describe('New todo', () => {
    test.describe.configure({retries: 2, mode: 'serial'});
    test('add new todos', async ({page}) => {
   
        const inputField = await page.getByPlaceholder('What needs to be done?');
        
        await inputField.fill(TODO_ITEMS[0]);
        await inputField.press('Enter');

        await expect(page.getByTestId('todo-count')).toHaveText('1 item left');
        await inputField.fill(TODO_ITEMS[1]);
        await inputField.press('Enter');
        await inputField.fill(TODO_ITEMS[2]);
 
        await inputField.press('Enter');
      
        await page.screenshot({path: '1.png'});

        await checkNumberOfTodosInLocalStorage(page, 3);

        await page.getByTestId('todo-item').nth(0).getByRole('checkbox').click();
        await page.screenshot({path: '2.png'});

        
    });

    

    // test('mark all as completed', async ({page}) => {
    //     await page.getByRole('checkbox',{name: 'Toggle Todo'}).click();
    // });
});

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
    return await page.waitForFunction(e => {
        return JSON.parse(localStorage['react-todos']).length === e;
    }, expected );
     
 
}
