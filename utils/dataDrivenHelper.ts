import { test } from '@playwright/test';
import { regData } from '../utils/testData';

// 1. Pehle data ka structure define karein
interface RegData {
    firstName: string;
    lastName: string;
    telephone: string;
    password: string;
    subscribeNewsletter: string;
}

// Ye function loop chalayega aur data test ko pass karega
export function forEachUser(testCallback: (user: any) => Promise<void>) {
    for (const user of (regData as RegData[])) {
        test(`Test for user: ${user.firstName}`, async () => {
            await testCallback(user);
        });
    }
}