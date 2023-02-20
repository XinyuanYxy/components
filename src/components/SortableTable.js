import Table from "./Table";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useState } from "react";
export default function SortableTable(props) {
  const { dataConfig, data } = props;
  const sortDirection = ["null", "acs", "decs"];
  const [sortOrder, setSortOrder] = useState(0);
  const [sortBy, setSortBy] = useState(null);
  const handleClick = (label) => {
    if (label !== sortBy) setSortOrder(0);
    setSortBy(label);
    setSortOrder((order) => (order + 1) % 3);
  };
  let sortedData = data;
  if (sortBy) {
    const { sortValue } = dataConfig.find((col) => col.label === sortBy);
    sortedData = [...data].sort((obj1, obj2) => {
      if (typeof sortValue(obj1) === "string") {
        return sortValue(obj1).localeCompare(sortValue(obj2));
      } else {
        const reverse = sortDirection[sortOrder] === "acs" ? 1 : -1;
        return (sortValue(obj1) - sortValue(obj2)) * reverse;
      }
    });
  }
  const getIcon = (label) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      );
    }
    if (sortDirection[sortOrder] === 0)
      return (
        <div>
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      );
    else if (sortDirection[sortOrder] === 1)
      return (
        <div>
          <GoTriangleUp />
        </div>
      );
    else
      return (
        <div>
          <GoTriangleDown />
        </div>
      );
  };

  const newDataConfig = dataConfig.map((col) => {
    if (!col.sortValue) return col;
    else {
      return {
        ...col,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-200"
            onClick={() => handleClick(col.label)}
          >
            <div className="flex items-center">
              {getIcon(col.label)}
              {col.label}
            </div>
          </th>
        ),
      };
    }
  });

  return (
    <Table {...props} dataConfig={newDataConfig} data={sortedData}></Table>
  );
}
