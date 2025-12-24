Because of **how JavaScript was originally designed to run in browsers**.

Here’s the **clean, exact reason** — no fluff.

---

## Core reason (1 line)

> **In browsers, the global execution context binds `this` to the global object, which is `window`.**

That’s it.

Now let’s unpack *why*.

---

## What happens when a JS program starts (browser)

![Image](https://media.licdn.com/dms/image/v2/D5612AQGLiPuwCz7lHQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697821748372?e=2147483647\&t=ZpwgzrPzsrTv8A7F5DgXnTSGTp2J5pmY2YhCTq6JMuM\&v=beta)

![Image](https://blog.openreplay.com/images/javascripts-this-explained-and-demystified/images/image03.png)

When a script loads in a browser:

1. JS engine creates the **Global Execution Context**
2. It creates the **global object**

   * In browsers → `window`
3. It binds:

   ```
   this === window
   ```

So at top-level code:

```js
console.log(this); // window
```

---

## Why `window` specifically?

Because **JS was built for browsers**, and browsers needed:

* A single global object
* To expose:

  * DOM
  * timers
  * APIs
  * globals

So they used:

```
window = global namespace + browser APIs
```

Attaching `this` to `window` made it easy for beginners:

```js
alert("Hi");
// same as
window.alert("Hi");
```

---

## Why not `undefined` or `null`?

Early JS goal:

> “Make things work, not crash.”

If `this` were `undefined`, beginners would constantly break code.

So:

* Non-strict mode → `this = window`
* Strict mode (added later) → safer behavior

---

## Strict mode difference (important)

```js
"use strict";
console.log(this); // undefined
```

Strict mode **fixes** the old design mistake.

---

## Why Node.js behaves differently

Node is **not a browser**.

```js
console.log(this); // {}
```

Because:

* No `window`
* Each file is a module
* `this` ≠ global object

---

## The real design rule (remember this)

> **`this` is NOT lexical — it’s determined by how code is executed.**

At global scope:

* Browser → `window`
* Node → module object
* Strict mode → `undefined`

---

## One-line takeaway

> **`this` points to `window` initially because the browser’s global execution context binds `this` to the global object for backward compatibility.**

That’s the whole reason.

If you want next, I can explain:

* Why `this` inside functions behaves differently
* Why arrow functions fix this mess
* Why `this` is the most hated JS feature
