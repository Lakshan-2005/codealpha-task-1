/* =============================================
   LinguaSwift — app.js
   ============================================= */

'use strict';

// ─── Language List ────────────────────────────────────────────────────────────
const LANGUAGES = [
  { code: 'auto', name: '🔍 Detect Language' },
  { code: 'af',   name: 'Afrikaans' },
  { code: 'sq',   name: 'Albanian' },
  { code: 'am',   name: 'Amharic' },
  { code: 'ar',   name: 'Arabic' },
  { code: 'hy',   name: 'Armenian' },
  { code: 'az',   name: 'Azerbaijani' },
  { code: 'eu',   name: 'Basque' },
  { code: 'be',   name: 'Belarusian' },
  { code: 'bn',   name: 'Bengali' },
  { code: 'bs',   name: 'Bosnian' },
  { code: 'bg',   name: 'Bulgarian' },
  { code: 'ca',   name: 'Catalan' },
  { code: 'ceb',  name: 'Cebuano' },
  { code: 'zh',   name: 'Chinese (Simplified)' },
  { code: 'zh-TW',name: 'Chinese (Traditional)' },
  { code: 'co',   name: 'Corsican' },
  { code: 'hr',   name: 'Croatian' },
  { code: 'cs',   name: 'Czech' },
  { code: 'da',   name: 'Danish' },
  { code: 'nl',   name: 'Dutch' },
  { code: 'en',   name: 'English' },
  { code: 'eo',   name: 'Esperanto' },
  { code: 'et',   name: 'Estonian' },
  { code: 'fi',   name: 'Finnish' },
  { code: 'fr',   name: 'French' },
  { code: 'fy',   name: 'Frisian' },
  { code: 'gl',   name: 'Galician' },
  { code: 'ka',   name: 'Georgian' },
  { code: 'de',   name: 'German' },
  { code: 'el',   name: 'Greek' },
  { code: 'gu',   name: 'Gujarati' },
  { code: 'ht',   name: 'Haitian Creole' },
  { code: 'ha',   name: 'Hausa' },
  { code: 'haw',  name: 'Hawaiian' },
  { code: 'he',   name: 'Hebrew' },
  { code: 'hi',   name: 'Hindi' },
  { code: 'hmn',  name: 'Hmong' },
  { code: 'hu',   name: 'Hungarian' },
  { code: 'is',   name: 'Icelandic' },
  { code: 'ig',   name: 'Igbo' },
  { code: 'id',   name: 'Indonesian' },
  { code: 'ga',   name: 'Irish' },
  { code: 'it',   name: 'Italian' },
  { code: 'ja',   name: 'Japanese' },
  { code: 'jv',   name: 'Javanese' },
  { code: 'kn',   name: 'Kannada' },
  { code: 'kk',   name: 'Kazakh' },
  { code: 'km',   name: 'Khmer' },
  { code: 'rw',   name: 'Kinyarwanda' },
  { code: 'ko',   name: 'Korean' },
  { code: 'ku',   name: 'Kurdish' },
  { code: 'ky',   name: 'Kyrgyz' },
  { code: 'lo',   name: 'Lao' },
  { code: 'la',   name: 'Latin' },
  { code: 'lv',   name: 'Latvian' },
  { code: 'lt',   name: 'Lithuanian' },
  { code: 'lb',   name: 'Luxembourgish' },
  { code: 'mk',   name: 'Macedonian' },
  { code: 'mg',   name: 'Malagasy' },
  { code: 'ms',   name: 'Malay' },
  { code: 'ml',   name: 'Malayalam' },
  { code: 'mt',   name: 'Maltese' },
  { code: 'mi',   name: 'Maori' },
  { code: 'mr',   name: 'Marathi' },
  { code: 'mn',   name: 'Mongolian' },
  { code: 'my',   name: 'Myanmar (Burmese)' },
  { code: 'ne',   name: 'Nepali' },
  { code: 'no',   name: 'Norwegian' },
  { code: 'ny',   name: 'Nyanja (Chichewa)' },
  { code: 'or',   name: 'Odia (Oriya)' },
  { code: 'ps',   name: 'Pashto' },
  { code: 'fa',   name: 'Persian' },
  { code: 'pl',   name: 'Polish' },
  { code: 'pt',   name: 'Portuguese' },
  { code: 'pa',   name: 'Punjabi' },
  { code: 'ro',   name: 'Romanian' },
  { code: 'ru',   name: 'Russian' },
  { code: 'sm',   name: 'Samoan' },
  { code: 'gd',   name: 'Scots Gaelic' },
  { code: 'sr',   name: 'Serbian' },
  { code: 'st',   name: 'Sesotho' },
  { code: 'sn',   name: 'Shona' },
  { code: 'sd',   name: 'Sindhi' },
  { code: 'si',   name: 'Sinhala' },
  { code: 'sk',   name: 'Slovak' },
  { code: 'sl',   name: 'Slovenian' },
  { code: 'so',   name: 'Somali' },
  { code: 'es',   name: 'Spanish' },
  { code: 'su',   name: 'Sundanese' },
  { code: 'sw',   name: 'Swahili' },
  { code: 'sv',   name: 'Swedish' },
  { code: 'tl',   name: 'Tagalog (Filipino)' },
  { code: 'tg',   name: 'Tajik' },
  { code: 'ta',   name: 'Tamil' },
  { code: 'tt',   name: 'Tatar' },
  { code: 'te',   name: 'Telugu' },
  { code: 'th',   name: 'Thai' },
  { code: 'tr',   name: 'Turkish' },
  { code: 'tk',   name: 'Turkmen' },
  { code: 'uk',   name: 'Ukrainian' },
  { code: 'ur',   name: 'Urdu' },
  { code: 'ug',   name: 'Uyghur' },
  { code: 'uz',   name: 'Uzbek' },
  { code: 'vi',   name: 'Vietnamese' },
  { code: 'cy',   name: 'Welsh' },
  { code: 'xh',   name: 'Xhosa' },
  { code: 'yi',   name: 'Yiddish' },
  { code: 'yo',   name: 'Yoruba' },
  { code: 'zu',   name: 'Zulu' },
];

