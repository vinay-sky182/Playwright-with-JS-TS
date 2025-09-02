import { UNHC } from "./iUNHC";
import { WHO } from "./iWHO";

export interface USMedical extends WHO, UNHC {

    // in java 

    // only method decleration - no method body - no static methods, no default methods - abstract methods

    physio(): void;
    cardio(): void;
    emergency(): void;

    // hiding the implimentation - abstraction
    // hiding the important features - encaptulation
}