# Safe Route Feedback Log

[![CI](../../actions/workflows/ci.yml/badge.svg)](../../actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A standalone, offline web app for recording and tracking community safety observations along routes, such as broken lighting, obstructions, accessibility barriers, and traffic hazards.

There is no server, build step, account, or network connection. The whole app is one file: [`index.html`](index.html).

## Features

- **Log observations** with route, location, category, severity (1 to 5), status, follow-up deadline, reporter, and description
- **Dashboard** with totals, open reports, high-severity count, average severity, and category chart
- **Attention alerts** for high-severity unresolved reports and overdue follow-ups
- **Search and filter** by text, category, and status
- **Inline status updates** and confirmed deletion
- **CSV import** with row-level validation and an error report for rejected rows
- **Exports**: CSV, JSON backup, Markdown executive summary, and plain-text audit
- **Monthly trend** view of reports
- **Private by design**: data stays in your browser's local storage

## Quick start

1. Download or clone this repository.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox, or Safari).
3. Click **Load sample reports** on the Overview tab to explore, or go to **Add observation**.

Optional: host it for free with GitHub Pages (Settings, then Pages, then deploy from the `main` branch root).

## Importing data

Use **Import CSV** and choose a file. See [`sample_import_template.csv`](sample_import_template.csv).

| Column | Required | Notes |
| --- | --- | --- |
| `route` | Yes | Up to 100 characters |
| `location` | Yes | Up to 120 characters |
| `category` | Yes | `lighting`, `obstruction`, `harassment`, `traffic`, `surface`, `accessibility`, `other` |
| `severity` | Yes | Whole number from 1 to 5 |
| `description` | Yes | Up to 1000 characters |
| `status` | No | `open` (default), `in_progress`, `resolved` |
| `reporter` | No | Defaults to Anonymous |
| `deadline` | No | `YYYY-MM-DD` |
| `id`, `created_at`, `updated_at` | No | Generated when omitted |

Rows that fail validation are skipped, and a `safe_route_import_errors.txt` file lists the reasons.

## Data and privacy

Records are stored in your browser's `localStorage` under the key `safeRouteFeedbackLog.v1`. Nothing is uploaded anywhere. Data is not shared between browsers or devices, and clearing site data deletes it, so use **Backup JSON** regularly. Avoid entering unnecessary personal information in reports.

## Project structure

```
.
├── index.html                  # The complete application
├── sample_import_template.csv  # Example CSV for import
├── docs/
│   ├── USER_GUIDE.md           # Step-by-step usage
│   └── ARCHITECTURE.md         # How the app works internally
├── scripts/check.js            # Lightweight project checks (used by CI)
├── .github/                    # CI workflow, issue and PR templates
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
└── LICENSE
```

## Development

No dependencies are needed. Edit `index.html` and refresh the browser. Before opening a pull request, run the checks (requires Node.js 18 or later):

```bash
node scripts/check.js
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md) first.

## Security

Please report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).

## License

Released under the [MIT License](LICENSE).
