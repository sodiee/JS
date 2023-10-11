/* Opgave 9.3
Anvendes der polymorfi i Observer pattern – jf. Opgave 8.4?
*/

/*
Notifyobserver ?
Ja, der bruges polymorfi i den givne kode. Polymorfi refererer til evnen til at bruge forskellige typer objekter på en ensartet måde. I dette tilfælde bruger vi polymorfi i forhold til observers.

I koden er "observers" simpelthen en samling af funktioner, der kan kaldes. Disse funktioner fungerer som observers og kan udføre handlinger, når de kaldes af "notifyObservers" i "mySubject". Selvom de er forskellige funktioner, kan de alle bruges på en ensartet måde ved at kalde dem som observerFn(data) i forEach-løkken i "notifyObservers" uden at bekymre sig om deres specifikke implementering.

Dette er et eksempel på polymorfi i JavaScript, hvor forskellige typer objekter (i dette tilfælde funktioner) kan bruges på en ensartet måde.
*/