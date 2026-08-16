
> **“`setTimeout()` schedules a callback to execute once after a specified delay, 
whereas `setInterval()` schedules a callback to execute repeatedly at approximately the specified interval.”**

### Example

```js
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

This executes **once**, after approximately 2 seconds.

```js
setInterval(() => {
    console.log("Hello");
}, 2000);
```

This executes **repeatedly**, approximately every 2 seconds, until cancelled.

### The important part: they're asynchronous

Both are **Web APIs provided by the browser**, not JavaScript language features themselves.

For example:

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

Even with `0ms`, the callback doesn't execute immediately. The browser's timer mechanism schedules it, and the callback eventually enters the **task queue**, where the **event loop** can move it to the call stack when the stack is empty.

### How do you cancel them?

`setTimeout()` → `clearTimeout()`

```js
const id = setTimeout(fn, 2000);

clearTimeout(id);
```

`setInterval()` → `clearInterval()`

```js
const id = setInterval(fn, 2000);

clearInterval(id);
```

### ⭐ A stronger interview answer

If the interviewer wants more depth:

> **“`setTimeout` creates a one-shot timer, while `setInterval` creates a repeating timer. The specified delay is not a guarantee that the callback will execute exactly at that time; it is the minimum delay before the callback becomes eligible to run. The callback still has to wait for the call stack and event loop.”**

That's the part that demonstrates you **actually understand the event loop**, rather than just knowing the syntax.

One subtle point: **`setInterval(fn, 1000)` doesn't mean JavaScript will execute `fn` exactly every 1000 ms.** If the main thread is busy, the callback waits.
