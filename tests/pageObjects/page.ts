import { browser } from '@wdio/globals';

    async function openPage(path) {
        await browser.url('/'+`${path}`);
    }

export default openPage; 