# html-dialog

A small Vite project demonstrating the native HTML dialog element with declarative commands and animated open/close transitions.

## Stack

- Vite
- Tailwind CSS (local build via PostCSS)
- Native HTML dialog API

## Features

- Declarative open button using command and commandfor
- Declarative close button using command and commandfor
- Confirm action using form method="dialog"
- Dialog animation using opacity + scale
- Opening transition based on @starting-style

## Project setup

1. Install dependencies:
   npm install

2. Start the dev server:
   npm run dev

3. Build for production:
   npm run build

4. Preview the production build:
   npm run preview

## Available scripts

- dev: Runs Vite in development mode
- build: Builds the project into dist
- preview: Serves the built output from dist

## File overview

- index.html: Markup and Tailwind utility classes
- styles.css: Tailwind layers plus dialog-specific transition rules
- main.js: Dialog state text updates (close/cancel events)
- tailwind.config.js: Tailwind content scanning config
- postcss.config.js: PostCSS plugin config

## Tailwind (local)

Tailwind is compiled locally through Vite + PostCSS.

- Tailwind directives are in styles.css:
  - @tailwind base;
  - @tailwind components;
  - @tailwind utilities;

- Content scanning is configured in tailwind.config.js for:
  - index.html
  - main.js

## Notes on dialog transitions

The transition behavior uses native dialog rendering plus CSS for animation.

- dialog scales and fades in/out
- backdrop fades in/out
- @starting-style is used for the opening transition baseline

Because @starting-style and discrete display/overlay transitions are advanced CSS features, behavior may vary in older browsers.

## Compatibility matrix

| Feature | Chrome / Edge | Firefox | Safari | Fallback |
| --- | --- | --- | --- | --- |
| Native `<dialog>` element | Supported in modern versions | Supported in modern versions | Supported in modern versions | Use a custom modal pattern if unavailable |
| `command` + `commandfor` declarative dialog actions | Newer support, verify in your target version | Limited / evolving support | Limited / evolving support | Add JS handlers with `showModal()` and `close()` |
| CSS `@starting-style` | Newer support | Newer support | Newer support | Keep functional behavior without transition |
| `allow-discrete` (`display` / `overlay` transition) | Newer support | Partial / evolving support | Partial / evolving support | Keep opacity/transform transition only |

Test on your target browser versions before release. If compatibility is critical, enable a JavaScript fallback path in main.js for open/close actions and keep animations progressive.

## Troubleshooting

### Tailwind classes are not applied

- Make sure styles.css includes these directives at the top:
   - @tailwind base;
   - @tailwind components;
   - @tailwind utilities;
- Verify tailwind.config.js content includes all files where classes are used (for this project: index.html and main.js).
- Restart the dev server after changing tailwind.config.js.

### New Tailwind class does not appear in output

- Confirm the class name is written as a static string in markup.
- If class names are generated dynamically in JavaScript, Tailwind may not detect them during scan.
- Run a clean build with npm run build and check the generated CSS in dist/assets.

### Dialog opens, but open/close transition does not animate

- Check that styles.css still contains dialog transition rules, including @starting-style blocks.
- Ensure the dialog is opened via command="show-modal" and commandfor="my-dialog".
- Verify the dialog id matches commandfor exactly.

### Dialog button commands do nothing

- Confirm your browser supports declarative dialog commands (command and commandfor attributes).
- As a fallback for unsupported browsers, you can wire showModal() and close() in main.js.

### Build works, but preview looks different from dev

- Re-run npm run build and then npm run preview to ensure dist reflects latest changes.
- Clear browser cache or use a hard refresh when testing preview.

### Dependency or toolchain issues

- Reinstall dependencies:
   - Remove node_modules and package-lock.json
   - Run npm install
- Verify Node.js is up to date (recent LTS recommended).
