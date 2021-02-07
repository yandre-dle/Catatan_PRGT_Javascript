// Import readline-sync

import Dog from "../class/dog";

const dog1 = new Dog("Leo", 4, "Chihuahua");

// Tulis ulang dengan menggunakan readlineSync.question
const name = "Ben";

// Tulis ulang dengan menggunakan readlineSync.questionInt
const age = 2;

// Tulis ulang dengan menggunakan readlineSync.question
const breed = "Poodle";

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };
