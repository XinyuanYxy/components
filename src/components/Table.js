export default function Table({ data, dataConfig, keyFn }) {
  const tHeaders = dataConfig.map((col) => {
    return <th key={col.label}>{col.label}</th>;
  });
  const tRows = data.map((row) => {
    return (
      <tr className="border-b" key={keyFn(row)}>
        {dataConfig.map((col) => {
          return <td className="p-3">{col.render(row)}</td>;
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
