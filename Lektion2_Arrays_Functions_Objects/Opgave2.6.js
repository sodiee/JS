/*Lav en string variabel der indeholder noget kode med nogle parenteser – (), {} og []. 
Lav dernæst en funktion, der skal afgøre, om parenteserne i koden er balancerede.

Som datastruktur anvendes en stak (et array). Når der mødes en venstre parenteser i koden, skal den sættes på stakken – og når der mødes en højre parentes, skal det kontrolleres, om den tilsvarende venstre parentes er øverst på stakken. Brug metoderne push() og pop().*/

let streng = 'a(b)[db[]]'

function balanceretStreng(streng) {
    let arr = streng.split('');
    let arrRes = []

    for (let i of arr) {
        if (i === '(' || i === '[' || i === '{') {
            arrRes.push(i);
        } else if (i === ')' || i === ']' || i === '}') {
            if (
                (i === ')' && arrRes[arrRes.length - 1] === '(') ||
                (i === ']' && arrRes[arrRes.length - 1] === '[') ||
                (i === '}' && arrRes[arrRes.length - 1] === '{')
            ) {
                arrRes.pop();
            } else {
                return false; // Ikke balanceret
            }
        }
    }

    return arrRes.length === 0; // Balanceret hvis arrRes er tomt
}

console.log(balanceretStreng(streng));