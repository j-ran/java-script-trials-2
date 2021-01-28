"use strict";


// 1. printIndices
function printIndices(items){
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}
// - test - printIndices(['cherry', 'berry', 'apple'])


// 2. everyOtherItem
function everyOtherItem(items) {
  let numbers = [];

  for (const i in items){
    if (i % 2 === 0) {
      numbers.push(items[i]);
    }
  }

  console.log(numbers)
}


// 3. smallestNItems
function smallestNItems(items, n) {
  
  items.sort((a,b) => a - b);
  items.reverse();
  console.log(items.slice(0, n));

}