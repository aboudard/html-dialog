# html-dialog

A small Vite project demonstrating the native HTML dialog element with declarative commands and animated open/close transitions.

## Stack

- Vite
- Tailwind CSS (built via Vite plugin)
- Native HTML dialog API

## Features

- Declarative open button using command and commandfor
- Declarative close button using command and commandfor
- Confirm action using form method="dialog"
- Dialog animation using opacity + scale
- Opening transition based on @starting-style

## Demo key points

### HTML attributes used

- `<dialog id="my-dialog">`: defines the native dialog element.
- `command="show-modal"` on the open button: opens the target dialog as a modal.
- `commandfor="my-dialog"` on the open button: targets the dialog by id.
- `command="close"` on the close button: closes the target dialog.
- `commandfor="my-dialog"` on the close button: targets the same dialog for close.
- `<form method="dialog">`: submitting the form closes the dialog and sets a return value.
- `<button value="confirm" type="submit">`: sets `dialog.returnValue` to `confirm` on submit.
- Pressing Escape cancels the dialog (native browser behavior)

### JavaScript APIs and events associated

- `dialog.addEventListener('close', handler)`: runs when the dialog closes.
- `dialog.addEventListener('cancel', handler)`: runs when user cancels (for example, Escape key).
- `dialog.returnValue`: reads the value from form submission (`confirm` in this demo).

### Declarative-first, JavaScript fallback

- This demo opens and closes with declarative attributes (`command`, `commandfor`) first.
- If you need broader compatibility, the equivalent JS methods are:
   - `dialog.showModal()` for opening.
   - `dialog.close()` for closing.

### Minimal example: declarative vs JavaScript fallback

Declarative HTML:

```html
<button command="show-modal" commandfor="my-dialog" type="button">Open</button>

<dialog id="my-dialog">
   <form method="dialog">
      <button command="close" commandfor="my-dialog" type="button">Close</button>
      <button value="confirm" type="submit">Confirm</button>
   </form>
</dialog>
```

JavaScript fallback:

```js
const dialog = document.querySelector('#my-dialog');
const openBtn = document.querySelector('[command="show-modal"][commandfor="my-dialog"]');
const closeBtn = document.querySelector('[command="close"][commandfor="my-dialog"]');

openBtn?.addEventListener('click', () => dialog?.showModal());
closeBtn?.addEventListener('click', () => dialog?.close());
```

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

## Deploy to GitHub Pages

This repository includes a workflow at .github/workflows/deploy-pages.yml.

- Trigger: push to main (and manual run with workflow_dispatch)
- Build command in CI: npm run build -- --base=/${{ github.event.repository.name }}/
- Artifact: dist/

One-time repository setup:

1. Open repository Settings > Pages.
2. Set Source to GitHub Actions.

Expected site URL for this repository:

- https://aboudard.github.io/html-dialog/

## File overview

- index.html: Markup and Tailwind utility classes
- styles.css: Tailwind import plus dialog-specific transition rules
- main.js: Dialog state text updates (close/cancel events)

## Tailwind (Vite plugin)

Tailwind CSS v4 is compiled through the `@tailwindcss/vite` Vite plugin.

- Tailwind is imported in styles.css:
  - `@import "tailwindcss";`
- Configuration is in vite.config.js via the `tailwindcss()` plugin.
- No `tailwind.config.js` or PostCSS config is needed in v4.

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

- Make sure styles.css includes `@import "tailwindcss";` at the top.
- Verify that vite.config.js includes the `tailwindcss()` plugin.
- Restart the dev server after changing vite.config.js.

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
