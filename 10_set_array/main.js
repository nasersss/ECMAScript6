/**
 * A Set is a special type collection – “set of values” (without keys), 
 * where each value may occur only once.
 * Methods of Set
 * new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * set.add(value) – adds a value, returns the set itself.
 * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * set.has(value) – returns true if the value exists in the set, otherwise false.
 * set.clear() – removes everything from the set.
 * set.size – is the elements count.
 */
let mybook = {
    name:'c++,',
    author:'Ali',
    pages:250,
}
let array = [1,2,2,2,3,6,6];
//let set = new Set(mybook);// Error object is not iterable
let set  = new Set(Object.entries(mybook));//Set(3) { [ 'name', 'c++,' ], [ 'author', 'Ali' ], [ 'pages', 250 ] }
let uniqArray = new Set(array);
console.log(uniqArray);//Set(3) {1, 2, 3, 6} to get array using [... new Set(array)]