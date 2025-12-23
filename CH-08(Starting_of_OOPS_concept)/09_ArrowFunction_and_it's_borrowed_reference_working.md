Excellent question — this goes **exactly to the heart of arrow functions**.
Let’s answer **both cases cleanly and separately**.

---

## First lock the core rule (important)

> **Arrow functions do NOT get `this` from the object they are written in.
> They get `this` from where they are DEFINED (lexical scope).**

Objects **do not create scope** in JavaScript.

---

## Your arrow function

```js
const arrow = () => {
  console.log(this.name);
};
```

Placing it inside an object **does NOT change its lexical `this`**.

---

## Case 1️⃣: Surrounding scope does NOT have matching reference

### Example

```js
const obj = {
  name: "Utkarsh",
  arrow: () => {
    console.log(this.name);
  }
};

obj.arrow();
```

### What happens

* Arrow function looks for `this` in **lexical scope**
* Object `{}` is NOT a scope → ignored
* Surrounding scope = global / module

#### Result

* Browser (non-strict): `this === window` → `window.name` → usually `""` or `undefined`
* Strict / module / Node: `this === undefined`

✅ **Output:** `undefined`

---

## Case 2️⃣: Surrounding scope DOES have matching reference

### Example

```js
const outer = {
  name: "Outer",
  inner: function () {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

outer.inner();
```

### What happens

* Arrow function is **defined inside `inner()`**
* `inner()` is a **normal function**
* `this` inside `inner()` → `outer`
* Arrow **captures that `this`**

✅ **Output:**

```
Outer
```

---

## Key insight (this is the “aha” moment)

### ❌ Object literal

```js
{
  arrow: () => {}
}
```

➡️ **No scope → no `this` binding**

### ✅ Function / method

```js
function () {
  const arrow = () => {}
}
```

➡️ **Creates lexical scope → arrow captures `this`**

---

## Visual summary

| Where arrow is defined | `this` comes from      | Works? |
| ---------------------- | ---------------------- | ------ |
| Object literal         | ❌ nowhere useful       | ❌      |
| Inside normal method   | ✅ that method’s `this` | ✅      |
| Global scope           | `window / undefined`   | ❌      |

---

## Final one-line takeaway (memorize this)

> **Arrow functions capture `this` from the nearest enclosing *function*, not from objects.**

That’s the cleanest and most correct mental model.

