
    async function openPage(path: string) {
        await page.goto('/'+`${path}`);
    }

export default openPage; 