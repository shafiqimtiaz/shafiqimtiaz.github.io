import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const decks = {
  'clean-bookmarks': { design: 'filing-system', required: ['--archive-green:', 'data-design="filing-system"', 'width: 180px; height: 180px;', 'filter: none;', 'border-radius: 12px;', 'property="og:image"', 'name="twitter:card"', 'rel="apple-touch-icon"'], content: ['Local-first', 'Bring-your-own-key', 'One-click undo'] },
  'dash-reader': { design: 'reading-instrument', required: ['--fixation-cyan:', 'data-design="reading-instrument"', 'reader-active.png', 'property="og:image"', 'name="twitter:card"', 'rel="apple-touch-icon"'], content: ['Dash Reader', 'RSVP', 'Local-first', 'chrome.tts'] },
  'fetch-markdown': { design: 'publication-desk', required: ['--editor-blue:', 'data-design="publication-desk"', 'width: 180px; height: 180px;', 'filter: none;', 'border-radius: 12px;', 'property="og:image"', 'name="twitter:card"', 'rel="apple-touch-icon"'], content: ['24 site types', 'Markdown', 'No backend'] },
};

const contents = await Promise.all(Object.keys(decks).map(async (name) => [name, await readFile(`${name}/index.html`, 'utf8')]));
const root = await readFile('index.html', 'utf8');
const seenDesigns = new Set();
for (const [name, html] of contents) {
  const config = decks[name];
  assert.match(html, /class="deck-stage"/, `${name}: fixed presentation stage missing`);
  assert.match(html, /class="slide[^"]*"/, `${name}: slide sections missing`);
  assert.match(html, /id="prevBtn"[\s\S]*id="nextBtn"/, `${name}: deck navigation missing`);
  for (const marker of config.required) assert.match(html, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${name}: redesign marker ${marker} missing`);
  for (const phrase of config.content) assert.match(html, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), `${name}: product evidence ${phrase} missing`);
  assert.match(html, /logo\.png/, `${name}: product logo asset missing`);
  seenDesigns.add(config.design);
}
assert.equal(seenDesigns.size, 3, 'decks must use three distinct design directions');
assert.match(root, /<h3 id="p2-title">dash-reader<\/h3>/, 'root project label must use Dash Reader slug');
assert.match(root, /href="\.\/dash-reader\/"/, 'root deck link must use dash-reader path');
assert.match(root, /github\.com\/shafiqimtiaz\/dash-reader/, 'root source link must use dash-reader repository');
assert.doesNotMatch(root, /github\.com\/shafiqimtiaz\/rapid-reader/, 'root source link must not use old repository path');
assert.match(root, /property="og:image"/, 'root Open Graph image metadata missing');
assert.match(root, /name="twitter:card"/, 'root Twitter card metadata missing');
assert.match(root, /rel="apple-touch-icon"/, 'root Apple touch icon metadata missing');
console.log('redesign structure: PASS');
