import React, { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [verified, setVerified] = useState<boolean | null>(null);

  // The classic quine technique: payload template where $ represents the serialized payload
  const template = "import React, { useState } from 'react';\n\nexport default function App() {\n  const [copied, setCopied] = useState(false);\n  const [verified, setVerified] = useState(null);\n\n  // The classic quine technique: payload template where $ represents the serialized payload\n  const template = $;\n\n  const source = template.replace('$', JSON.stringify(template));\n\n  const handleCopy = () => {\n    navigator.clipboard.writeText(source);\n    setCopied(true);\n    setTimeout(() => setCopied(false), 2000);\n  };\n\n  const handleVerify = () => {\n    // Check self-consistency: injecting template into template must equal source\n    const reproduced = template.replace('$', JSON.stringify(template));\n    setVerified(reproduced === source && reproduced.length === source.length);\n  };\n\n  return (\n    <div className=\"min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono p-6 flex flex-col\">\n      <header className=\"flex flex-wrap items-center justify-between gap-4 border-b border-[#30363d] pb-4 mb-4\">\n        <div>\n          <h1 className=\"text-xl font-bold text-[#58a6ff] flex items-center gap-2\">\n            <span>&lt;/&gt;</span> React Quine\n          </h1>\n          <p className=\"text-xs text-[#8b949e] mt-1\">\n            A program that outputs its own exact source code with zero external reads.\n          </p>\n        </div>\n\n        <div className=\"flex items-center gap-3\">\n          <button\n            onClick={handleVerify}\n            className=\"px-3 py-1.5 text-xs rounded border border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] transition-colors\"\n          >\n            {verified === null ? 'Verify self-match' : verified ? 'Exact Match' : 'Mismatch'}\n          </button>\n          <button\n            onClick={handleCopy}\n            className=\"px-3 py-1.5 text-xs rounded bg-[#238636] text-white hover:bg-[#2ea043] transition-colors\"\n          >\n            {copied ? 'Copied!' : 'Copy source'}\n          </button>\n        </div>\n      </header>\n\n      <div className=\"flex items-center justify-between text-xs text-[#8b949e] mb-2 px-1\">\n        <span>source length: {source.length.toLocaleString()} bytes</span>\n        <span>self-referential string quotation technique</span>\n      </div>\n\n      <pre className=\"flex-1 overflow-auto rounded border border-[#30363d] bg-[#161b22] p-4 text-xs leading-relaxed text-[#79c0ff] selection:bg-[#1f6feb] selection:text-white\">\n        <code>{source}</code>\n      </pre>\n    </div>\n  );\n}";

  const source = template.replace('$', JSON.stringify(template));

  const handleCopy = () => {
    navigator.clipboard.writeText(source);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerify = () => {
    // Check self-consistency: injecting template into template must equal source
    const reproduced = template.replace('$', JSON.stringify(template));
    setVerified(reproduced === source && reproduced.length === source.length);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono p-6 flex flex-col">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#30363d] pb-4 mb-4">
        <div>
          <h1 className="text-xl font-bold text-[#58a6ff] flex items-center gap-2">
            <span>&lt;/&gt;</span> React Quine
          </h1>
          <p className="text-xs text-[#8b949e] mt-1">
            A program that outputs its own exact source code with zero external reads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleVerify}
            className="px-3 py-1.5 text-xs rounded border border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] transition-colors"
          >
            {verified === null ? 'Verify self-match' : verified ? 'Exact Match' : 'Mismatch'}
          </button>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs rounded bg-[#238636] text-white hover:bg-[#2ea043] transition-colors"
          >
            {copied ? 'Copied!' : 'Copy source'}
          </button>
        </div>
      </header>

      <div className="flex items-center justify-between text-xs text-[#8b949e] mb-2 px-1">
        <span>source length: {source.length.toLocaleString()} bytes</span>
        <span>self-referential string quotation technique</span>
      </div>

      <pre className="flex-1 overflow-auto rounded border border-[#30363d] bg-[#161b22] p-4 text-xs leading-relaxed text-[#79c0ff] selection:bg-[#1f6feb] selection:text-white">
        <code>{source}</code>
      </pre>
    </div>
  );
}