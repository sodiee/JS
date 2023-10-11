function primtalTester(tal) {
    for (let i = 2; i < tal; i++) {
        if (tal % i === 0) {
            return false;
        }
    }
    return true;
}

function printAllePrimtal() {
    const primtalListe = [];
    for (let i = 2; i < 50; i++) {
        if (primtalTester(i)) {
            primtalListe.push(i);
        }
    }
    return primtalListe;
}

let res = printAllePrimtal();
console.log(res);
