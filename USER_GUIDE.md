# User Guide

## Opening the app

Open `index.html` in a modern browser. No installation or internet connection is needed.

## Tabs

### Overview
Shows totals, open reports, high-severity count, and average severity. **Attention needed** lists reports with severity 4 or 5 that are not resolved, and open reports past their follow-up deadline. **Load sample reports** adds demo data.

### Add observation
Fill in the form and click **Save observation**. Required fields are marked with `*`.

| Field | Details |
| --- | --- |
| Route name | The route or path (max 100 characters) |
| Specific location | Where on the route (max 120 characters) |
| Category | Lighting, obstruction, harassment, traffic, surface, accessibility, or other |
| Severity | 1 (low) to 5 (critical) |
| Status | Open, in progress, or resolved |
| Follow-up deadline | Optional date used to flag overdue reports |
| Reporter | Optional, defaults to Anonymous |
| Description | What was observed (max 1000 characters) |

### All reports
Search by text, filter by category and status, change a report's status inline, or delete a report (with confirmation).

### Insights & exports
Shows summary metrics and a monthly trend, and downloads:

- **CSV**: all records for spreadsheets
- **JSON backup**: full data, suitable for archiving
- **Markdown summary**: an executive summary for sharing
- **Plain-text audit**: a simple log of every record

## Importing a CSV

1. Click **Import CSV** at the top right.
2. Choose a `.csv` file. Use `sample_import_template.csv` as a starting point.
3. Valid rows are added. If any rows are rejected, an error file is downloaded explaining why.

## Backups

Data lives only in this browser. Use **Backup JSON** regularly, and before clearing browser data or switching computers.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Reports disappeared | Browser data may have been cleared, or you are using a different browser or profile |
| "Could not save in this browser" | Storage may be full or blocked (private mode). Download a JSON backup |
| Import rejected rows | Open the downloaded error file; check severity (1 to 5), category, and date format (`YYYY-MM-DD`) |
