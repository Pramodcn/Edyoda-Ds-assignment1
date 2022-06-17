console.clear();
class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
        this.push = (Element) => {
            this.items[this.size++] = Element;
        }
        this.pop = () => {
            if (this.size === 0) {
                return -1;
            } else {
                this.size--;
                return this.items.pop();
            }
        }
        this.peak = () => {
            if (this.size === 0) {
                return -1;
            } else {
                return this.items[this.size - 1];
            }
        }
    }
}
// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

console.log('--------------------question 1--------------------');

let pair = new Stack();

function isPresentInPair(a, b) {
    let flag = false;
    for (let i = 0; i < pair.items.length; ++i) {
        if (pair.items[i][0] === a && pair.items[i][1] === b) {
            flag = true;
            break;
        } else {
            flag = false;
        }
    }
    return flag;
}

function findPair(arr, num) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            if (i !== j && arr[i] + arr[j] === num) {
                if (isPresentInPair(arr[i], arr[j])) {
                    continue;
                } else {
                    pair.push([arr[i], arr[j]]);
                    pair.push([arr[j], arr[i]]);
                }
            }
        }
    }
    console.log(pair.items);
}
findPair([1, 2, 2, 4, 5, 6, 3, 4, 1, 2, 3, 6], 5);

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

console.log('--------------------question 2--------------------');

function reverseArray(array) {
    for (let i = 0, j = array.length - 1; i <= array.length / 2 && j >= array.length / 2; ++i, --j) {
        array[i] += array[j];
        array[j] = array[i] - array[j];
        array[i] = array[i] - array[j];
    }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArray(array);
console.log(array);

// Q3. Write a program to check if two strings are a rotation of each other?

console.log('--------------------question 3--------------------');

function checkStrRotation(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
        console.log('string 1 and string 2 are not rotation of each other');
        return;
    } else {
        for (let i = 0, j = str2.length - 1; i <= str1.length && j >= 0; ++i, --j) {
            if (str1[i] !== str2[j]) {
                console.log('string 1 and string 2 are not rotation of each other');
                return;
            }
        }
        console.log('string 1 and string 2 are rotation of each other');
    }
}

checkStrRotation('AABBAA', "AABAA");

// Q4. Write a program to print the first non-repeated character from a string?

console.log('--------------------question 4--------------------');

function firstNoRepeatChar(str) {
    let i = 0;
    let j = 1;
    while (i < str.length) {
        let flag = true;
        while (j < str.length) {
            if (str[i] === str[j]) {
                flag = false;
            }
            ++j;
        }
        if (flag === true) {
            return str[i];
        }
        ++i;
    }
}

let str = 'bubble';
let result = firstNoRepeatChar(str);
console.log("first non repeated character of string '" + str + "' is: " + result);


// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

console.log('--------------------question 5--------------------');

function towerOfHanoi(n, a, b, c) {
    if (n > 0) {
        towerOfHanoi(n - 1, a, c, b);
        console.log('move a disk from ' + a + ' to ' + c);
        towerOfHanoi(n - 1, b, a, c);
    }
}

let n = 4, a = 'Tower 1', b = 'Tower 2', c = 'Tower 3';
console.log('to move ' + n + ' disk from ' + a + ' to ' + c + ' using Tower Of Hanoi algorithm \n steps are as below:')
towerOfHanoi(n, a, b, c);

// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

console.log('--------------------question 6--------------------');

let stackSix = new Stack();

let isOperator = char => {
    if (char === '+' || char === '-' || char === '*' || char === '/') {
        return true;
    } else {
        return false;
    }
}

let postToPrefix = (exp) => {
    let i = -1;
    while (++i < exp.length) {
        if (isOperator(exp[i])) {
            let a = stackSix.pop();
            let b = stackSix.pop();
            stackSix.push(exp[i] + b + a)
        } else {
            stackSix.push(exp[i]);
        }
    }
    return stackSix.items.join('');
}

let postExp = 'abca*-c++b-c-';
let prefix = postToPrefix(postExp);
console.log('postfix:\n' + postExp + '\n\nprefix:\n' + prefix);

// Q7. Write a program to convert prefix expression to infix expression.

console.log('--------------------question 7--------------------');

let stackSeven = new Stack();

function preToInfix(exp) {
    exp = exp.split('').reverse().join('');
    let i = -1;
    while (++i < exp.length) {
        if (isOperator(exp[i])) {
            let a = stackSeven.pop();
            let b = stackSeven.pop();
            stackSeven.push(a + exp[i] + b)
        } else {
            stackSeven.push(exp[i]);
        }
    }
    return stackSeven.items.join('');
}

let prefixExp = '--+a+-b*cacbc';
let infix = preToInfix(prefixExp);
console.log('Prefix:\n' + prefixExp + '\n\Infix:\n' + infix);

// Q8. Write a program to check if all the brackets are closed in a given code snippet.

console.log('--------------------question 8--------------------');

function checkBrackets(str) {
    let stack = new Stack();
    let i = -1, temp;
    while (++i < str.length) {
        switch (str[i]) {
            case '[':
            case '{':
            case '(':
                stack.push(str[i]);
                continue;
            case ']':
                temp = stack.pop();
                if (temp !== '[') {
                    return false;
                }
                continue;
            case '}':
                temp = stack.pop();
                if (temp !== '{') {
                    return false;
                }
                continue;
            case ')':
                temp = stack.pop();
                if (temp !== '(') {
                    return false;
                }
                continue;
        }
    }
    return true
}

let code = `function reverseStack(stack){
    let tempStack = new Stack();
    while(stack.size){
        tempStack.push(stack.pop());
    }
    return tempStack.items;
}`;

checkBrackets(code) ? console.log('all brackets are closed') : console.log('all brackets are not closed');

// Q9. Write a program to reverse a stack.

console.log('--------------------question 9--------------------');

function reverseStack(stack) {
    let tempStack = new Stack();
    while (stack.size) {
        tempStack.push(stack.pop());
    }
    return tempStack.items;
}

arr = [5, 2, 3, 64, 6, 5, 77, 5, 11, 223, 3, 6, 55, 2, 15]
let stackNine = new Stack();

while (arr.length) {
    stackNine.push(arr.shift());
}
console.log('before:')
console.log(stackNine.items);
console.log('after:');
console.log(reverseStack(stackNine));



// Q10. Write a program to find the smallest number using a stack.

console.log('--------------------question 10--------------------');

function smallestNumberInStack(stack) {
    let smallest = stack.peak();
    while (stack.size !== 0) {
        let current = stack.pop();
        if (current < smallest) {
            smallest = current;
        }
    }
    return smallest;
}

arr = [5, 2, 3, 64, 6, 5, 77, 5, 11, 223, 3, 6, 55, 2, 15]
let stackTen = new Stack();

while (arr.length) {
    stackTen.push(arr.shift());
}

console.log('Smallest Number In Stack:  '+stackTen.items+' is '+smallestNumberInStack(stackTen));
