import { Box, Row } from "../../Grid";

const borderStyle = "1px solid #E2E2E2";
const Header = (props) => {
  return (
    <Row height="80px">
      <Box
        width="20%"
        alignItems="center"
        justifyContent="center"
        style={{
          borderRight: borderStyle,
          borderBottom: borderStyle,
          color: "#1A1919",
        }}
      >
        NARWHAL
      </Box>
      <Box
        width="80%"
        padding="0px 24px"
        justifyContent="center"
        style={{ borderBottom: borderStyle }}
      >
        Teams
      </Box>
    </Row>
  );
};

export default Header;
