class Key {
  constructor(private signature: number) {}
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  door: boolean;
  tenants: Person[] = [];

  constructor(public key: Key) {
    this.door = false;
  }
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
    return;
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
    return;
  }
}

const key = new Key(Math.floor(Math.random()));

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
