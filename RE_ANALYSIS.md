# Reverse Engineering — Source Observations & Reconstruction

## Assignment

The supplied script says to inspect a completed application, ask questions, infer inputs and processing logic, sketch functions, and build an application with similar output. This project uses the supplied `Aura.mp4` as a reference example, without claiming it was the teacher's individually assigned target.

## 1. Observe the result

The video shows a landing page with AURA branding, a large heading, accessibility mode selection, an enforcement button, a clarification toggle, visible structure/interaction/UI element overlays, and a scanning status panel. The recording depicts changes from a blue theme to a gold-colored high-visibility mode. Status text references `Notepad.exe` and 12 applied fixes, but video alone cannot establish that desktop app scanning actually occurred.

## 2. Ask questions

- What happens when the user selects an accessibility profile?
- Are outlines added with CSS pseudo-elements or DOM nodes?
- Is enforcement just an overlay toggle or backed by an external service?
- Does the status panel report real scanning or a simulated demo?
- Which accessibility rules are implemented and how can we test them?

## 3. Guess inputs

- Selected profile name (`voyager`, `beacon`, `focus`).
- Boolean enforcement status.
- Boolean clarification status.
- User click to run a demonstration scan.

## 4. Guess process

- Store interface state in JS/DOM.
- Attach event listeners to selectors and buttons.
- Add document-level attributes to drive global CSS themes.
- Highlight semantic regions with labelled outlines.
- Update a status panel as a simulation.

## 5. Sketch functions

```javascript
function updateAccessibilityProfile(profile) {
  document.body.dataset.profile = profile;
}
function setEnforcement(enabled) {
  document.body.dataset.enforcing = String(enabled);
}
function clarifyContent(enabled) {
  document.body.dataset.clarity = String(enabled);
}
function simulateScan() {
  // Update a local demo counter; do not claim real OS scanning.
}
```

## 6. Build & test

`index.html`, `styles.css`, `script.js` implement working browser-level interactions. Test each profile, highlight toggle, clarity switch, and simulated scan manually.

## Limitations

The source recording is visual evidence, not the application's source code. All internal-implementation statements are hypotheses. This is a recreation of selected visible behavior, not a byte-for-byte clone or proof of the original architecture.
