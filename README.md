# Aura Rebuilt — Reverse Engineer a Result

A small, self-contained educational web demo reconstructed from observations of an Aura accessibility demonstration video supplied with an APL assignment.

## Run

Double-click `index.html` on macOS, or run `open index.html` from this folder. No server, npm, or API key is required.

## Observed in the source video

- Dark blue landing page labelled AURA / Aura Enforcer Alpha 0.1.
- Accessibility profile selection, including The Voyager (Color Blind) and The Beacon (Low Vision).
- Start/stop enforcement control and Clarify Content toggle.
- Bright outlines with categories such as UI ELEMENT, STRUCTURE, INTERACTION.
- A scanning/status example referring to `Notepad.exe` and applied fixes.

## Reverse-engineering hypothesis

1. **Inputs:** accessibility profile, enforcement state, clarification state, and demonstration trigger.
2. **State:** a JavaScript object represented here by `data-profile`, `data-enforcing`, `data-clarity` attributes.
3. **Process:** event listeners update state; CSS attribute selectors transform visible presentation; a timer simulates scan progress.
4. **Outputs:** layout changes, text readability changes, visible highlight overlays, and updated status.

## Differences and limitations

This recreation is **not the original Aura application** and does not claim to access Notepad or the operating system. The scan is a clearly marked simulation, and the accessibility changes affect only this webpage. The third profile (Focus) is our own additional feature and is not confirmed from the recording. It is not a medically certified accessibility tool.

## Demo steps

1. Open `index.html` and explain the purpose.
2. Select Voyager, Beacon, then Focus to compare appearance.
3. Click Stop Enforcement, then Start Enforcement to hide/show element outlines.
4. Toggle Clarify Content to reveal simplified explanatory text.
5. Click Run Demo Scan: observe a simulated counter rising to 12.
6. Click How It Works to show the input → process → output explanation.

## Tech

Plain HTML, CSS and JavaScript. No build process or external dependencies.
