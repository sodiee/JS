let tal = [1, 2, 3, 4, 5, -3, -100, -2];
let navne = ["Celina Kristensen", "Mathias Sode", "Lucas Holm", "Laurits Sode", "Johanne Sode", "Karoline Sode", "Jens Gade"];

/*Opgave 1: reduce() - Beregning af summen:
Givet et array af tal, brug reduce() til at beregne summen af alle tal i arrayet.*/
console.log("Sum: " + tal.reduce((acc, curr) => acc + curr));
//Sum -90
/*Opgave 2: map() - Fordobling af tal:
Givet et array af tal, brug map() til at oprette et nyt array, hvor hvert tal er fordoblet.*/
let nyeTal = tal.map((curr) => curr * 2);
console.log("Fordoblede tal: " + nyeTal);
//Fordoblede tal: 2,4,6,8,10,-6,-200,-4
/*Opgave 3: filter() - Filtrering af navne:
Givet et array af strenge (navne), brug filter() til at oprette et nyt array, der kun indeholder navne, der indeholder bogstavet 'a'.*/
let nyeNavne = navne.filter((curr) => curr.includes('a'));
console.log("Navne med A: " + nyeNavne);
//Navne med A: Celina Kristensen,Mathias Sode,Lucas Holm,Laurits Sode,Johanne Sode,Karoline Sode,Jens Gade

/*Opgave 4: reduce() - Find maksimumsværdi:
Givet et array af tal, brug reduce() til at finde den maksimale værdi i arrayet.*/
function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

console.log("Max.Værdi: " + tal.reduce(max));
//Max.Værdi: 5

/*Opgave 5: map() - Konvertering af tekst:
Givet et array af strengs, brug map() til at oprette et nyt array, hvor hver streng er konverteret til store bogstaver.*/
let nyeStrenge = navne.map((curr) => curr.toUpperCase());
console.log("Uppercase: " + nyeStrenge);
//Uppercase: CELINA KRISTENSEN,MATHIAS SODE,LUCAS HOLM,LAURITS SODE,JOHANNE SODE,KAROLINE SODE,JENS GADE

/*Opgave 6: filter() - Filtrering af ulige tal:
Givet et array af tal, brug filter() til at oprette et nyt array, der kun indeholder ulige tal.*/
let uligeTal = tal.filter((curr) => curr % 2 == 1);
console.log("Ulige tal: " + uligeTal);
//Ulige tal: 1,3,5

/*Opgave 7: reduce() - Beregning af gennemsnit:
Givet et array af tal, brug reduce() til at beregne gennemsnittet af alle tal i arrayet.*/
console.log("Gennemsnit:" + tal.reduce((acc, curr) => acc + curr) / tal.length)
//Gennemsnit: -11.25

/*Opgave 8: map() - Generer initialer:
Givet et array af fulde navne (fornavn og efternavn), brug map() til at oprette et nyt array med initialer for hvert navn.*/
let initialer = navne.map((curr) => ' ' + curr.split(' ').map(function (item) { return item[0] }).join(''));
console.log("Initialer: " + initialer)
//Initialer:  CK, MS, LH, LS, JS, KS, JG

/*Opgave 9: filter() - Filtrering af positive tal:
Givet et array af tal, brug filter() til at oprette et nyt array, der kun indeholder positive tal (større end 0).*/
let positiveTal = tal.filter((curr) => curr > 0);
console.log("Positive tal: " + positiveTal);
//Positive tal: 1,2,3,4,5

/*Opgave 10: reduce() - Konkatenering af strenge:
Givet et array af strenge, brug reduce() til at konkatener alle strengene i arrayet til en enkelt streng.*/
console.log("Samlet streng: " + navne.reduce((acc, curr) => acc + curr));
//Samlet streng: Celina KristensenMathias SodeLucas HolmLaurits SodeJohanne SodeKaroline SodeJens Gade