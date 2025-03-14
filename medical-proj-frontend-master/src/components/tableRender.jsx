import React from "react";

function DynamicTable({ data }) {
  const renderTableHeader = () => {
    return (
      <tr className="bg-gray-200">
        {data.Params.map((param, index) => (
          <th key={index} className="px-6 py-3 text-left font-semibold">
            {param}
          </th>
        ))}
      </tr>
    );
  };

  const renderTableData = () => {
    return Object.keys(data)
      .filter((key) => key.startsWith("Pesticides"))
      .map((key, index) => (
        <tr key={index}>
          {data[key].map((value, i) => (
            <td key={i} className="border px-6 py-4">
              {value}
            </td>
          ))}
        </tr>
      ));
  };

  return (
    <div className=" mt-10">
      <table className="w-fit  bg-white shadow-md rounded-lg overflow-hidden">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
