/*
Lav et array med en række person objekter.

Hver person skal have et navn, en e-mail og et mobilnummer.

Afprøv CRUD på dette arrayet som vist på siden CRUD på arrays i arrays.pdf.
*/

let arr = [['Silas', 'silas@gmail.com', '12345678'], ['Tayyip', 'tayyip@gmail.com', '95417304'], [' Jacob', 'jacob@gmail.com', '10428591'], ['Lucas', 'lucas@gmail.com', '20184628'], ['Mathias', 'mathias@gmail.com', '39105627']]

console.log(arr[1]);
arr[1] = ['Tayyip', 'tayyip@gmail.com', '85417304']
console.log(arr[1]);

delete arr[1];

console.log(arr);