const QUICK_LANGS = [
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ru', name: 'Russian' },
  { code: 'pt', name: 'Portuguese' },
];

// ─── State ────────────────────────────────────────────────────────────────────
let history = JSON.parse(localStorage.getItem('lt_history') || '[]');
let ttsActive = false;
let currentSpeech = null;

// ─── DOM Refs ─────────────────────────────────────────────────────────────────
const sourceLangSel   = document.getElementById('sourceLang');
const targetLangSel   = document.getElementById('targetLang');
const swapBtn         = document.getElementById('swapBtn');
const sourceTextEl    = document.getElementById('sourceText');
const translatedEl    = document.getElementById('translatedText');
const translateBtn    = document.getElementById('translateBtn');
const charCountEl     = document.getElementById('charCount');
const statusEl        = document.getElementById('translationStatus');
const confidenceBadge = document.getElementById('confidenceBadge');
const speakSourceBtn  = document.getElementById('speakSourceBtn');
const speakTargetBtn  = document.getElementById('speakTargetBtn');
const copySourceBtn   = document.getElementById('copySourceBtn');
const copyTargetBtn   = document.getElementById('copyTargetBtn');
const clearBtn        = document.getElementById('clearBtn');
const themeToggle     = document.getElementById('themeToggle');
const historyBtn      = document.getElementById('historyBtn');
const closeDrawerBtn  = document.getElementById('closeDrawerBtn');
const overlay         = document.getElementById('overlay');
const historyDrawer   = document.getElementById('historyDrawer');
const historyList     = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const quickChips      = document.getElementById('quickChips');
const toast           = document.getElementById('toast');

// ─── Initialise ───────────────────────────────────────────────────────────────
function init() {
  populateLanguageSelects();
  buildQuickChips();
  renderHistory();
  loadTheme();

  // Event listeners
  sourceTextEl.addEventListener('input', onSourceInput);
  translateBtn.addEventListener('click', handleTranslate);
  swapBtn.addEventListener('click', swapLanguages);
  clearBtn.addEventListener('click', clearSource);
  copySourceBtn.addEventListener('click', () => copyText(sourceTextEl.value, 'Source copied!'));
  copyTargetBtn.addEventListener('click', () => copyText(getTranslatedText(), 'Translation copied!'));
  speakSourceBtn.addEventListener('click', () => speak(sourceTextEl.value, sourceLangSel.value, speakSourceBtn));
  speakTargetBtn.addEventListener('click', () => speak(getTranslatedText(), targetLangSel.value, speakTargetBtn));
  themeToggle.addEventListener('click', toggleTheme);
  historyBtn.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  clearHistoryBtn.addEventListener('click', clearHistory);

  // Translate on Ctrl+Enter
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') handleTranslate();
  });
}

// ─── Language Selects ─────────────────────────────────────────────────────────
function populateLanguageSelects() {
  const savedSrc = localStorage.getItem('lt_src') || 'auto';
  const savedTgt = localStorage.getItem('lt_tgt') || 'es';

  LANGUAGES.forEach(lang => {
    const optSrc = new Option(lang.name, lang.code);
    const optTgt = new Option(lang.name, lang.code);
    if (lang.code !== 'auto') targetLangSel.add(optTgt);
    sourceLangSel.add(optSrc);
  });

  sourceLangSel.value = savedSrc;
  targetLangSel.value = savedTgt;

  sourceLangSel.addEventListener('change', () => {
    localStorage.setItem('lt_src', sourceLangSel.value);
  });
  targetLangSel.addEventListener('change', () => {
    localStorage.setItem('lt_tgt', targetLangSel.value);
    updateChipHighlight();
  });
}

