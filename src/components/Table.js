import { Fragment, useState } from "react";
export default function Table({ data, dataConfig, keyFn }) {
  const tHeaders = dataConfig.map((col) => {
    if (col.header) return <Fragment key={col.label}>{col.header()}</Fragment>;
    return <th key={col.label}>{col.label}</th>;
  });
  const tRows = data.map((row) => {
    return (
      <tr className="border-b" key={keyFn(row)}>
        {dataConfig.map((col) => {
          return (
            <td key={col.label} className="p-3">
              {col.render(row)}
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{tHeaders}</tr>
      </thead>
      <tbody>{tRows}</tbody>
    </table>
  );
}
