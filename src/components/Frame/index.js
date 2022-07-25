import { Box, Row } from "../Grid";
import Sidebar from "./components/sidebar";

const Frame = (props) => {
  return (
    <Row minHeight="100vh">
      <Sidebar />
      <Box width="100%">
        {props.children}
      </Box>
    </Row>
  );
};

export default Frame;
