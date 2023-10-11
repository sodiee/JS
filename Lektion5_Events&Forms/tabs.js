//Opgave 2
//Skriv kode i tabs.js, som viser <p> elementet svarende til det <span> element, der klikkes på. 

let tab1Node = document.createElement('span');
tab1Node.class = 'tab';
tab1Node.textContent = ' [Tab 1] ';
tab1Node.id = '1'
document.body.appendChild(tab1Node);
tab1Node.addEventListener('click', onClick);

let tab2Node = document.createElement('span')
tab2Node.class = 'tab';
tab2Node.textContent = ' [Tab 2] ';
tab2Node.id = '2'
document.body.appendChild(tab2Node);
tab2Node.addEventListener('click', onClick);

let tab3Node = document.createElement('span');
tab3Node.class = 'tab';
tab3Node.textContent = ' [Tab 3] ';
tab3Node.id = '3'
document.body.appendChild(tab3Node);
tab3Node.addEventListener('click', onClick);

let p1 = document.createElement('p');
p1.textContent = 'For tab 1';
document.body.appendChild(p1);
let p2 = document.createElement('p');
p2.textContent = 'For tab 2';
p2.style.display = 'none';
document.body.appendChild(p2);
let p3 = document.createElement('p');
p3.textContent = 'For tab 3';
p3.style.display = 'none';
document.body.appendChild(p3);

function onClick(event) {
    if (event.target.id === '1') {
        p1.style.display = 'block';
        p2.style.display = 'none';
        p3.style.display = 'none';
    }
    if (event.target.id === '2') {
        p1.style.display = 'none';
        p2.style.display = 'block';
        p3.style.display = 'none';
    }
    if (event.target.id === '3') {
        p1.style.display = 'none';
        p2.style.display = 'none';
        p3.style.display = 'block';
    }
}

//Fra starten skal den første tab vises. Brug CSS display propertien til at vise og skjule indholdet af en tab.