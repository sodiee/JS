//Opgave 1
let inputs = document.querySelectorAll('input');
let input1 = document.getElementById('tal');
let input2 = document.getElementById('tid');

//Label 1
let label1Node = document.createElement('label');
label1Node.textContent = input1.id;
input1.parentNode.insertBefore(label1Node, input1);
label1Node.for = input1.id;
label1Node.id = input1.id
label1Node.addEventListener('click', targetChecker);
input1.addEventListener('click', targetChecker);

//Label 2
let label2Node = document.createElement('label');
label2Node.textContent = input2.id;
input2.parentNode.insertBefore(label2Node, input2);
label2Node.for = input2.id;
label2Node.id = input2.id
label2Node.addEventListener('click', targetChecker);
label2Node.addEventListener('click', targetChecker);

function targetChecker(event) {
    if (event.target.tagName === 'label') {
        if (event.target.id === 'tal') {
            input1.value = Math.random() * 100;
        } else {
            let d = new Date();
            input2.value = d.toTimeString();
        }
    } else {
        if (event.target.id === 'tal') {
            input1.value = Math.random() * 100;
        } else {
            let d = new Date();
            input2.value = d.toTimeString();
        }
    }
}

