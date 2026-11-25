# Contributing

Thanks for your interest in improving Safe Route Feedback Log.

## Ground rules

- Be respectful. See the [Code of Conduct](CODE_OF_CONDUCT.md).
- Keep the app **standalone and offline**: no external scripts, fonts, trackers, or network calls.
- Keep it **dependency-free**: the app should keep working by opening `index.html` directly.
- Never log or transmit user data. Everything stays in the browser.

## Getting started

1. Fork the repository and clone your fork.
2. Create a branch: `git checkout -b feature/short-description`.
3. Edit `index.html` and test it by opening the file in a browser.
4. Run the checks (Node.js 18 or later):
   ```bash
   node scripts/check.js
   ```
5. Commit with a clear message, push, and open a pull request.

## What to test manually

- Add, filter, update status, and delete a report
- Import `sample_import_template.csv`, plus a CSV with invalid rows
- Each export (CSV, JSON, Markdown, audit)
- Layout on a narrow (mobile) screen
- Behaviour with empty local storage

## Code style

- User-supplied text must always be escaped before it is rendered as HTML (use the existing `esc()` helper).
- Prefer small, readable functions and descriptive names.
- Follow `.editorconfig` (UTF-8, LF, 2-space indent).

## Pull requests

- Keep each PR focused on one change.
- Describe what changed and why, and link the related issue.
- Update `README.md`, `docs/`, and `CHANGELOG.md` when behaviour changes.

## Reporting bugs and requesting features

Use the issue templates. For security issues, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.
