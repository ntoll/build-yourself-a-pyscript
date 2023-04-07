# Quick Fire Round

## Performance "Budget"

- (P) 3G feature phone in countryside: TTI, memory, battery
- (N) Mobile web is *a* priority, but not exclusive
- (P) True, but Page Rank gets influenced by these factors

## DOM Access

- (N) Convenient, Pythonic way for "Python" to do UI
  - Elements on screen
  - Event handlers
  - Show: Code snippet on left, what the browser looks like on right
- (P) This is a competitive market!
  - JS frontends have become really innovative
  - Server-side pre-rendering is changing the landscape
  - Show: Collage (animated?): Svelte, Islands, Qwik
- (N) This is a major effort in PyScript, quite exciting
- (N) And this topic gets harder in 5 minutes!
- (N) Come see us if you have experience and ideas
  - Show: Any WIP code snippet

## Storage

- (P) Writing files when there is no "disk"
  - Some pithy image
- (P) Re-think your concept of "storage"
  - Local Storage and IndexedDB via JS
  - Various [Pyodide storages](https://pyodide.org/en/stable/usage/file-system.html#mounting-a-file-system)
  - Help is on the way: OPFS and SQLite
  - "Offline-first" PyScript might be a thing
  - Show: Animated collage of images
- (N) It's a good point for us to re-think storage

## Blocking The UI

- (N) Ever seen this on a web page?
  - Show: Beach ball
- (N) Browsers use a single thread for all JavaScript
  - Show: [screenshot](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread) with highlighting
- (N) Fortunately there's a solution: Web Workers
  - Show: [screenshot](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- (N) We'll just run Pyodide and your Python in a web worker
  - Show: [screenshot](https://pyodide.org/en/stable/usage/webworker.html)
- (P) Yeh, but
  - Web workers don't have access to the DOM, so no UI
  - No object access, just a JSON message passing
- (N) Have no fear, PyScript is here!
  - Explain the work Hood and Anthony are doing
