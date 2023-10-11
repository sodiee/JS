/*
Lav en Express chatserver svarende til beskrivelsen i Opgave12.2: Der er følgende GET endpoints:
• beskeder – alle chatbeskeder
• beskeder/:rum – alle chatbeskeder i et givet chatrum
• rum – alle anvendte chatrum

Der er et POST endpoint:
• besked – opretter en ny chatbesked

Et POST request skal have følgende properties:
• navn – navn på afsender
• rum – navn på det chatrum, hvor beskeden skal vises
• tekst – chatbesked

Der er også et DELETE endpoint:
• besked/:nr – sletter chatbeskeden med det givne nr
Chatserveren skal gemme beskederne i et array.
En ny beskeder skal gives et nr, der er én større end det hidtil største nr.
*/

const express = require('express');
const app = express();

const beskeder = [];
class Besked {
    constructor(navn, indhold, rum) {
        this.navn = navn
        this.indhold = indhold;
        this.id = beskeder.length + 1;
        this.rum = rum;
    }
    displayInfo() {
        return "besked: " + this.besked + "ID: " + this.id + "skrevet af:" + this.navn + "rum: " + this.rum;
    }
}

let testBesked = new Besked("Mathias", "Hej, det her er en test");
beskeder.push(testBesked);
let testBesked2 = new Besked("Kaj", "Hej, det her er også en test", "rummet");
beskeder.push(testBesked2);

app.use(express.json());

function genererBeskeder(beskeder) {
    let html = '<table>';
    for (besked of beskeder) {
        html +=
            '<tr><td>' + "besked id: " + besked.id +
            '</td><td>' + " || skrevet af: " + besked.navn +
            '</td><td>' + " || indhold: " + besked.indhold +
            '</td><td>' + " || rum: " + besked.rum
        '</td></tr>\n';
    }
    html += '</table>';
    return html;
}

app.get('/beskeder', (request, response) => {
    let html = genererBeskeder(beskeder)
    response.status(200).send(html);
})

app.get('/beskeder/:rum', (request, response) => {
    const rum = request.params.rum;
    let filtreredeBeskeder = beskeder.filter(besked => besked.rum === rum);
    let html = genererBeskeder(filtreredeBeskeder);
    response.status(200).send(html);
})

app.get('/rum', (request, response) => {
    let rumListe = beskeder.map(besked => besked.rum);
    let unikkeRum = [...new Set(rumListe)];
    response.status(200).json(unikkeRum);
})

app.post('/besked', (request, response) => {
    const { navn, rum, tekst } = request.body;
    if (!navn || !rum || !tekst) {
        response.status(400).json({ fejl: '400 Manglende parametre' });
    } else {
        const nyBesked = new Besked(navn, tekst, rum);
        beskeder.push(nyBesked);


        response.status(201).json({ besked: 'Besked oprettet', beskedId: nyBesked.id });
    }
});

app.delete('/besked/:nr', (request, response) => {
    let beskedID = `${request.params.nr}`;

    for (const besked of beskeder) {
        if (besked.id == beskedID) {
            beskeder.pop(besked);
        }
    }
    response.status(200).send(`Besked med id: ${beskedID} er blevet slettet.`)
})

app.listen(8080, () => {
    console.log("Så ruller vi, opgave 13.3.js")
})
