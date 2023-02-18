import { useState, useRef, useEffect } from "react";
import Panel from "./Panel";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
export default function Dropdown({ options, value, onChange }) {
  const [showOptions, setShowOptions] = useState(false);
  const divEl = useRef();
  const handleClickOption = (value) => {
    onChange(value);
    setShowOptions(false);
  };
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;

      if (!divEl.current.contains(event.target)) setShowOptions(false);
    };
    document.addEventListener("click", handler, true); // set capture phase true.
    return () => document.removeEventListener("click", handler);
  }, []);
  return (
    <div ref={divEl} className="w-48 relative p-2 ">
      <Panel
        onClick={() => setShowOptions(!showOptions)} // 用 function argument 会更准确
        className="border flex items-center justify-between p-2"
      >
        {value || "select..."}
        {showOptions ? <GoChevronDown /> : <GoChevronRight />}
      </Panel>

      {showOptions && options?.length && (
        <Panel>
          {options.map((option) => {
            return (
              <div
                className="hover:bg-sky-100 p-1"
                key={option.value}
                onClick={() => handleClickOption(option.value)}
              >
                {option.lable}
              </div>
            );
          })}
        </Panel>
      )}
    </div>
  );
}
