/*Definer en compareSort funktion, der tager en compare funktion som parameter og returnerer en sort funktion, der bruger denne compare funktion til at sortere et array af strenge.

Brug compareSort funktionen til at generere en lenSort og en ignoreCaseSort funktion, der bruger compareLen hhv. compareIgnoreCase fra opgave 2.3.*/
function compareSort(compareFunction) {
    // Tjek om compareFunction er en funktion
    if (typeof compareFunction !== "function") {
        throw new Error("Sammenligningsfunktionen skal være en funktion.");
    }

    return function (array) {
        return array.slice().sort(compareFunction);
    };
}

// Sammenligningsfunktionen compareLen
function compareLen(a, b) {
    return a.length - b.length;
}

// Sammenligningsfunktionen compareIgnoreCase
function compareIgnoreCase(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}

// Brug compareSort til at generere lenSort og ignoreCaseSort funktioner
let lenSort = compareSort(compareLen);
let ignoreCaseSort = compareSort(compareIgnoreCase);

// Eksempel på brug af lenSort og ignoreCaseSort
let strings = ["Banana", "apple", "cherry", "Date", "Fig"];

console.log("Original array:", strings);
console.log("Sorteret efter længde:", lenSort(strings));
console.log("Sorteret uden hensyntagen til store/små bogstaver:", ignoreCaseSort(strings));

