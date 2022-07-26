import { Box, Row } from "../Grid";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const Frame = (props) => {
  return (
    <Row minHeight="100vh">
      <Sidebar />
      <Box width="100%">
        <Header />
        {props.children}
      </Box>
    </Row>
  );
};

export default Frame;
