# Security Policy

## Supported versions

| Version | Supported |
| --- | --- |
| 1.x (latest) | Yes |

## Reporting a vulnerability

Please **do not** open a public issue for security problems.

Use GitHub's private reporting: go to the repository's **Security** tab and choose **Report a vulnerability**. Include:

- A description of the issue and its impact
- Steps to reproduce, or a proof of concept
- Affected browser(s) and version, if relevant

You can expect an initial response within about 7 days. Confirmed issues will be fixed as quickly as practical and credited in the changelog unless you prefer otherwise.

## Scope and security notes

- The app runs entirely in the browser with no backend and makes no network requests.
- Data is stored unencrypted in the browser's `localStorage`. Do not enter highly sensitive personal data, and avoid using shared computers for real reports.
- Of particular interest: cross-site scripting through imported CSV or stored data, and anything that causes data to leave the device.
