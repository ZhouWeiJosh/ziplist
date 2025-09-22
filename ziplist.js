"use strict";
function zipList(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error('Arrays must be of the same length');
    }
    const zipped = [];
    for (let i = 0; i < arr1.length; i++) {
        zipped.push(arr1[i]);
        zipped.push(arr2[i]);
    }
    return zipped;
}
function zipListTheFunctionalWay(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error('Arrays must be of the same length');
    }
    const zipped = [];
    arr1.forEach((value, index) => {
        zipped.push(value, arr2[index]);
    });
    return zipped;
}
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
const zippedList = zipList(list1, list2);
const zippedListFunctional = zipListTheFunctionalWay(list1, list2);
console.log(zippedListFunctional);
console.log(zippedList);
