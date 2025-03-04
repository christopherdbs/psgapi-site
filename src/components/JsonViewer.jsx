import React, { useState, useEffect } from "react";
import { JSONTree } from "react-json-tree";
import { viewerTheme } from "../utils/viewerTheme";

function DynamicViewer({ data }) {
  return (
    <JSONTree
      data={JSON.parse(data)}
      hideRoot
      theme={viewerTheme}
      shouldExpandNode={(keyName, data, level) =>
        !(
          (Array.isArray(data) && data.length > 3) ||
          (!Number.isInteger(keyName[0]) && Object.keys(data).length > 3) ||
          (Number.isInteger(keyName[1]) && Array.isArray(data))
        )
      }
    />
  );
}

function RawViewer({ data }) {
  return (
    <>
      <pre className="text-xs text-gray-800">
        <code>{data}</code>
      </pre>
    </>
  );
}

export default function JsonViewer({ data }) {
  const [isMounted, setIsMounted] = useState(false);
  const [viewRaw, setViewRaw] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    setViewRaw(false);
  }, []);
  const fileSize = new TextEncoder("utf-8").encode(data).length / 1000; // kB
  const nbLines = (data.match(/\r?\n/g) || "").length + 1;

  return (
    <div className="ml-auto mr-auto mt-7 w-8/12 border-[15px] border-solid border-[rgba(0,0,0,0.3)] ">
      <div
        id="results"
        className="m-auto max-h-[500px] overflow-auto bg-gray-200 p-3 font-main text-xs"
      >
        {!isMounted || viewRaw ? (
          <RawViewer data={data} />
        ) : (
          <DynamicViewer data={data} />
        )}
      </div>
      <div className="bg-neutral-300 p-3 text-gray-600">
        <label title={!isMounted ? "Disabled until JavaScript loads" : null}>
          <input
            type="checkbox"
            checked={viewRaw}
            disabled={!isMounted}
            onChange={(event) => setViewRaw(event.target.checked)}
          />{" "}
          View raw JSON ({fileSize} kB, {nbLines} lines)
        </label>
      </div>
    </div>
  );
}
