function Person(navn, alder, mobilnummer) {
    this.navn = navn;
    this.alder = alder;
    this.mobilnummer = mobilnummer;
}

let persons = [];

let person1 = new Person("Alice", 25, 12345678);
persons.push(person1);
let person2 = new Person("Bob", 35, 23456789);
persons.push(person2);
let person3 = new Person("Charlie", 28, 34567891);
persons.push(person3);
let person4 = new Person("David", 22, 45678912);
persons.push(person4);
let person5 = new Person("Eva", 40, 56789123);
persons.push(person5);
let person6 = new Person("Frank", 45, 67891234);
persons.push(person6);
let person7 = new Person("Grace", 32, 78912345);
persons.push(person7);
let person8 = new Person("Hannah", 29, 89123456);
persons.push(person8);
let person9 = new Person("Isaac", 38, 91234567);
persons.push(person9);
let person10 = new Person("Jennifer", 27, 87654321);
persons.push(person10);

console.log(persons);

//bestemt telefonnummer
console.log(persons.find(person => person.mobilnummer === 12345678));

//mindste alder
let aldre = persons.map(person => person.alder);
let mindsteAlder = Math.min(...aldre);

console.log("Den mindste alder er: " + mindsteAlder);

//modificer arrayet, så personerne får id
persons = persons.map((person, index) => {
    return { ...person, id: index + 1 };
});

console.log(persons)

//generer en streng, der indeholde personerners navn, kommasepereret og i sorteret rækkefølge.
// Brug map til at oprette et array med navnene
let navne = persons.map(person => person.navn);

// Sorter navnene i alfabetisk rækkefølge
navne.sort();

// Konverter det sorteret navne-array til en kommasepareret streng
let kommasepareretNavne = navne.join(', ');

console.log(kommasepareretNavne);

//generer array med navn og mobilnummer på de personer, der er yngrer end 30
// Brug filter til at vælge personer under 30 år
let ungePersoner = persons.filter(person => person.alder < 30);

// Brug map til at oprette et array med navn og mobilnummer for de unge personer
let navnOgMobilForUnge = ungePersoner.map(person => ({ navn: person.navn, mobilnummer: person.mobilnummer }));

console.log(navnOgMobilForUnge);
