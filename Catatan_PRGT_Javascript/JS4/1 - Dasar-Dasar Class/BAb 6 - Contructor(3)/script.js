class Animal {
  // Tambahkan argument「name」dan「age」
  constructor() {
    // Gantikan nilai string "Leo" dengan nilai milik argument name
    this.name = "Leo";
    
    // Gantikan「3」dengan nilai milik argument age
    this.age = 3;
  }
}

// Teruskan argument「"Mocha"」「8」ke constant animal dibawah
const animal = new Animal();

console.log(`Nama: ${animal.name}`);
console.log(`Usia: ${animal.age}`);


