import AppProvider from "../../contexts/AppContext";
import { Box, Row } from "../Grid";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const Frame = (props) => {
  return (
    <Row minHeight="100vh">
      <AppProvider>
        <Sidebar />
        <Box width="100%">
          <Header />
          {props.children}
        </Box>
      </AppProvider>
    </Row>
  );
};

export default Frame;
