import CodeBlocks from "./CodeHighlighter.jsx";
import { schemas } from "../constants/schemas.js";
import * as temps from "../constants/defaultResponse.js";
export default function DocPage({ children }) {
  const schema = schemas[children.toLowerCase()];

  const schemaRows = schema.map((attr) => (
    <tr key={attr[0]} className="border-t-2 border-gray-200">
      <td className="p-[1vw]">{attr[0]}</td>
      <td className="p-[1vw]">{attr[1]}</td>
      <td className="p-[1vw]">{attr[2]}</td>
    </tr>
  ));
  let docTemplate = JSON.stringify(
    temps["default" + children + "Response"],
    null,
    2
  );

  return (
    <div className="pl-20">
      <h2 className="text-xl font-bold"> {children} </h2>
      <h3 className="mt-8 text-lg font-bold"> Schema</h3>
      <table className="mt-3 table-auto border-collapse">
        <thead className="table-auto border-collapse">
          <tr>
            <th className="bg-gray-200 p-[1vw]">Key</th>
            <th className="bg-gray-200 p-[1vw]">Type</th>
            <th className="bg-gray-200 p-[1vw]">Description</th>
          </tr>
        </thead>
        <tbody>{schemaRows}</tbody>
      </table>
      <h3 className="mb-4 mt-8 text-lg font-bold"> Example </h3>
      <CodeBlocks
        lang="http"
        code={"GET https://psgapi.com/api/v1/" + children.toLowerCase()}
      ></CodeBlocks>
      <CodeBlocks lang="json" code={docTemplate}></CodeBlocks>
      <h3 className="mt-G8 text-lg font-bold"> </h3>
    </div>
  );
}
