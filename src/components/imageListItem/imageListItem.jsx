import { List, Card, Image, Tag } from "antd";
import { useState } from "react";

const ImageListItem = (props) => {
  const { item: itemData } = props;

  const [item, setItem] = useState(itemData);

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
      </div>
    </List.Item>
  );
};

export default ImageListItem;
