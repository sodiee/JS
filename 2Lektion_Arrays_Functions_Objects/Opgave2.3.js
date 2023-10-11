/*Svarende til Java’s Comparator#compare(...) metode, skal der her laves nogle compare-funktioner, der tager to parametre, og returnerer -1, 0 eller 1 alt efter om den første parameter er mindre end, lig med eller større en den anden parameter.

Der skal laves følgende compare-funktioner:
• compare(s1, s2): Sammenligner de to tekststrenge leksikografisk.

• compareLen(s1, s2): Sammenligner de to tekststrenge på deres længde

• compareIgnoreCase(s1, s2): Sammenligner to tekststrenge leksikografisk uden at tage hensyn til
store og små bogstaver

Modificer dernæst bubbleSort funktionen fra opgave 2.2, så den nu får en compare-funktion som ekstra
parameter. Sammenligningen i bubbleSort funktionen skal nu ske med denne compare-funktion.*/

function compare(s1, s2) {
    if (s1 > s2) {
        return 1;
    } else if (s1 == s2) {
        return 0;
    } else {
        return -1;
    }
}

function compareLen(s1, s2) {
    if (s1.length > s2.length) {
        return 1;
    } else if (s1.length == s2.length) {
        return 0;
    } else {
        return -1;
    }
}

function compareIgnoreCase(s1, s2) {
    if (s1.toLowerCase > s2.toLowerCase) {
        return 1;
    } else if (s1.toLowerCase == s2.toLowerCase) {
        return 0;
    } else {
        return -1;
    }
}

function bubbleSort(arr, com) {


    function swap(i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            const comparisonResult = com(arr[j], arr[j + 1]);

            if (comparisonResult === 1) {
                swap(j, j + 1);
            }
        }
    }
    console.log(arr);
}

let arr = ['hej', 'he', 'nejnej', 'farvel', 'måske'];

bubbleSort(arr, compareIgnoreCase);