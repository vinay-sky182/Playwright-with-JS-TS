import fs from 'fs';
import { parse } from 'csv-parse/sync';

export interface RegData {
    firstName: string;
    lastName: string;
    telephone: string;
    password: string;
    subscribeNewsletter: string;
}

export const regData = parse(fs.readFileSync('./data/register.csv', 'utf-8'), {
    columns: true, skip_empty_lines: true
});

// Aap yahan multiple files bhi handle kar sakte hain
// export const loginData = parse(...)