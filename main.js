// Part 1: Array Functions

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function average(arr) {
    return sum(arr) / arr.length;
}

function longestString(arr) {
    let longestStrLength = [0, ""];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestStrLength[0]) {
            longestStrLength[0] = arr[i].length;
            longestStrLength[1] = arr[i];
        }
    }
    return longestStrLength[1];
}

function stringsLongerThan(arr, n) {
    let returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > n) {
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
}

function upToN(n) {
    if (n !== 1) {
        console.log(n);
        return upToN(n - 1);
    } else {
        console.log(n);
    }
}

const numArr = [1, 2, 3, 4, 5];
const strArr = ["hello", "world", "this is amazing!", "hoopla"];

console.log(`sum function: ${sum(numArr)}`);
console.log(`average function: ${average(numArr)}`);
console.log(`longestString function: ${longestString(strArr)}`);
console.log(`strLongerThan function: ${stringsLongerThan(strArr, 5)}`);
console.log(`upToN function: ${upToN(9)}`);

// Part 2: Working with Objects and Arrays

let dataArr = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

let sortedArr = dataArr.sort((obj1, obj2) => obj1.age - obj2.age);
console.log(`sorted array: ${sortedArr[0]}`);

let filteredDataArr = sortedArr.filter((obj) => obj.age <= 50);
console.log(`filtered data array: ${JSON.stringify(filteredDataArr)}`);

let mappedDataArr = filteredDataArr.map(({ id, name, occupation, age }) => ({
    id,
    name,
    job: occupation,
    age: Number(age) + 1,
}));

console.log(`mapped array: ${JSON.stringify(mappedDataArr)}`);

let ageSum = mappedDataArr.reduce(
    (acc, current) => acc + Number(current.age),
    0
);
console.log(`total age: ${ageSum}`);

// Part 3: Object Manipulation

function incAge(obj) {
    obj.age ??= -1;
    obj.age += 1;
    obj.updated_at = new Date();
}

function incCopyAge(obj) {
    const res = Object.create(obj);
    res.age ??= -1;
    res.age += 1;
    res.updated_at = new Date();

    return res;
}

let someObj = {
    age: 5,
};

let otherObj = {
    name: "barles",
};

incAge(otherObj);
console.log(otherObj);
