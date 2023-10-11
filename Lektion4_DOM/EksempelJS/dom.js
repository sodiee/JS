const streetNames = ["Nørregade", "Østergade", "Søndergade"];

const olNode = document.createElement('ol')
document.body.appendChild(olNode)

for (let streetName of streetNames) {
    let streetNode = document.createElement('li');
    streetNode.textContent = streetName;

    olNode.appendChild(streetNode);
}

//const toDoNode = document.querySelector('#toDo')
const toDoNode = document.getElementById('toDo')
let chore = document.createElement('li')
chore.innerHTML = "<b>Købe ind</b>"
toDoNode.appendChild(chore)

const headLineNode = document.querySelector('h2')
const textNode = document.createTextNode("Adios")
headLineNode.appendChild(textNode)