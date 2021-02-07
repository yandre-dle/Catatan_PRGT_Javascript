class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

class Dog extends Animal {
  // Tambahkan method getHumanAge
  
  
}

const dog = new Dog("Leo", 4);
dog.info();

// Panggil method getHumanAge milik instance dog


// Print 「Saya berusia __ tahun dalam umur manusia」


