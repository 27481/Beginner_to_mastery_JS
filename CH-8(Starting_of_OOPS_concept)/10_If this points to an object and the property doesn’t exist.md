Good — this is a **perfect edge case**, and the answer is very simple once you apply the rules you already know.

---

## Your code

```js
const outer = {
  name: "Outer",
  inner: function () {
    const arrow = () => {
      console.log(this.varrr);
    };
    arrow();
  }
};

outer.inner();
```

---

## What happens step-by-step

### 1️⃣ How `this` is decided

* `inner()` is called as `outer.inner()`
* So inside `inner()` → `this === outer`

### 2️⃣ Arrow function behavior

* `arrow` **captures `this` lexically**
* That means:

  ```js
  this === outer
  ```

### 3️⃣ Property lookup

```js
this.varrr   // → outer.varrr
```

But `outer` is:

```js
{ name: "Outer" }
```

❌ There is **no `varrr` property**

---

## ✅ Final result

```txt
undefined
```

---

## Important clarification (this is key)

> **Arrow functions do NOT search outer scopes for property names.
> They only use `this`, and then do normal object property lookup.**

This is **NOT** like closures:

```js
console.log(varrr); // ❌ ReferenceError
console.log(this.varrr); // ✅ undefined
```

Why?

* Missing variable → error
* Missing object property → `undefined`

---

## Final one-line rule (lock it in)

> **If `this` points to an object and the property doesn’t exist, JavaScript safely returns `undefined`.**

Your reasoning was correct — there *was* a valid `this`, just **no matching key** to read from it.
