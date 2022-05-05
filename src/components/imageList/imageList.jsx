import { useState } from "react";
import { List } from "antd";

import ImageListItem from "../imageListItem/imageListItem";

const ImageList = () => {
  const [data, setData] = useState([]);

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={data}
      renderItem={(item) => (
        <ImageListItem item={item} />
      )}
    />
  );
};

export default ImageList;
