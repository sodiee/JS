// Tilføj kode for opgave 4.1 - 4.5 her!
//4.1
let paragraphs = document.querySelectorAll('p');
for (const paragraph of paragraphs) {
    paragraph.style.color = 'red';
}

//4.2
let headers = document.querySelectorAll('h1');
for (const header of headers) {
    header.nextElementSibling.nextElementSibling.style.color = 'brown'
}

//4.3
let list = document.querySelector('ul');
let items = list.getElementsByTagName('li');

for (let i = 1; i < items.length; i += 2) {
    items[i].style.backgroundColor = 'lightgrey';
}

//4.4 ikke færidg
/*for (const header of headers) {
    let paragraph = header.querySelector('p');

    if (paragraph) {
        let newH2 = document.createElement('h2');
        newH2.textContent = paragraph.textContent;

        let parentNode = paragraph.parentNode;

        parentNode.replaceChild(newH2, paragraph);
    }
}*/

//4.4
for (let e of document.querySelectorAll('h1 + p')) {
    //løsnings 1 virker
    e.outerHTML = '<h2>' + e.innerHTML + '</h2>'

    //løsning 2, virker ikke
    //let h2Node = document.createElement('h2');
    //e.parentNode.replaceChild(h2Node, e);
}

//4.4 virker
/*let overskriftNode = document.querySelectorAll('h1');
for (let element of overskriftNode) {
    let prev = element.nextElementSibling;
    let prevTekst = prev.textContent;
    let parent = prev.parentNode;
    let newNode = document.createElement('h2');
    newNode.textContent = prevTekst;
    parent.replaceChild(newNode, prev);
}*/


//4.5
let i = 1;

for (const header of headers) {
    header.setAttribute("id", "header" + i);
    i++;

    let aLink = document.createElement('a');
    aLink.href = '#i';
    aLink.textContent = "google";

    let spacer = document.createElement('div');

    document.body.insertBefore(aLink, document.body.firstElementChild);
    document.body.insertBefore(spacer, document.body.firstElementChild);
}