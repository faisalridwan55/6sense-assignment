import { Row } from "../Grid";
import Sidebar from "./components/sidebar";

const Frame = (props) => {
  return (
    <Row minHeight="100vh">
      <Sidebar />
      {props.children}
    </Row>
  );
};

export default Frame;
