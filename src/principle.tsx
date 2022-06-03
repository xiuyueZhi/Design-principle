class Animal {}
class Cat extends Animal {
  favoriteFood: string;
}
// class Dog extends Animal {
//   favoriteFriend: string;
// }
// class Breeder {
//   feed(c: Animal): Animal {
//     // console.log("Breeder feed animal");
//     return c;
//   }
//   getInfo(c: Animal): Animal {
//     return c;
//   }
// }

// class CatCafe extends Breeder {
//   feed(c: Cat): Cat {
//     // console.log("CatCafe feed Cat");
//     console.log(555, c.favoriteFood);
//     return c;
//   }
//   getInfo(c: Cat): Animal {
//     return c;
//   }
// }

// const cat = new Cat();
// cat.favoriteFood = "fish";
// const dog = new Dog();
// const animal = new Animal();
// const feed = (breeder: Breeder) => {
//   // console.log(333, breeder);
//   return breeder.feed(cat);
// };

// console.log(111, feed(new Breeder()));
// console.log(222, feed(new CatCafe()));
// console.log(new CatCafe().feed(cat));

// class CatBreeder {
//   feed(c: Cat) {
//     console.log("CatBreeder feed cat");
//   }
//   // getInfo(c: Cat): Animal {
//   //   return c;
//   // }
// }

// class PetBreeder extends CatBreeder {
//   feed(c: Animal) {
//     console.log("PetBreeder feed animal");
//   }
//   // getInfo(c: Cat): Cat {
//   //   return c;
//   // }
// }
// // 里氏替换原准则
// // const breeder = new Breeder();
// // const catCafe = new CatCafe();
// const animal = new Animal();

// // breeder.feed(animal);
// // catCafe.feed(animal) // error
// const animal = new Animal();
// const catBreeder = new CatBreeder();
// const petBreeder = new PetBreeder();
// const cat = new Cat();
// catBreeder.feed(animal);
// petBreeder.feed(animal);

// class Caculate {
//   divide = (divisor: number, dividend: number): number => {
//     return dividend / divisor
//   }
// }

// class ArrCaculate extends Caculate{
//   getLength = (arr: number[]): number => {
//     return arr.length
//   }
//   divide = (divisor: number, dividend: number): number => {
//     console.log(this.getLength(null))
//     return dividend / divisor
//   }
// }

// const calculate: Caculate = new Caculate()
// const arrCaculate: ArrCaculate = new ArrCaculate()
// const arr: number[] = [1, 0]
// const calcDivide = (calculate: ArrCaculate, arr: number[]) => {
//   return calculate.divide(arr[], dividend)
// }
// calculate.divide(1,0)

// interface Supertype {
//   name: string;
// }

// interface Subtype extends Supertype {
//   age: number;
// }

// let superVar: Supertype;
// let subVar: Subtype;
// let superArr: Supertype[];
// let subArr: Subtype[];

// superVar = subVar;
// superArr = subArr;

// interface Supertype {
//   name: string;
// }

// interface Subtype extends Supertype {
//   age: number;
// }

// let superFun: (superVar: Supertype) => void;
// let suberFun: (suberVar: Subtype) => void;

// suberFun = superFun; // ok，当我们传入参数suberVar，满足suberFun得参数，也满足superFun的参数
// superFun = suberFun; //

// class Animal {}
// class Cat extends Animal {
//   favoriteFood: string;
// }
// class Breeder {
//   feed(c: Animal) {
//     console.log("Breeder feed animal");
//   }
// }

// class CatCafe extends Breeder {
//   feed(c: Cat) {
//     console.log("CatCafe feed animal");
//   }
// }

// const breeder = new Breeder();
// const catCafe = new CatCafe();
// const animal = new Animal();

// breeder.feed(animal);
// catCafe.feed(animal); // error

// breeder.feed = catCafe.feed

// catCafe.feed = breeder.feed

class CatBreeder {
  getInfo(c: Cat): Cat {
    return c;
  }
}

class PetBreeder extends CatBreeder {
  getInfo(c: Cat): Animal {
    return c;
  }
}
const cat = new Cat();
const animal: Animal = new CatBreeder().getInfo(cat);
const catR: Animal = new PetBreeder().getInfo(cat);
console.log(1, animal);
console.log(2, catR);

export default function Principle() {
  return <div></div>;
}
