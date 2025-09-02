import { Admin } from "./admin";

export interface WHO extends Admin {

    covidVaccination(): void;
}

/* 
c -c : extends
c - i : impliments
i - - : extends
*/