import { Layout } from "antd";
import "antd/dist/antd.min.css";
import ImageList from "./components/imageList/imageList";

const { Header, Content } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <div style={{ color: "white" }}>React - Front End Exercise </div>
    </Header>
    <Content style={{ padding: "50px" }}>
      <ImageList />
    </Content>
  </Layout>
);

export default App;
