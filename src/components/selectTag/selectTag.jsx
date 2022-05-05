import { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const SelectTag = (props) => {
  const [data, setData] = useState([]);


  const onSelect = (id, target) => {
    // TO DO
  };
  return (
    <Select placeholder="Select tag" onSelect={onSelect}>
      {data.map((item) => (
        <Option key={item.id} value={item.label}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectTag;
