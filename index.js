// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat (name) {
    let copyOfCats = cats.slice();
    copyOfCats.push(name);
    return copyOfCats;
}

function prependCat(name) {
    return[name, ...cats];
}

function removeLastCat(name) {
    let copyOfCats = cats.slice();
    copyOfCats.pop(name);
    return copyOfCats;
}

function removeFirstCat(name) {
    let copyOfCats = cats.slice();
    copyOfCats.shift(name);
    return copyOfCats;
}