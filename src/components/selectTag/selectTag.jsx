import { useState, useEffect } from "react";
import { Select } from "antd";

import { getTags } from "../../services/tag";
import "./styles.css";

const { Option } = Select;

const SelectTag = (props) => {
  const { onChange = () => {} } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    getTags()
      .then((response) => {
        setData(response);
      })
      .catch((e) => console.log(e));
  }, []);

  const onSelect = (id, target) => {
    const { value, key } = target;
    onChange({ id: Number(key), value });
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
