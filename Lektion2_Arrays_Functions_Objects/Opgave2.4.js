/*Lav en string variabel med en længere tekst.

Anvend dernæst et objekt som en map til at beregne antallet af de forskellige ord i teksten.

Brug metoden split() til at opdele teksten i ord.*/

let streng = 'hej jeg hedder mathias og er 22 år gammel mathias';

let arrOrd = streng.split(' ');

console.log(arrOrd);

let objekt = {}

for (let i of arrOrd) {
    if (i in objekt) {
        objekt[i]++;
    } else {
        objekt[i] = 1;
    }
}

console.log(objekt);
