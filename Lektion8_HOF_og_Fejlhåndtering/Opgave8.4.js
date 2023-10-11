/*
Implementer et Observer pattern på følgende måde:
• Observers implementeres som funktioner, der kaldes, når de ”notifies”.
• Et Subject defineres som en subject funktion, der har et array med observers som lokal variabel
• Funktionen subject skal desuden definere funktionerne registerObserver og notifyObservers som
indre funktioner og returnere dem som metoder i et object. Afprøv implementationen med et par observers.
*/
function createSubject() {
    const observers = [];

    function registerObserver(observerFn) {
        observers.push(observerFn);
    }

    function notifyObservers(data) {
        observers.forEach(observerFn => observerFn(data));
    }

    return {
        registerObserver,
        notifyObservers,
    };
}

// Opret et subject
const mySubject = createSubject();

// Opret nogle observers (funktioner)
function observer1(data) {
    console.log(`Observer 1 modtog data: ${data}`);
}

function observer2(data) {
    console.log(`Observer 2 modtog data: ${data}`);
}

// Registrer observers hos subject
mySubject.registerObserver(observer1);
mySubject.registerObserver(observer2);

// Notificér observers
mySubject.notifyObservers("Dette er en besked til observers.");
