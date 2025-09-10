import { test, expect } from '@playwright/test';

test('launch url', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login', { referer: 'https://www.abc.com/', timeout: 60000, waitUntil: 'load' });

    // use of referer is to tell the website from which page you have come to this page (helps in security purpose). It helps websites track where visitors are coming from. 

    // use of timeout is to increase the default timeout of 30 seconds to 60 seconds

    // waitUntil: load, use of waitUntil is to tell playwright to wait until the page is fully loaded (load),

    // waitUntil: domcontentloaded, (when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading)

    // waitUntil: networkidle, (when there are no more than 0 network connections for at least 500 ms)

    // waitUntil: 'commit' can be used to wait until the network response has been committed (headers received). This is faster than waiting for the full page load.
});