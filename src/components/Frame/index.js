import { Row } from "../Grid";
import Sidebar from "./components/sidebar";

const Frame = (props) => {
  return (
    <Row minHeight="100vh">
      <Sidebar />
      <div>
        {props.children}
      </div>
    </Row>
  );
};

export default Frame;
