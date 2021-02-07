// Import paket chalk


import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    const humanAge = this.getHumanAge();
    
    this.greet();
    // Tulis ulang konten dari console.log menggunakan chalk
    console.log(`Nama saya adalah ${this.name}`);
    
    // Tulis ulang konten dari console.log menggunakan chalk
    console.log(`Saya adalah seekor ${this.breed}`);
    
    console.log(`Saya berusia ${this.age} tahun`);
    console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;