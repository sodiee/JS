// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
        }
    }
}
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16



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

console.log(binarySearch(list, 4));
