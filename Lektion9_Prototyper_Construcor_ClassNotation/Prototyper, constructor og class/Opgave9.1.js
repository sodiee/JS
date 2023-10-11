/*
Tag udgangspunkt i specialisering.js og tilføj equals() metoder samt en compare() metode.
Metoden equals(p) på Person skal sikre, at p har Person som constructor og har samme navn som personen.
Metoden equals(s) på Studerende skal sikre, at s har Studerende som constructor og har samme navn og id som den studerende.
Den static compare(p1, p2) skal sammenligne p1 og p2 baseret på navn.
Lav dernæst et array med nogle personer og studerende og sorter dem på navn. Indsæt desuden et par katte (se polymorfi.js) og sorter på ny.
*/
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() { return this.navn; }

    equals(person) {
        if (this.navn !== person.navn || !(person instanceof Person)) { return false; }
        return true;
    }

    static compare(p1, p2) { return p1.navn.localeCompare(p2.navn); }

}

class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    toString() {
        return super.toString() + ": " + this.id;
    }

    equals(studerende) {
        if (this.navn !== studerende.navn || this.id !== studerende.id || !(studerende instanceof Studerende)) {
            return false;
        }
        return true;
    }
}

class Kat {
    constructor(navn, farve) {
        this.navn = navn;
        this.farve = farve;
    }

    makeNoise() { return "Miav" };
}

let person = new Person("Viggo");
let studerende = new Studerende("Ida", 123);
console.log(person instanceof Person); // => true
console.log(person instanceof Studerende); // => false
console.log(studerende instanceof Person); // => true
console.log(studerende instanceof Studerende); // => true

let array = [];
let person1 = new Person("Mathias");
array.push(person1);
let person2 = new Person("Celina");
array.push(person2);
let person3 = new Person("Jakob");
array.push(person3);
let studerende1 = new Studerende("Peter", 7);
array.push(studerende1);
let studerende2 = new Studerende("Frederik", 9);
array.push(studerende2);

let kat1 = new Kat("Plet", "Grøn");
let kat2 = new Kat("Misser", "Brun");
let kat3 = new Kat("Vovse", "Sort");
array.push(kat1);
array.push(kat2);
array.push(kat3);

array.sort(Person.compare);
console.log(array);