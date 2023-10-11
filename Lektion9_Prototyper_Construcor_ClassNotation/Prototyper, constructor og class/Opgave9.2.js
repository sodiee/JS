/* Opgave 9.2
Lav en class StringStack med tilhørende push() og pop() metoder.
*/
class StringStack {
    constructor() {
        this.array = [];
    }

    push(e) {
        this.array.push(e);
    }

    pop() {
        return this.array.pop();
    }
}

let stack = new StringStack;
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');

console.log(stack);

stack.pop();
stack.pop();
stack.push('e');
console.log(stack);