Here’s the **clear, concise explanation** JS devs mean when they say *“lexical”* and *“lexical scope”*.

---

## What does **lexical** mean?

> **Lexical = based on where the code is written (text position), not how it is called.**

In simple words:
**the structure of your source code decides behavior.**

---

## What is **lexical scope**?

> **Lexical scope means a function can access variables from the scope where it was defined, not where it was called.**

JavaScript uses **lexical scoping**.

---

## Tiny example (this explains everything)

```js
let x = 10;

function outer() {
  let y = 20;

  function inner() {
    console.log(x, y);
  }

  inner();
}

outer();
```

### Why this works

* `inner()` is **written inside** `outer()`
* So it can access:

  * its own scope
  * `outer`’s scope
  * global scope

This lookup chain is fixed **at write-time**.

---

## Scope chain (visual intuition)

![Image](https://miro.medium.com/1%2AaQPoX4RrVgY-mbxnwrRzIg.jpeg)

![Image](https://images.ctfassets.net/pzhspng2mvip/1d5LNFu1ftEWvcMipQd1GN/0e857b697ae5145af31467e30749586a/2-scope-chain.png)

```
inner → outer → global
```

JS always walks **upward**, never sideways or downward.

---

## Why JS devs keep saying “lexical”

Because **many core JS features depend on it**:

### 1️⃣ Closures

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
```

Works **only because of lexical scope**.

---

### 2️⃣ `this` confusion (arrow functions)

Arrow functions take `this` **lexically** (from surrounding scope).

```js
const obj = {
  x: 10,
  fn: () => console.log(this.x)
};
```

---

### 3️⃣ Predictability

JS behavior can be understood by **just reading the code**, no runtime guessing.

---

## What JS does **NOT** use

❌ **Dynamic scoping** (used in some old languages)

Dynamic scoping means:

> “Scope depends on who called the function”

JavaScript **does NOT** work this way.

---

## JS vs others (quick)

| Language   | Scoping              |
| ---------- | -------------------- |
| JavaScript | Lexical              |
| Python     | Lexical              |
| C / C++    | Lexical              |
| Old Lisp   | Dynamic (historical) |

---

## One-line takeaway (perfect to remember)

> **Lexical scope means JS decides variable access based on where functions are written, not where they are called.**

That’s exactly what JS devs mean when they say *“lexical”*.
