import { useState, useEffect } from "react";
import { List } from "antd";

import { getImages } from "../../services/image";
import ImageListItem from "../imageListItem/imageListItem";

const ImageList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getImages()
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((e) => console.log(e));
  }, []);

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
