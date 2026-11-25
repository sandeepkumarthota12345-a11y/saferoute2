#!/usr/bin/env node
'use strict';
// Lightweight, dependency-free project checks. Run: node scripts/check.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const failures = [];
const fail = msg => failures.push(msg);
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

// 1. Required files exist
['index.html', 'README.md', 'LICENSE', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md',
  'SECURITY.md', 'CHANGELOG.md', 'sample_import_template.csv'].forEach(f => {
  if (!fs.existsSync(path.join(root, f))) fail(`Missing required file: ${f}`);
});

// 2. index.html sanity checks
const html = read('index.html');
if (!/<!doctype html>/i.test(html)) fail('index.html: missing doctype');
if (!/<html[^>]*\blang=/i.test(html)) fail('index.html: <html> needs a lang attribute');
if (!/<title>[^<]+<\/title>/i.test(html)) fail('index.html: missing <title>');
if (!/name="viewport"/i.test(html)) fail('index.html: missing viewport meta tag');

// 3. Offline guarantee: no external resources or network calls
if (/<(script|link|img|iframe)[^>]+(src|href)=["']https?:\/\//i.test(html)) {
  fail('index.html: external resource found (app must stay offline)');
}
if (/\b(fetch|XMLHttpRequest|WebSocket)\b\s*\(/.test(html)) {
  fail('index.html: network call found (app must not use the network)');
}

// 4. Inline JavaScript parses
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (!scripts.length) fail('index.html: no inline script found');
scripts.forEach((code, i) => {
  try { new vm.Script(code, { filename: `index.html<script#${i + 1}>` }); }
  catch (err) { fail(`index.html: script #${i + 1} has a syntax error: ${err.message}`); }
});

// 5. Sample CSV has required columns
const header = read('sample_import_template.csv').split(/\r?\n/)[0].split(',').map(s => s.trim());
['route', 'location', 'category', 'severity', 'description'].forEach(col => {
  if (!header.includes(col)) fail(`sample_import_template.csv: missing column "${col}"`);
});

if (failures.length) {
  console.error('Checks failed:\n' + failures.map(f => ` - ${f}`).join('\n'));
  process.exit(1);
}
console.log('All checks passed.');
