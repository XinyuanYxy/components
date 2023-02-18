import Dropdown from "../components/Dropdown";
import { useState } from "react";
export default function DropdownPage() {
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelect = (value) => {
    setSelectedValue(value);
  };
  const options = [
    { lable: "I need mild spicy", value: "mild" },
    { lable: "I need intermediate spicy", value: "spicy" },
    { lable: "I need mild spicy", value: "extra_spicy" },
    { lable: "clear", value: "" },
  ];
  return (
    <Dropdown options={options} onChange={handleSelect} value={selectedValue} />
  );
}
