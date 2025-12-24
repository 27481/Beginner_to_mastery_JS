Short, **fundamental** answer first — then the intuition.

---

## Core reason (1 line)

> **JavaScript hoists because it is compiled in two phases: creation phase and execution phase.**

Hoisting is a **side effect of the creation phase**, not a “feature added for fun”.

---

## What JS engine actually does

![Image](https://media.licdn.com/dms/image/v2/D4E12AQEaJ3m0YqcBaA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689691669450?e=2147483647\&t=TrO-9cZuwx9_K4neQJpNjqZJza8gHyylEhLU3wpW3qU\&v=beta)

![Image](https://media2.dev.to/dynamic/image/width%3D1000%2Cheight%3D420%2Cfit%3Dcover%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fthepracticaldev.s3.amazonaws.com%2Fi%2Fkaf11wh85tkhfv1338b4.png)

### Phase 1: Creation phase

JS engine:

* Creates **Execution Context**
* Allocates memory for:

  * `var` → `undefined`
  * `let / const` → uninitialized (TDZ)
  * `function declarations` → full function body
* Builds **scope chain**

⚠️ No code is executed yet.

---

### Phase 2: Execution phase

* Runs code line by line
* Assigns values
* Calls functions

---

## Why hoisting was NECESSARY (historical reason)

JavaScript was designed to:

* Run **in browsers**
* Be **for beginners**
* Allow **functions to be used before declaration**

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

Without hoisting → this would crash.

---

## Why `let` / `const` still hoist (but differently)

They are **hoisted into the scope**, but:

* Not initialized
* Kept in **TDZ**

This allows:

* Block scope
* Safer code
* Early error detection

```js
console.log(x); // ❌ TDZ
let x = 10;
```

---

## Why C++ does NOT hoist

![Image](https://images.hanselman.com/blog/Windows-Live-Writer/d7cbc8018a53_122C0/1yoy1Fal_3.jpg)

![Image](https://developingthefuture.net/wp-content/uploads/2013/03/GCC_CompilationProcess.png)

| JavaScript             | C++                         |
| ---------------------- | --------------------------- |
| Runtime compiled       | Ahead-of-time compiled      |
| Needs scope at runtime | Scope known at compile time |
| Hoisting required      | Hoisting unnecessary        |

---

## Important correction to a common myth

❌ “JS moves code to the top”
✔ **JS only moves declarations, not assignments**

```js
console.log(a); // undefined
var a = 10;
```

Internally:

```js
var a;
console.log(a);
a = 10;
```

---

## Mental model (remember this)

> **JS hoists to know “what exists” before running anything.**

---

## One-line takeaway

> **Hoisting exists so the JS engine can build scopes before executing code.**

If you want next:

* Hoisting + closures
* Why arrow functions behave differently
* Why hoisting causes so many interview traps
