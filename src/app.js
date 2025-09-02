import Character from "./Character";
import Team from "./Team";

const cat = new Character("Chris", "cats");
const dog = new Character("Bob", "dogs");
const horse = new Character("Josef", "horses");

const animals = new Team("animals");
animals.addAll(cat, dog, horse);

const iterator = animals.iterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());