// ─── Quick Chips ──────────────────────────────────────────────────────────────
function buildQuickChips() {
  QUICK_LANGS.forEach(lang => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.dataset.code = lang.code;
    chip.textContent = lang.name;
    chip.addEventListener('click', () => {
      targetLangSel.value = lang.code;
      localStorage.setItem('lt_tgt', lang.code);
      updateChipHighlight();
      if (sourceTextEl.value.trim()) handleTranslate();
    });
    quickChips.appendChild(chip);
  });
  updateChipHighlight();
}

function updateChipHighlight() {
  quickChips.querySelectorAll('.chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.code === targetLangSel.value);
  });
}

// ─── Source Input ─────────────────────────────────────────────────────────────
function onSourceInput() {
  const len = sourceTextEl.value.length;
  charCountEl.textContent = `${len} / 5000`;
  charCountEl.className = 'char-count' + (len > 4500 ? ' danger' : len > 4000 ? ' warn' : '');
}

function clearSource() {
  sourceTextEl.value = '';
  onSourceInput();
  translatedEl.innerHTML = '<span class="placeholder-hint">Your translation will appear here…</span>';
  statusEl.textContent = '';
  confidenceBadge.style.display = 'none';
}

// ─── Swap Languages ───────────────────────────────────────────────────────────
function swapLanguages() {
  const srcCode = sourceLangSel.value;
  const tgtCode = targetLangSel.value;
  const tgtText = getTranslatedText();

  // Don't swap if source is "auto"
  if (srcCode === 'auto') {
    showToast('Set a specific source language to swap');
    return;
  }

  sourceLangSel.value = tgtCode;
  targetLangSel.value = srcCode;
  localStorage.setItem('lt_src', tgtCode);
  localStorage.setItem('lt_tgt', srcCode);

  if (tgtText) {
    sourceTextEl.value = tgtText;
    onSourceInput();
    translatedEl.innerHTML = '<span class="placeholder-hint">Your translation will appear here…</span>';
    handleTranslate();
  }
  updateChipHighlight();
}

// ─── Translate ────────────────────────────────────────────────────────────────
async function handleTranslate() {
  const text = sourceTextEl.value.trim();
  if (!text) { showToast('Please enter some text first'); return; }

  const srcCode = sourceLangSel.value;
  const tgtCode = targetLangSel.value;

  setLoading(true);
  statusEl.textContent = 'Translating…';
  confidenceBadge.style.display = 'none';

  try {
    const result = await translateText(text, srcCode, tgtCode);
    displayTranslation(result);
    saveToHistory(text, result.translatedText, srcCode, tgtCode);
  } catch (err) {
    statusEl.textContent = '⚠ Translation failed. Check your connection.';
    showToast('Translation failed — ' + (err.message || 'unknown error'));
    console.error(err);
  } finally {
    setLoading(false);
  }
}

