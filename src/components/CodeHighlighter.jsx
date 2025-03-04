import React from "react";
import hljs from "highlight.js/lib/core";

import http from "highlight.js/lib/languages/http";
import json from "highlight.js/lib/languages/json";
hljs.registerLanguage("http", http);
hljs.registerLanguage("json", json);

import "highlight.js/styles/atom-one-dark.css";

import { useEffect, useRef } from "react";
export default function CodeBlocks({ lang, code }) {
  const blockRef = useRef("null");
  useEffect(() => {
    blockRef.current.removeAttribute("data-highlighted");
    hljs.highlightElement(blockRef.current);
  }, [code]);

  return (
    <pre>
      <code ref={blockRef} className={"language-" + lang}>
        {code}
      </code>
    </pre>
  );
}
