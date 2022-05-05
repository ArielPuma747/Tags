import { List, Card, Image, Tag, Button, notification } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import SelectTag from "../selectTag/selectTag";
import { tagImage } from "../../services/tag";

const ImageListItem = (props) => {
  const { item: itemData } = props;

  const [selectTag, setSelectTag] = useState();
  const [item, setItem] = useState(itemData);

  const handleChangeTag = (value) => {
    setSelectTag(value);
  };

  const handleAdd = () => {
    const { id, value } = selectTag;
    const indexTag = item.tags.findIndex((tag) => tag.id == id);

    if (indexTag < 0) {
      const newItem = { ...item };
      newItem.tags.push({ id, label: value });
      setItem(newItem);
      tagImage(item.id, id, newItem)
        .then(() => {
          notification.success({ message: "Successfull" });
        })
        .catch((e) => notification.error({ message: e }));
    } else {
      notification.error({
        message: "This Tag is already in use",
      });
    }
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
