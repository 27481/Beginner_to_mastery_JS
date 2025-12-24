Excellent question — this gets into **language design philosophy**, not syntax.
Short answer first, then the reasoning.

---

## Short answer (1 line)

> **Python is interpreted at runtime like JavaScript, but it does NOT have a separate creation phase that pre-allocates scope the way JS does — therefore no hoisting.**

Now the **why**.

---

## 1️⃣ “Runtime language” ≠ same execution model

Both JS and Python are **runtime languages**, but:

| JavaScript                       | Python                          |
| -------------------------------- | ------------------------------- |
| Two-phase execution              | Single-pass execution           |
| Creation phase + execution phase | Compile → execute line by line  |
| Scope built before execution     | Scope resolved during execution |
| Hoisting exists                  | No hoisting                     |

So *runtime* ≠ *same scoping model*.

---

## 2️⃣ JavaScript MUST know scope early (browser reason)

JavaScript was designed to:

* Run in browsers
* Handle async callbacks, closures, events
* Allow functions to be referenced before definition

To support this, JS **must know all identifiers upfront**.

That forced:

* Scope creation first
* Memory allocation first
* Hoisting as a side-effect

---

## 3️⃣ Python’s model is simpler & stricter

Python does this:

1. Parse file → build AST
2. Execute top to bottom
3. Variables exist **only after assignment**

```py
print(x)   # ❌ NameError
x = 10
```

Python refuses to guess or pre-allocate.

No TDZ.
No partial initialization.
No “undefined”.

---

## 4️⃣ Python DOES have a *tiny* form of hoisting (but not like JS)

Function **definitions** are created at runtime, not hoisted:

```py
foo()      # ❌ NameError

def foo():
    print("hi")
```

Why?
Because Python executes `def` as a **statement**, not a declaration.

---

## 5️⃣ Why Python avoided hoisting (design choice)

Python philosophy:

> “Explicit is better than implicit”

Hoisting causes:

* Confusing bugs
* `undefined`
* TDZ confusion

Python chose:

* Strict order
* Clear errors
* Predictable flow

---

## 6️⃣ Why JS could not “fix” this later

Because:

* Millions of websites depended on hoisting
* Removing it would break the web

So JS added:

* `let` / `const`
* TDZ
  …but kept hoisting for backward compatibility.

---

## 7️⃣ Key mental difference (remember this)

| JavaScript                       | Python             |
| -------------------------------- | ------------------ |
| “Know everything before running” | “Run and discover” |
| Scope-first                      | Execution-first    |
| Flexible                         | Strict             |

---

## One-line takeaway

> **JS hoists because it builds scope before execution; Python doesn’t because it resolves names during execution.**

That’s the real reason — not “runtime vs compiled”.

