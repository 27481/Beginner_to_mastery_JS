### Prototype in JS (short & clear)

**Every JavaScript function has a property called `prototype`.**

👉 It is **an object used to share methods and properties** with all objects created by that function (via `new`).

---

### Why it exists

To avoid copying methods into every object → **memory efficient OOP**.

---

### Simple example

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return "Hi " + this.name;
};

const u1 = new User("A");
const u2 = new User("B");
```

* `u1` and `u2` **do not contain** `sayHi`
* JS looks for it here:

```
u1 → [[Prototype]] → User.prototype → sayHi
```

---

### Important facts (interview-ready)

* `prototype` exists **only on functions**
* Objects have `[[Prototype]]` (accessible via `__proto__`)
* `new` does this internally:

  1. creates empty object
  2. sets `obj.__proto__ = Constructor.prototype`
  3. calls constructor with `this = obj`

---

### One-line definition (best)

> **Function.prototype is the object that becomes the prototype of all objects created using that function.**

That’s it.
If you want, I can map this **directly to C++ virtual functions** in 30 seconds.
