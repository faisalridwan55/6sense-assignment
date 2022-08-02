import styled from "styled-components";
import { Box, Row } from "./Grid";

export const Card = styled(Box)`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const CardHeader = (props) => (
  <Row
    padding="24px"
    justifyContent="space-between"
    marginBottom="16px"
    style={{ borderBottom: "1px solid #EFEFEF" }}
  >
    {props.children}
  </Row>
);

export const CardBody = (props) => {
  const componentProps = {
    style: {
      flexWrap: props.wrap ? "wrap" : "no-wrap",
      padding: "24px",
      justifyContent: "center",
      gap: "16px",
    },
    ...props,
  };
  return props.row ? <Row {...componentProps} /> : <Box {...componentProps} />;
};
