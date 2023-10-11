/*Modificer løsningen til opgave 1.3, så algoritmerne nu pakkes ind i funktioner med signaturerne:

• bubbleSort(array)

• binarySearch(array, element)

Gør desuden swap-delen af bubbleSort til en lokal funktion swap(i, j).*/
let arr = [7, 13, 9, 8, 4, 1, 2, 16, 0];

function bubbleSort(arr) {
    function swap(i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        /*
let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        */
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
            }
        }
    }
}

bubbleSort(arr);
console.log(arr.toString()); // => 0,1,2,4,7,8,9,13,16

function binarySearch(list, element) {
    let start = 0;
    let end = list.length;
    let mid = 0;

    while (start <= end) {
        mid = Math.round((start + end) / 2);
        if (list[mid] < element) {
            start = mid + 1;
        } else if (list[mid] > element) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return "Not found"
}

