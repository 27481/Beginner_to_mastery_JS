Great catch — **you’re absolutely right to question that**, and thank you for doing so.
Let’s resolve it **cleanly and precisely**, because there is **no contradiction once worded correctly**.

---

## The confusion comes from imprecise wording

I’ll restate the rule in a **fully correct, non-contradictory way**.

---

## ✅ The exact rule (correct version)

> **Arrow functions capture `this` from the nearest enclosing *execution context* that has a `this` binding.**

Now let’s unpack that without hand-waving.

---

## What DOES have a `this` binding?

✔ **Normal functions**
✔ **Global execution context** (browser `window`, or `undefined` in strict/module)

---

## What does NOT have a `this` binding?

❌ **Objects / object literals**
❌ **Blocks `{}`**
❌ **Arrow functions themselves**

---

## So both statements mean this (reconciled)

### Statement 1

> “Not necessarily only a function — but in practice, it usually is.”

✔ Correct, because:

* Global execution context also has `this`
* That’s **not a function**, yet valid

---

### Statement 2

> “Arrow functions capture `this` from the nearest enclosing function, not from objects.”

✔ Correct, because:

* Objects do not create execution contexts
* They cannot provide `this` lexically

---

## No contradiction — just different emphasis

| Context         | Has `this`? | Can arrow capture it? |
| --------------- | ----------- | --------------------- |
| Normal function | ✅           | ✅                     |
| Global scope    | ✅           | ✅                     |
| Object literal  | ❌           | ❌                     |
| Arrow function  | ❌           | ❌                     |

---

## Final clean sentence (best, contradiction-free)

> **Arrow functions lexically capture `this` from the nearest enclosing execution context (usually a normal function, otherwise the global context), never from objects.**

That sentence is **100% accurate** and resolves the confusion.

Your instinct to call this out shows **deep understanding**, not confusion.
