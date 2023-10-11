const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

let header = document.createElement('h1');
header.textContent = 'Mountains';
header.style.color = 'red';
document.body.appendChild(header);

// Opret en tabel
let table = document.createElement('table');
table.style.border = '5px solid blue';
table.style.borderCollapse = 'collapse';
document.body.appendChild(table);

// Opret overskrift (thead)
let thead = document.createElement('thead');
table.appendChild(thead);

// Opret overskriftsrække (tr) i overskriften
let headerRow = document.createElement('tr');
thead.appendChild(headerRow);

// Opret overskriftsceller (th) i overskriften
let headerCell1 = document.createElement('th');
headerCell1.textContent = 'navn';
headerRow.appendChild(headerCell1);

let headerCell2 = document.createElement('th');
headerCell2.textContent = 'height';
headerRow.appendChild(headerCell2);

let headerCell3 = document.createElement('th');
headerCell3.textContent = 'place';
headerRow.appendChild(headerCell3)

// Opret tabelkrop (tbody)
let tbody = document.createElement('tbody');
table.appendChild(tbody);

for (let i = 0; i < MOUNTAINS.length; i++) {
    let mountain = MOUNTAINS[i];

    let dataRow = document.createElement('tr');
    tbody.appendChild(dataRow);

    let dataCell1 = document.createElement('td');
    dataCell1.textContent = mountain.name;
    dataCell1.style.border = '5px solid blue';
    dataRow.appendChild(dataCell1);

    let dataCell2 = document.createElement('td');
    dataCell2.textContent = mountain.height;
    dataCell2.style.border = '5px solid blue';
    dataRow.appendChild(dataCell2);

    let dataCell3 = document.createElement('td');
    dataCell3.textContent = mountain.place;
    dataCell3.style.border = '5px solid blue';
    dataRow.appendChild(dataCell3);
}





