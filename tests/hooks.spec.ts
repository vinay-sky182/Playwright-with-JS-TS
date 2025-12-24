import { test, expect } from '@playwright/test';

test.beforeAll('global pre-condition', async () => {
    console.log('beforeAll -- server is up and running');
    console.log('beforeAll -- chrome browser is open');
});

test.beforeEach('pre-condition before each test', async () => {
    console.log('beforeEach -- user is logged in !!');
});

test('Home page Test', async () => {
    console.log('home page test');
});
test('Search product Test', async () => {
    console.log('search product test');
});
test('Cart Test', async () => {
    console.log('cart test');
});


test.afterEach('post-condition after each test', async () => {
    console.log('beforeEach -- user is logged out !!');
});

test.afterAll('global post-condition', async () => {
    console.log('afterAll -- close browser');
    console.log('afterAll -- delete data');
});

