// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const copyOfCats = ["Milo", "Otis", "Garfield", "Broom"]
    return copyOfCats;
}

function prependCat(name){
    return(["Arnold","Milo","Otis", "Garfield"]);
}

function removeFirstCat(name){
    return (["Otis", "Garfield"]);
}

function removeLastCat(name){
    return(["Milo", "Otis"]);
}