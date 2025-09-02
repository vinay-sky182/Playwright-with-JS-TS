import { IndianMedical } from "./iIndianMedical.ts";
import { UKMedical } from "./iUKMedical.ts";
import { USMedical } from "./iUSMedical.ts";
import { Medical } from "./medical.ts";

export class MaxHospital extends Medical implements USMedical, UKMedical, IndianMedical {

    // in java we can not create a parent class of an interface.

    // Admin class
    billing(): void {
        console.log('max -- billing');
    }

    // UNHC
    publishMedicalNews(): void {
        console.log('max -- publish medical news');
    }

    // WHO
    covidVaccination(): void {
        console.log('max -- covid vaccination');
    }

    // comman
    emergency(): void {
        console.log('max -- emergency');
    }

    // US
    physio(): void {
        console.log('max -- physio');
    }
    cardio(): void {
        console.log('max -- cardio');
    }

    // UK
    oncology(): void {
        console.log('max -- oncology');
    }
    pedia(): void {
        console.log('max -- pedia');
    }
    dental(): void {
        console.log('max -- dental');
    }

    // Indian
    gestro(): void {
        console.log('max -- gestro');
    }
    ent(): void {
        console.log('max -- ent');
    }

    // Max: individual
    opt(): void {
        console.log('max -- opt');
    }

    // override

    override research(): void {
        console.log('max hospital medical - research');
    }
}