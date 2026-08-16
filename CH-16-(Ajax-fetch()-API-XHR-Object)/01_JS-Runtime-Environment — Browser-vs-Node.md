Yes. One correction first: **don't call everything in this list a "Web API."** Some are JavaScript built-ins, while others are APIs exposed by both browser and Node.js.

Here is a clean note you can put in your JS folder:

# JavaScript Runtime APIs — Browser vs Node.js

**Important:** JavaScript is the language. Browser and Node.js are different **runtime environments** that provide APIs around JavaScript.

## APIs / Objects available in BOTH Browser and Node.js

| API / Object      | Browser | Node.js       | Purpose                          |
| ----------------- | ------- | ------------- | -------------------------------- |
| `console`         | ✅       | ✅             | Logging/debugging                |
| `setTimeout()`    | ✅       | ✅             | Run code after a delay           |
| `setInterval()`   | ✅       | ✅             | Run code repeatedly              |
| `clearTimeout()`  | ✅       | ✅             | Cancel timeout                   |
| `clearInterval()` | ✅       | ✅             | Cancel interval                  |
| `Promise`         | ✅       | ✅             | Handle asynchronous operations   |
| `URL`             | ✅       | ✅             | Parse/build URLs                 |
| `URLSearchParams` | ✅       | ✅             | Work with URL query parameters   |
| `fetch()`         | ✅       | ✅ Modern Node | Make HTTP requests               |
| `AbortController` | ✅       | ✅             | Cancel async operations/requests |
| `EventTarget`     | ✅       | ✅             | Event-based programming          |
| `Event`           | ✅       | ✅             | Represent events                 |
| `FormData`        | ✅       | ✅ Modern Node | Build form/request data          |
| `Blob`            | ✅       | ✅ Modern Node | Represent binary data            |
| `Headers`         | ✅       | ✅ Modern Node | HTTP headers                     |
| `Request`         | ✅       | ✅ Modern Node | HTTP request representation      |
| `Response`        | ✅       | ✅ Modern Node | HTTP response representation     |
| `TextEncoder`     | ✅       | ✅             | Encode text into bytes           |
| `TextDecoder`     | ✅       | ✅             | Decode bytes into text           |
| Web Streams       | ✅       | ✅ Modern Node | Streaming data                   |
| Web Crypto API    | ✅       | ✅             | Cryptographic operations         |

## Browser-only / Primarily Browser APIs

These are the APIs you normally associate with the browser:

```text
DOM
window
document
HTMLElement
HTMLDivElement
XMLHttpRequest
localStorage
sessionStorage
WebSocket
Geolocation
Notification
Canvas
Web Audio API
WebRTC
Service Workers
IndexedDB
History API
Clipboard API
```

> Some of these now have Node.js equivalents or partial implementations, so "browser-only" is mainly from a practical learning perspective.

## Node.js-specific APIs

Node provides APIs for things browsers normally don't allow directly:

```text
fs          → File system
path        → File paths
http        → HTTP server/client
https       → HTTPS
os          → Operating system information
process     → Current Node process
child_process → Run processes
cluster     → Multi-process applications
worker_threads → Threads
stream      → Node streams
events      → EventEmitter
Buffer      → Binary data
```

## The important distinction

### JavaScript language features

Provided by the JavaScript engine:

```js
let
const
function
class
Array
Object
Map
Set
Promise
async / await
```

### Runtime APIs

Provided by the environment:

```text
Browser
 ├── DOM
 ├── document
 ├── XMLHttpRequest
 ├── localStorage
 ├── fetch
 └── timers

Node.js
 ├── fs
 ├── process
 ├── Buffer
 ├── http
 ├── path
 ├── fetch
 └── timers
```

### Example

```js
console.log("Hello");
setTimeout(() => console.log("Done"), 1000);
```

Works in:

```text
Browser ✅
Node.js  ✅
```

But:

```js
document.querySelector("h1");
```

works in:

```text
Browser ✅
Node.js  ❌
```

And:

```js
const fs = require("fs");
fs.readFileSync("data.txt");
```

works in:

```text
Browser ❌
Node.js  ✅
```

**Key takeaway:**

> **JavaScript ≠ Browser ≠ Node.js**

JavaScript is the language; Browser and Node.js are environments that provide different APIs to JavaScript.
