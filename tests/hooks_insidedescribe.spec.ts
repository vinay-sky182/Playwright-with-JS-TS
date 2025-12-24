import { test, expect } from '@playwright/test'

test.describe('login feature', () => {

    // it will run before each testcase for all the testcases
    test.beforeAll('global pre-condition', async () => {
        console.log('setup the system');
    });

    test.afterAll('global post-condition', async () => {
        console.log('tear down the system');
    });

    test.beforeEach('pre-condition before each test', async () => {
        console.log('open the url');
    });

    test.afterEach('post-condition after each test', async () => {
        console.log('close the page');
    });


    test('Home page Test', async () => {
        console.log('home page test');
    });
    test('Search product Test', async () => {
        console.log('search product test');
    });
});


/* 

Assumption: नीचे की गणना single worker (workers=1) पर है और हर hook उसी scope में defined है जहाँ वो लागू होता है (describe-level hooks describe के भीतर, file-level hooks top-level)। अगर आप parallel workers चला रहे हैं तो हर worker के लिए ये counts multiply हो जाएंगे।

5 testcases — हर एक अपने अलग describe में (5 describe, हर describe में 1 test)
describe-level hooks (प्रति describe): beforeAll = 1, afterAll = 1, beforeEach = 1, afterEach = 1
Total (पूरे फ़ाइल पर): beforeAll = 5, afterAll = 5, beforeEach = 5, afterEach = 5

5 testcases — सब एक ही describe के अंदर
beforeAll = 1, afterAll = 1, beforeEach = 5, afterEach = 5


5 testcases — 2 describe में (उदाहरण: describe A में 2 test, describe B में 3 test)
beforeAll = 2 (एक-एक प्रति describe), afterAll = 2
beforeEach = 5 (2 in A + 3 in B), afterEach = 5
(per-describe breakdown: A.beforeEach runs 2 बार, B.beforeEach runs 3 बार)

2 testcases एक describe में, बाकी 3 बिना describe (top-level)
describe-level: beforeAll = 1, afterAll = 1 (for that describe)
top-level hooks (अगर defined हैं): beforeAll = 1, afterAll = 1 (for the file)
beforeEach total = 5 (2 inside describe + 3 top-level), afterEach total = 5


5 testcases बिना किसी describe के (सब top-level)
top-level beforeAll = 1, top-level afterAll = 1, beforeEach = 5, afterEach = 5


नोट्स:
Playwright में default workers >1 होने पर

हर worker अपना independent lifecycle चलाता है — इसलिए beforeAll/afterAll (और describe-level hooks) हर worker में चलेंगे; 
कुल run-count = above count × number_of_workers.

यदि आप hooks सिर्फ एक बार per run चाहिए तो use single worker (npx playwright test --workers=1) या globalSetup/globalTeardown.

*/