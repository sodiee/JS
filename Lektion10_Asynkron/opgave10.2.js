// URL'er til API-endepunkter
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

// En klasse til at repræsentere en person
class Person {
    constructor(id, name, username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
    toString() { return this.name; }
}

// En asynkron funktion til at hente data fra en given URL ved hjælp af fetch API
async function get(url) {
    const response = await fetch(url);
    if (response.status !== 200) // Tjek for en succesfuld respons (status 200)
        throw new Error(response.status);
    return await response.json(); // Analyser JSON-data og returner det som et objekt
}

// En asynkron funktion til at hente brugerdata og oprette Person-objekter
async function fetchUsersAndCreateObjects(url) {
    try {
        const userData = await get(url); // Hent data fra den angivne URL
        return userData.map(user => new Person(user.id, user.name, user.username, user.email)); // Opret Person-objekter og returner dem som et array
    } catch (error) {
        console.error('Fejl under hentning af data:', error); // Håndter eventuelle fejl og udskriv dem til konsollen
        return []; // Returner et tomt array i tilfælde af fejl
    }
}

// En funktion til at tilføje persondata til en HTML-tabel
function addToTable(peopleArray) {
    const tableBody = document.querySelector("table tbody"); // Find tabelens tbody-element

    for (let i = 0; i < peopleArray.length; i++) {
        const person = peopleArray[i];

        const row = document.createElement("tr"); // Opret en ny række

        const idCell = document.createElement("td"); // Opret en celle til ID
        idCell.textContent = i + 1; // Indstil celleværdien til en stigende værdi

        const nameCell = document.createElement("td"); // Opret en celle til Navn
        nameCell.textContent = person.name; // Indstil celleværdien til personens navn

        const usernameCell = document.createElement("td"); // Opret en celle til Brugernavn
        usernameCell.textContent = person.username; // Indstil celleværdien til personens brugernavn

        const userEmailCell = document.createElement("td");
        userEmailCell.textContent = person.email;

        // Tilføj celler til rækken
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(usernameCell);
        row.appendChild(userEmailCell);

        // Tilføj rækken til tabellens tbody
        tableBody.appendChild(row);

        console.log(person); // Udskriv personen til konsollen
    }
}

// Vent på, at DOM'en er blevet indlæst, og udfør derefter hentning og tilføjelse af data
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const peopleArray = await fetchUsersAndCreateObjects(userUrl); // Hent og opret Person-objekter
        addToTable(peopleArray); // Tilføj data til tabellen
    } catch (error) {
        console.error('Fejl:', error); // Håndter eventuelle fejl og udskriv dem til konsollen
    }
});