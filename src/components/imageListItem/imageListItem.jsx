import { List, Card, Image, Tag, Button } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import SelectTag from "../selectTag/selectTag";

const ImageListItem = (props) => {
  const { item: itemData } = props;

  const [selectTag, setSelectTag] = useState();
  const [item, setItem] = useState(itemData);

  const handleChangeTag = (value) => {
    setSelectTag(value);
  };

  const handleAdd = () => {
    // TO DO
  };

  const handleRemove = (value) => {
    // TO DO
  };
  return (
    <List.Item key={item.id}>
      <div style={{ display: "flex", backgroundColor: "#BDC0C9" }}>
        <Card
          title={item.title}
          cover={<Image src={item.imageUrl} fallback="default_image.svg" />}
        >
          {item.tags.map((tag) => (
            <Tag
              key={tag.id}
              visible
              closable
              onClose={() => handleRemove(tag.id)}
            >
              {tag.label}
            </Tag>
          ))}
        </Card>
        <div style={{ margin: "auto", width: "300px", padding: 8 }}>
          <SelectTag onChange={handleChangeTag} />
          <div style={{ marginTop: 8 }}>
            <Button
              size="small"
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAdd}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </List.Item>
  );
};

export default ImageListItem;
