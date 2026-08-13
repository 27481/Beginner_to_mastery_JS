Actually, **functions *are* hoisted in JavaScript** — but it depends on **how you define the function**. This distinction is really important.

### 1. Function declaration → fully hoisted

```js
sayHello();

function sayHello() {
    console.log("Hello");
}
```

This works.

During the creation phase, JavaScript registers the function declaration, so the function is available before the line where it appears.

Conceptually:

```text
Creation phase:
sayHello → [function object]

Execution phase:
sayHello() → works
```

---

### 2. Function expression with `var` → variable is hoisted, function isn't

```js
sayHello(); // ❌ TypeError

var sayHello = function() {
    console.log("Hello");
};
```

Here, only the **variable declaration** is hoisted:

```js
var sayHello;
```

So initially:

```text
sayHello → undefined
```

Then during execution:

```js
sayHello = function() { ... };
```

Only **after this line** does `sayHello` point to a function.

That's why:

```js
sayHello();
```

before the assignment gives:

```text
TypeError: sayHello is not a function
```

---

### 3. Function expression with `let` / `const`

```js
sayHello(); // ❌ ReferenceError

const sayHello = function() {
    console.log("Hello");
};
```

Here `sayHello` is technically **hoisted**, but it is placed in the **Temporal Dead Zone (TDZ)**.

So:

```text
Creation phase:

sayHello → <uninitialized>
              ↑
             TDZ
```

You cannot access it until execution reaches:

```js
const sayHello = ...
```

---

### 4. Arrow functions behave similarly

```js
sayHello(); // ❌ ReferenceError

const sayHello = () => {
    console.log("Hello");
};
```

An arrow function is basically a **function expression**, so the function itself isn't available before the initialization.

---

## The key misconception

You might be thinking:

> "Variables are hoisted, but functions aren't."

The better mental model is:

| Definition               | Hoisted?                 | Usable before declaration? |
| ------------------------ | ------------------------ | -------------------------- |
| `function foo(){}`       | ✅ Function itself        | ✅ Yes                      |
| `var foo = function(){}` | ✅ Variable (`undefined`) | ❌ No                       |
| `let foo = function(){}` | ✅ Binding                | ❌ TDZ                      |
| `const foo = () => {}`   | ✅ Binding                | ❌ TDZ                      |

So **function declarations actually get the strongest form of hoisting**.

The interesting question is **why JavaScript treats function declarations differently**. That's because during the execution-context creation phase, the engine creates the function object for a function declaration immediately, whereas `var` gets initialized to `undefined` and `let`/`const` remain uninitialized until execution reaches their declaration.
