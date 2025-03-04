import React from "react";
import DocSection from "../components/DocSection";
import { useState } from "react";
function Documentation() {
  const [currSection, setCurrSection] = useState("Players");
  const resources = [
    "Players",
    "Coaches",
    "Presidents",
    "Owners",
    "Matches",
    "Seasons",
    "Trophies",
  ];
  const resourcesLink = resources.map((name) => (
    <a
      className={
        currSection == name
          ? "a-primary border-r-4 border-red-500"
          : "a-primary"
      }
      key={name}
      onClick={() => setCurrSection(name)}
    >
      {name}
    </a>
  ));
  return (
    <div className="space m-auto flex w-[75vw] flex-col text-justify text-slate-900">
      <h2 className="mt-16 text-2xl font-bold"> Documentation </h2>
      <div className="space m-auto mb-16 mt-5 flex w-[75vw] flex-row">
        <div className="flex w-[12vh] flex-col">{resourcesLink}</div>
        <DocSection>{currSection}</DocSection>
      </div>
    </div>
  );
}

export default Documentation;
