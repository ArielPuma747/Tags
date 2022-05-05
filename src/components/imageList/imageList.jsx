import { List } from "antd";

const ImageList = () => {

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
      dataSource={[]}
    />
  );
};

export default ImageList;
