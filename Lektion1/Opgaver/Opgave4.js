function fletteFunktion(arr1, arr2) {
    let arrRes = [];
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < arr1.length && idx2 < arr2.length) {
        if (arr1[idx1] < arr2[idx2]) {
            arrRes.push(arr1[idx1]);
            idx1++;
        } else if (arr1[idx1] == arr2[idx2]) {
            arrRes.push(arr1[idx1]);
            idx1++;
        } else {
            arrRes.push(arr2[idx2]);
            idx2++;
        }
    }

    // Tilføj eventuelle resterende elementer fra begge arrays
    while (idx1 < arr1.length) {
        arrRes.push(arr1[idx1]);
        idx1++;
    }

    while (idx2 < arr2.length) {
        arrRes.push(arr2[idx2]);
        idx2++;
    }

    return arrRes;
}

let list1 = [1, 2, 4, 5, 7,];
let list2 = [1, 2, 3, 5, 7];

console.log(fletteFunktion(list1, list2));
