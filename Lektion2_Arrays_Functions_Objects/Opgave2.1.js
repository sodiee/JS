/*Programmer nedenstående funktioner, hvor array indeholder nogle tal:
• max(array): returnerer det største element i arrayet.

• contains(array, element): returnerer true hvis elementet findes i arrayet, ellers false

• sum(array): returnerer summen af elementerne i arrayet.*/

let arr = [1, 3, 5, 2, 8, 9, 11, 16, 13];

function max(arr) {
    let res = -1;
    for (let i of arr) {
        if (res < i) {
            res = i;
        }
    }
    console.log(res);
}

let maxRes = max(arr);

let contains = (arr, element) => {
    for (let i of arr) {
        if (i == element) {
            console.log(true);
            return true
        }
    }
    console.log(false);
    return false;
}

let containsRes = contains(arr, 1);

function sum(arr) {
    let res = 0;
    for (let i of arr) {
        res += i;
    }
    console.log(`res: ${res}`)
    return res;
}

let sumRes = sum(arr);
