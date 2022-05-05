import { useState } from "react";
import { Select } from "antd";

import "./styles.css";

const { Option } = Select;

const SelectTag = (props) => {
  const [data, setData] = useState([]);


  const onSelect = (id, target) => {
    // TO DO
  };
  return (
    <Select className="select-tag" placeholder="Select tag" onSelect={onSelect}>
      {data.map((item) => (
        <Option key={item.id} value={item.label}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectTag;
