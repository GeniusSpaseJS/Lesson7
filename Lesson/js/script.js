class CircleBox {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class CircleItem extends CircleBox {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = options.size + "px";
    this.$el.style.height = options.size + "px";
    this.$el.style.borderRadius = "50%";
    this.$el.style.background = options.color;
  }
}

const CircleRed = new CircleItem({
  selector: "#circleRed",
  color: "red",
  size: 50,
});

const CircleGreen = new CircleItem({
  selector: "#circleGreen",
  color: "green",
  size: 80,
});

const CircleBlack = new CircleItem({
  selector: "#circleBlack",
  color: "black",
  size: 30,
});



///---------------

function Car(name, color) {
  this.name = name;
  this.color = color;
}

Car.prototype.message = function () {
  console.log(`${this.name} is ${this.color} color`);
};

Car.prototype.start = function () {
  console.log(`${this.name} is start!!!`);
};

const BMW = new Car("bmw", "red");
const opel = new Car("opel", "green");


// Mixin
///--------------
let message = {
  messageHello() {
    console.log(`Hello, ${this.name}`);
  },

  messageBey() {
    console.log(`Bye, ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, message);

new User("Іван").messageHello();

if (!Math.trunc){};//якщо новий метод не працює, пишемо його логіку самостійно 

// додавати опис компонентів високого рівня, що вони роблять та як взаємодіють

// коментувати
// -- загальну архітектуру високого рівня
// -- використання функцій
// -- важливі рішення якщо вони не очевидні 

// писати читабельний та максимально зрозумілий простий код 

function createEleme() {}

function useElem() {}

function useElemItem(){}

let elem = createElem(); // оголошуємо або спочатку або вкінці 
useElem();
useElemItem();

// використовувати зрозумілі імена змінних та функцій
