This is the **right question** to end hoisting confusion.
Short answer first, then the exact reason.

---

## Short answer (1 line)

> **`var` was designed to be permissive (legacy JS), while `let/const` were designed to be safe — TDZ was added to prevent bugs.**

Now the **real reason** 👇

---

## What happens in Creation Phase

### `var`

```js
console.log(a); // undefined
var a = 10;
```

Creation phase:

```js
a → undefined
```

So access is allowed → value is `undefined`.

---

### `let / const`

```js
console.log(b); // ❌ ReferenceError (TDZ)
let b = 10;
```

Creation phase:

```js
b → <uninitialized>
```

Access is **blocked** until initialization line.

---

## Why this difference exists (the key logic)

### 1️⃣ `var` is OLD (1995 design)

* No block scope
* Function scope only
* Silent bugs everywhere
* Backward compatibility forced this behavior

Example bug:

```js
if (false) {
  var x = 10;
}
console.log(x); // undefined 😵
```

JS couldn’t break this later.

---

### 2️⃣ `let / const` were FIXES (ES6)

They were created to:

* Enforce block scope
* Prevent accidental early access
* Catch bugs early

TDZ exists to say:

> “You declared it, but you can’t touch it until you initialize it.”

---

## Why not make `var` also TDZ?

Because this would break **millions of websites**.

```js
console.log(a);
var a = 10;
```

Changing this now would crash old code → impossible.

So JS added **new rules for new keywords**, not old ones.

---

## The core design rule (remember this)

> **Hoisting answers “does it exist?”
> TDZ answers “can you use it yet?”**

| Keyword | Exists in scope | Usable before init |
| ------- | --------------- | ------------------ |
| `var`   | ✅               | ✅ (`undefined`)    |
| `let`   | ✅               | ❌ (TDZ)            |
| `const` | ✅               | ❌ (TDZ)            |

---

## Why `undefined` is dangerous (why TDZ is better)

```js
if (x) {
  // logic
}
var x = false;
```

This silently works but is **wrong logic**.

With `let`:

```js
if (x) {} // ❌ error
let x = false;
```

Bug caught immediately.

---

## Visual intuition (TDZ)

![Image](https://cdn.hashnode.com/res/hashnode/image/upload/v1732976481087/1a2b33ca-cd03-453d-8719-5aca10ceb81e.jpeg)

![Image](https://media2.dev.to/dynamic/image/width%3D1280%2Cheight%3D720%2Cfit%3Dcover%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8a9pfl5d1lnwu4lfn8kq.png)

```
Scope start
│
│  TDZ (access forbidden)
│
let x = 10   ← safe point
│
│  usable
```

---

## One-line takeaway (perfect)

> **`var` gives `undefined` because old JS allowed unsafe early access; `let/const` use TDZ to prevent that class of bugs.**

That’s the *real* reason — not syntax, but **language evolution + safety**.
