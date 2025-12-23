In **JavaScript**, the **`constructor`** keyword is **not a standalone keyword** like `class` or `function`.
It is a **special method name** used **inside a class** to initialize objects.

---

## What is `constructor` in JavaScript?

A **constructor** is a **special function** that:

* Runs **automatically** when an object is created using `new`
* Initializes **properties (state)** of the object
* Exists **inside a class**

---

## Basic Example

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Rahul", 22);
console.log(p1.name); // Rahul
console.log(p1.age);  // 22
```

📌 Here:

* `constructor()` runs when `new Person(...)` is executed
* `this` refers to the newly created object

---

## Why is it called `constructor`?

Because it **constructs (builds)** the object:

* Allocates memory
* Assigns properties
* Sets initial state

---

## Rules of `constructor`

✔ Only **one constructor per class**
✔ Name must be **exactly `constructor`**
✔ Cannot be called manually
✔ Automatically invoked by `new`

❌ Not allowed outside a class

---

## Without `constructor` (Default Constructor)

```js
class Test {}

const t = new Test();
```

JS automatically creates an **empty constructor**:

```js
constructor() {}
```

---

## Constructor in Inheritance

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);   // calls parent constructor
    this.breed = breed;
  }
}
```

📌 `super()` **must be called before using `this`** in derived classes.

---

## Is `constructor` same as C++ / Java?

| Feature             | JS          | C++ / Java       |
| ------------------- | ----------- | ---------------- |
| Keyword             | method name | special function |
| Overloading         | ❌ No        | ✅ Yes            |
| Access modifiers    | ❌ No        | ✅ Yes            |
| Default constructor | ✅ Yes       | ✅ Yes            |

JS constructors are **simpler and dynamic**.

---

## Important Interview Line 🚀

> **In JavaScript, `constructor` is a special method inside a class that initializes object properties and is automatically called when an object is created using `new`.**

---

If you want, I can also explain:

* constructor vs factory function
* constructor in prototype-based JS (pre-ES6)
* why JS allows only one constructor

Just tell me 👍

