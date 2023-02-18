import { useState } from "react";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
export default function Accordion({ items }) {
  const [expandIdex, setExpandIdex] = useState(1);
  const handleClick = (index) => {
    if (expandIdex === index) setExpandIdex(-1);
    else setExpandIdex(index);
  };
  return (
    <div>
      {items.map((item, index) => {
        const isExpand = expandIdex === index;
        const icon = isExpand ? <GoTriangleDown /> : <GoTriangleRight />;
        // 记得每个大div应该有独立的id
        return (
          <div key={item.id}>
            <div
              className="pl-2 pr-2 cursor-pointer bg-stone-100 border-b flex items-center justify-between"
              onClick={() => handleClick(index)} // 一定要用 箭头函数，否则每render一次就会call这个function
            >
              {item.lable}
              {icon}
            </div>
            <div className="pl-2 pr-2">{isExpand && item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
