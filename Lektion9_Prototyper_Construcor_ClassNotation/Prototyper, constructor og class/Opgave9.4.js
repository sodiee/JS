/* Opgave 9.4
Implementer en dobbeltrettet associering mellem Person og en class Gruppe, som i PRO1.
*/
class Person {
    constructor(navn) {
        this.navn = navn;
    }

    toString() {
        return this.navn;
    }

    equals(person) {
        if (this.navn !== person.navn || !(person instanceof Person)) {
            return false;
        }
        return true;
    }

    static compare(p1, p2) {
        if (p1.navn > p2.navn) {
            return 1;
        } else if (p1.navn < p2.navn) {
            return -1;
        }
        return 0;
    }
}

class Gruppe {
    constructor() {
        this.array = [];
    }

    add(e) {
        this.array.push(e)
    }

    remove(e) {
        let idx = this.array.indexOf(e);
        if (idx === -1) {
            throw new Error("Denne person findes ikke i gruppen.");
        } else {
            this.array.splice(idx, 1);
        }
    }
}

let gruppe = new Gruppe;
let person1 = new Person("Mathias");
gruppe.add(person1);
let person2 = new Person("Celina");
gruppe.add(person2);
let person3 = new Person("Jakob");
gruppe.add(person3);

console.log(gruppe);

gruppe.remove(person2);

console.log(gruppe);