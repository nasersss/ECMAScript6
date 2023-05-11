/**
* Map is a collection of keyed data items, just like an Object.
* But the main difference is that Map allows keys of any type.

** Methods and properties are:
    * new Map() – creates the map.
    * map.set(key, value) – stores the value by the key.
    * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    * map.has(key) – returns true if the key exists, false otherwise.
    * map.delete(key) – removes the element (the key/value pair) by the key.
    * map.clear() – removes everything from the map.
    * map.size – returns the current element count.
 */

let map = new Map();
map.set('name', 'nasser');
map.set('age', '25');
map.set(250, '25');
map.set(function doSome(params) {}, 'doSomething')
map.set({name:'nasser',age:25},'object')
// console.log(map)

let newMap = new Map([
    [10,"Number"],
    ["10",'string'],
    [{name:'ali',age:25}],
]);

// console.log(newMap);
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
let prices = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  console.log(prices[Symbol.iterator]);
