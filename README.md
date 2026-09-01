# HTML Dialog Playground

This repository contains a small native browser dialog demo built with plain HTML, CSS, and Vite. The current implementation focuses on the browser's built-in `<dialog>` element, showing how to open, close, confirm, and animate it without a framework.

## Current project

The working implementation lives in the [HTML](HTML) folder and demonstrates:

- native `<dialog>` usage
- declarative commands with `command` and `commandfor`
- form-based confirmation flow with `method="dialog"`
- open and close transitions using CSS
- a lightweight Vite setup with Tailwind

## Repository layout

- [HTML](HTML): the native dialog demo project
- [Angular](Angular): reserved for the Angular version of this project

## Why this repo exists

The goal is to compare the same dialog interaction pattern across implementations:

- native browser API in HTML
- component-based Angular version in the future

This makes it easy to see how the same user experience translates from a minimal declarative approach to a framework-driven implementation.

## Run the current demo

From the root of the repository:

```bash
cd HTML
npm install
npm run dev
```

Then open the local Vite URL in the browser.

## Build for production

```bash
cd HTML
npm run build
```

## Planned Angular version

The Angular folder is intended for a future refactor that keeps the same behavior and UX while using Angular patterns such as:

- component-based dialog structure
- reusable dialog service or wrapper
- Angular templates and event handling
- optional animations with Angular transitions or CSS

## Notes

This project is intentionally small and focused on browser-native dialog capabilities. The Angular version will likely preserve the same interaction model while adapting it to Angular conventions and component structure.