// ─── MyMemory API ─────────────────────────────────────────────────────────────
async function translateText(text, srcCode, tgtCode) {
  // MyMemory uses a real langpair; use 'en' as source placeholder for auto-detect
  const srcForApi = (srcCode === 'auto') ? 'en' : srcCode;
  const langpair  = `${srcForApi}|${tgtCode}`;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(langpair)}`;

  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

  const data = await resp.json();

  // responseStatus may be string "200" or integer 200
  if (String(data.responseStatus) !== '200') {
    throw new Error(data.responseDetails || String(data.responseStatus) || 'API error');
  }

  // Correct field is "translatedText" (not "translationText")
  const translatedText = data.responseData.translatedText;
  const confidence     = data.responseData.match; // 0.0 – 1.0

  if (!translatedText) {
    throw new Error('Empty response from translation API');
  }

  // Try to surface detected language from matches array
  let detectedLang = null;
  if (srcCode === 'auto' && Array.isArray(data.matches) && data.matches.length > 0) {
    const m = data.matches[0];
    if (m && m.subject) detectedLang = m.subject;
  }

  return { translatedText, confidence, detectedLang };
}

// ─── Display Translation ──────────────────────────────────────────────────────
function displayTranslation({ translatedText, confidence, detectedLang }) {
  // Escape HTML
  const safe = translatedText
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  translatedEl.innerHTML = safe;

  // Confidence badge
  if (confidence !== undefined && confidence !== null) {
    const pct = Math.round(confidence * 100);
    confidenceBadge.textContent = `${pct}% match`;
    confidenceBadge.style.display = '';
  }

  // Detected language hint
  if (detectedLang) {
    const langName = LANGUAGES.find(l => l.code === detectedLang)?.name || detectedLang;
    statusEl.textContent = `Detected: ${langName}`;
  } else {
    statusEl.textContent = 'Translation complete';
  }
}

// ─── Loading State ────────────────────────────────────────────────────────────
function setLoading(on) {
  translateBtn.disabled = on;
  translateBtn.classList.toggle('loading', on);
}

// ─── Text-to-Speech ───────────────────────────────────────────────────────────
function speak(text, langCode, btn) {
  if (!('speechSynthesis' in window)) {
    showToast('Text-to-speech not supported in your browser');
    return;
  }

  // If already speaking the same panel — stop
  if (btn.classList.contains('active')) {
    window.speechSynthesis.cancel();
    btn.classList.remove('active');
    return;
  }

  // Cancel any active speech
  window.speechSynthesis.cancel();
  document.querySelectorAll('.action-btn.active').forEach(b => b.classList.remove('active'));

  if (!text.trim()) { showToast('Nothing to speak'); return; }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCode === 'auto' ? 'en' : langCode;
  utterance.rate = 0.95;

  btn.classList.add('active');

  utterance.onend = () => btn.classList.remove('active');
  utterance.onerror = () => btn.classList.remove('active');

  window.speechSynthesis.speak(utterance);
}

// ─── Copy to Clipboard ────────────────────────────────────────────────────────
async function copyText(text, message) {
  if (!text.trim()) { showToast('Nothing to copy'); return; }
  try {
    await navigator.clipboard.writeText(text);
    showToast(message || 'Copied!');
  } catch {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(message || 'Copied!');
  }
}

// ─── Helper: get translated text ──────────────────────────────────────────────
function getTranslatedText() {
  // Strip out the placeholder if present
  const el = translatedEl.cloneNode(true);
  el.querySelector('.placeholder-hint')?.remove();
  return el.textContent.trim();
}

// ─── History ──────────────────────────────────────────────────────────────────
function saveToHistory(src, tgt, srcCode, tgtCode) {
  const srcName = LANGUAGES.find(l => l.code === srcCode)?.name || srcCode;
  const tgtName = LANGUAGES.find(l => l.code === tgtCode)?.name || tgtCode;

  history.unshift({
    id:        Date.now(),
    sourceText: src,
    targetText: tgt,
    srcCode, tgtCode, srcName, tgtName,
    time: new Date().toLocaleString()
  });

  // Keep only latest 50
  if (history.length > 50) history = history.slice(0, 50);
  localStorage.setItem('lt_history', JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  if (history.length === 0) {
    historyList.innerHTML = '<p class="empty-history">No history yet. Translate something!</p>';
    return;
  }

  historyList.innerHTML = history.map(item => `
    <div class="history-item" data-id="${item.id}">
      <div class="history-langs">${item.srcName} → ${item.tgtName}</div>
      <div class="history-source">${escapeHtml(item.sourceText)}</div>
      <div class="history-target">${escapeHtml(item.targetText)}</div>
      <div class="history-time">${item.time}</div>
    </div>
  `).join('');

  historyList.querySelectorAll('.history-item').forEach(el => {
    el.addEventListener('click', () => {
      const id   = parseInt(el.dataset.id);
      const item = history.find(h => h.id === id);
      if (!item) return;
      sourceTextEl.value = item.sourceText;
      onSourceInput();
      sourceLangSel.value = item.srcCode;
      targetLangSel.value = item.tgtCode;
      displayTranslation({ translatedText: item.targetText, confidence: null });
      updateChipHighlight();
      closeDrawer();
    });
  });
}

function clearHistory() {
  history = [];
  localStorage.removeItem('lt_history');
  renderHistory();
  showToast('History cleared');
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ─── Drawer ───────────────────────────────────────────────────────────────────
function openDrawer()  { historyDrawer.classList.add('open'); overlay.classList.add('show'); }
function closeDrawer() { historyDrawer.classList.remove('open'); overlay.classList.remove('show'); }

// ─── Theme ────────────────────────────────────────────────────────────────────
function toggleTheme() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const next   = isDark ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('lt_theme', next);
  themeToggle.querySelector('.material-icons-round').textContent = isDark ? 'dark_mode' : 'light_mode';
}

function loadTheme() {
  const saved = localStorage.getItem('lt_theme');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = saved || preferred;
  document.documentElement.dataset.theme = theme;
  themeToggle.querySelector('.material-icons-round').textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
}

// ─── Toast ────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, duration = 2400) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
init();
