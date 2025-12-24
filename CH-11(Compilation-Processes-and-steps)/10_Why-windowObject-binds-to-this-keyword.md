
Short answer first, then the **real payoff**.

---

## Short answer (1 line)

> **Binding `this` to `window` gave browsers a single, convenient global namespace so scripts could access browser APIs and globals without extra syntax.**

---

## What browsers *actually* gained from this design

### 1️⃣ **A universal global namespace**

By binding:

```js
this === window
```

Browsers made **everything globally accessible**:

```js
alert("Hi");        // works
this.alert("Hi");  // also works
window.alert("Hi");
```

So beginners didn’t need to learn objects first.

---

### 2️⃣ **Implicit access to browser APIs**

The browser exposes tons of APIs on `window`:

* `document`
* `location`
* `history`
* `setTimeout`
* `console`

Because `this → window`, all of these were instantly usable:

```js
setTimeout(...)
document.getElementById(...)
```

No imports. No qualifiers. No boilerplate.

---

### 3️⃣ **Simpler mental model (1995 mindset)**

Early JS goal was:

> “Let non-programmers add small scripts to HTML pages.”

So they wanted:

* One global object
* One execution context
* One `this`

Think:

```js
this === "the page"
```

That’s why `window` literally represents **the browser window**.

---

### 4️⃣ **Function calls needed a default `this`**

When you call:

```js
function foo() {
  console.log(this);
}
foo();
```

JS must bind `this` to *something*.

Choices were:

* `undefined` → breaks old code
* `null` → useless
* `window` → already global, useful

So browser chose `window`.

---

### 5️⃣ **Backward compatibility (the BIG one)**

Millions of old scripts relied on this:

```js
var x = 10;
function show() {
  console.log(this.x);
}
show(); // expected 10
```

Changing `this` would:

* Break old websites
* Break ads, analytics, legacy scripts

So the rule stayed.

---

## Why this feels bad today (but wasn’t then)

What browsers *didn’t* know in 1995:

* JS would become a large-scale language
* Apps would be modular
* Globals would be dangerous

So later they added:

* `"use strict"`
* ES modules
* `let` / `const`
* Arrow functions (lexical `this`)

…but **could not remove** the old behavior.

---

## Visual intuition

![Image](https://miro.medium.com/0%2A_gGVnR2bf5yqwIwx.png)

![Image](https://i.sstatic.net/mBQkq.png)

```
window
 ├── document
 ├── console
 ├── alert
 ├── setTimeout
 └── your globals
```

`this` just points here by default.

---

## Final one-line takeaway (memorize this)

> **Browsers bound `this` to `window` to make the global environment easy to access and to avoid breaking early web scripts.**

That’s the *actual* benefit — convenience + compatibility, not elegance.
