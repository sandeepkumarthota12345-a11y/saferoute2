# Architecture

## Overview

The application is a single self-contained file, `index.html`, containing markup, CSS, and JavaScript. It has no build step, framework, or runtime dependencies, and makes no network requests.

## Data model

Each record is a plain object:

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Generated (`crypto.randomUUID` with fallback) unless imported |
| `created_at` | ISO string | Used for sorting and monthly trends |
| `updated_at` | ISO string | Set when status changes |
| `route`, `location` | string | Required |
| `category` | enum | `lighting`, `obstruction`, `harassment`, `traffic`, `surface`, `accessibility`, `other` |
| `severity` | integer 1 to 5 | 4 or more is treated as high |
| `status` | enum | `open`, `in_progress`, `resolved` |
| `description` | string | Required |
| `reporter` | string | Defaults to Anonymous |
| `deadline` | `YYYY-MM-DD` or null | Drives overdue alerts |

## Persistence

Records are serialized as JSON to `localStorage` under `safeRouteFeedbackLog.v1`. Reads and writes are wrapped in `try/catch`, and the user is notified if storage fails.

## Main parts of the script

- **State**: a `records` array, re-rendered after each change
- **Validation**: `validateImported()` is shared by the form and CSV import
- **Rendering**: `render()` rebuilds stats, alerts, charts, and tables from state
- **Safety**: all user text passes through `esc()` before being inserted as HTML
- **CSV**: a small RFC 4180-style parser (`parseCSV`) handles quoted fields, escaped quotes, and embedded newlines
- **Exports**: CSV, JSON, Markdown, and audit files are built as Blobs and downloaded locally

## Design decisions

- **Single file**: easy to share, archive, and open by double-clicking
- **Local only**: protects the privacy of sensitive reports
- **No dependencies**: nothing to install or keep patched

## Known limitations

- No multi-device sync or multi-user support
- Data is stored unencrypted in the browser
- No edit form for existing reports (status can be changed inline)
