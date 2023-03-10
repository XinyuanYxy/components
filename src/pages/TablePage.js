// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
export default function TablePage() {
  const data = [
    { name: "apple", color: "bg-red-500", score: 4 },
    { name: "orange", color: "bg-orange-500", score: 2 },
    { name: "banana", color: "bg-yellow-500", score: 6 },
    { name: "kiwi", color: "bg-lime-700", score: 9 },
  ];

  const dataConfig = [
    {
      label: "name",
      render: (rowData) => rowData.name,
      sortValue: (rowData) => rowData.name,
    },
    {
      label: "color",
      render: (rowData) => <div className={`p-3 m-2 ${rowData.color}`}></div>,
    },
    {
      label: "score",
      render: (rowData) => rowData.score,
      header: () => <th className="bg-red-400">Score</th>,
      sortValue: (rowData) => rowData.score,
    },
  ];

  const keyFn = (item) => {
    return item.name;
  };

  return (
    <div>
      <SortableTable data={data} dataConfig={dataConfig} keyFn={keyFn} />
    </div>
  );
}
