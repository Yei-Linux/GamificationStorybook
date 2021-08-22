export const CodeCustomTheme = {
  base: 'vs',
  inherit: false,
  colors: {
    'editor.background': '#1d2432',
    'editorCursor.foreground': '#536383',
    'editor.lineHighlightBackground': '#1d2432',
    'editor.selectionBackground': '#536383',
  },
  rules: [
    { token: '', foreground: '63b7fc', background: '1d2432' },
    { token: 'invalid', foreground: 'f44747' },
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },

    { token: 'variable', foreground: '1AEBFF' },
    { token: 'variable.parameter', foreground: '9CDCFE' },
    { token: 'constant', foreground: 'ff636f' },
    { token: 'comment', foreground: '608B4E' },
    { token: 'number', foreground: '63b7fc' },
    { token: 'regexp', foreground: 'C0C0C0' },
    { token: 'annotation', foreground: 'ff636f' },
    { token: 'type', foreground: '3DC9B0' },

    { token: 'delimiter', foreground: 'dcdcdc' },
    { token: 'delimiter.html', foreground: 'dcdcdc' },

    { token: 'tag', foreground: 'ff636f' },
    { token: 'tag.id.pug', foreground: '4F76AC' },
    { token: 'tag.class.pug', foreground: '4F76AC' },
    { token: 'meta', foreground: 'D4D4D4' },
    { token: 'meta.tag', foreground: '9ddf6e' },
    { token: 'metatag', foreground: 'ff636f' },
    { token: 'metatag.content.html', foreground: '1AEBFF' },
    { token: 'metatag.html', foreground: 'ff636f' },
    { token: 'metatag.xml', foreground: 'ff636f' },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'key', foreground: '9CDCFE' },
    { token: 'string.key', foreground: '9CDCFE' },
    { token: 'string.value', foreground: '9ddf6e' },

    { token: 'attribute.name', foreground: 'ff636f' },
    { token: 'attribute.value', foreground: '3FF23F' },

    { token: 'string', foreground: '9ddf6e' },
    { token: 'string.sql', foreground: 'FF0000' },

    { token: 'keyword', foreground: 'ff636f' },
    { token: 'keyword.flow', foreground: 'C586C0' },

    { token: 'operator.sql', foreground: '778899' },
    { token: 'operator.swift', foreground: '909090' },
    { token: 'predefined.sql', foreground: 'FF00FF' },
  ],
}

export const codeOptions = {
  acceptSuggestionOnCommitCharacter: true,
  acceptSuggestionOnEnter: 'on',
  accessibilitySupport: 'auto',
  autoIndent: false,
  automaticLayout: true,
  codeLens: true,
  colorDecorators: true,
  contextmenu: true,
  cursorBlinking: 'blink',
  cursorSmoothCaretAnimation: false,
  cursorStyle: 'line',
  disableLayerHinting: false,
  disableMonospaceOptimizations: false,
  dragAndDrop: false,
  fixedOverflowWidgets: false,
  folding: true,
  foldingStrategy: 'auto',
  fontLigatures: false,
  formatOnPaste: false,
  formatOnType: false,
  hideCursorInOverviewRuler: false,
  highlightActiveIndentGuide: true,
  links: true,
  mouseWheelZoom: false,
  multiCursorMergeOverlapping: true,
  multiCursorModifier: 'alt',
  overviewRulerBorder: true,
  overviewRulerLanes: 2,
  quickSuggestions: true,
  quickSuggestionsDelay: 100,
  readOnly: false,
  renderControlCharacters: false,
  renderFinalNewline: true,
  renderIndentGuides: true,
  renderLineHighlight: 'all',
  renderWhitespace: 'none',
  revealHorizontalRightPadding: 30,
  roundedSelection: true,
  rulers: [],
  scrollBeyondLastColumn: 5,
  scrollBeyondLastLine: true,
  selectOnLineNumbers: true,
  selectionClipboard: true,
  selectionHighlight: true,
  showFoldingControls: 'mouseover',
  smoothScrolling: false,
  suggestOnTriggerCharacters: true,
  wordBasedSuggestions: true,
  wordSeparators: `~!@#$%^&*()-=+[{]}|;:'",.<>/?`,
  wordWrap: 'off',
  wordWrapBreakAfterCharacters: '\t})]?|&,;',
  wordWrapBreakBeforeCharacters: '{([+',
  wordWrapBreakObtrusiveCharacters: '.',
  wordWrapColumn: 80,
  wordWrapMinified: true,
  wrappingIndent: 'none',
}

export const codeTheme = 'myTheme'

export const options = {
  type: [] as const,
}
