// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

class Person {
    constructor(id, name, username) {
        this.id = id;
        this.name = name;
        this.username = username;
    }
    toString() { return this.name; }
}

//Async
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
    console.log('get');
}

async function main(url) {
    try {
        let users = await get(url)
        console.log(users)
    } catch (fejl) {
        console.log(fejl)
    }
    console.log('main');
}

main(userUrl);

get(userUrl);



//Promise
function get(url) {
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${url} Slet ikke OK!`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data); // Send data som resultat, når det er blevet hentet korrekt
            })
            .catch(error => {
                reject(error); // Send fejl, hvis noget går galt
            });
    });
}

class Person2 {
    constructor(id, name, username) {
        this.id = id;
        this.name = name;
        this.username = username;
    }
}

function fetchUsersAndCreateObjectsP(url) {
    return get(url) // Returner Promise fra get
        .then(userData => {
            const peopleArray = userData.map(user => new Person(user.id, user.name, user.username));
            return peopleArray;
        })
        .catch(error => {
            console.error('Fejl under hentning af data:', error);
            return [];
        });
}

fetchUsersAndCreateObjectsP(userUrl)
    .then(peopleArray => {
        console.log(peopleArray);
    })
    .catch(error => {
        console.error('Fejl:', error);
    });



