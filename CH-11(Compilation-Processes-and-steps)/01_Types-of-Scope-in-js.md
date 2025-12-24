In JavaScript, there are **5 practical scopes** you should know.
(Interview answers usually expect **3**, but that’s incomplete.)

---

## ✅ The 5 scopes in JavaScript

### 1️⃣ **Global Scope**

* Variables accessible **everywhere**
* In browsers: attached to `window`
* In Node.js modules: file-scoped unless explicitly global

```js
var a = 10;
let b = 20;

function test() {
  console.log(a, b);
}
```

---

### 2️⃣ **Module Scope** (important & often forgotten)

* Applies to **ES modules** (`.mjs` or `type="module"`)
* Variables are **NOT global by default**

```js
// file1.js
const x = 10;

// file2.js
console.log(x); // ❌ ReferenceError
```

👉 This is why modern JS avoids global pollution.

---

### 3️⃣ **Function Scope**

* Variables declared with `var`, `let`, `const` inside a function
* Accessible only inside that function

```js
function foo() {
  var x = 10;
  let y = 20;
}
```

---

### 4️⃣ **Block Scope**

* Created by `{}` blocks
* Works with **`let` and `const` only**
* Includes: `if`, `for`, `while`, `try/catch`

```js
if (true) {
  let x = 10;
}
console.log(x); // ❌
```

⚠️ `var` does NOT respect block scope.

---

### 5️⃣ **Lexical Scope** (HOW scope resolution works)

* Inner scopes can access **outer variables**
* Scope is determined by **where code is written**, not called

```js
function outer() {
  let x = 10;

  function inner() {
    console.log(x); // ✔
  }
  inner();
}
```

This is the foundation of **closures**.

---

## ⚠️ Special / edge scopes (rarely used)

### ❌ `eval()` scope

* Dynamically creates scope
* Avoided for security & performance

### ❌ `with` scope (deprecated)

* Creates ambiguous scope
* Forbidden in strict mode

---

## 🧠 Interview-ready summary

> **JavaScript has 5 scopes:**
>
> * Global
> * Module
> * Function
> * Block
> * Lexical (scope resolution model)

---

## 🔑 One-line takeaway

> **Scopes define WHERE a variable is accessible; lexical scoping defines HOW JS finds it.**

If you want, I can:

* Draw a **scope chain diagram**
* Explain **TDZ using scope**
* Compare **JS vs C++ scope rules**
