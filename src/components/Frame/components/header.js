import { useMemo } from "react";

import { Card } from "../../Card";
import { Box, Row } from "../../Grid";
import useMyLocation from "../../../hooks/useMyLocation";

const borderStyle = "1px solid rgba(0, 0, 0, 0.1)";

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path
        d="M4 11V1H20V11"
        stroke="#444444"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 15V23H1V15H8V18H16V15H23Z"
        stroke="#444444"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M9 6H15"
        stroke="#444444"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M9 10H15"
        stroke="#444444"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </g>
  </svg>
);

const Header = (props) => {
  const location = useMyLocation();

  const printedLocation = useMemo(() => {
    return location.charAt(0).toUpperCase() + location.slice(1) || "Teams";
  }, [location]);

  return (
    <Card>
      <Row height="80px" style={{ borderBottom: borderStyle }}>
        <Box
          padding="0 24px"
          justifyContent="center"
          style={{
            color: "rgba(0,0,0,0.5)",
            borderRight: borderStyle,
          }}
        >
          NARWHAL
        </Box>
        <Box width="100%" padding="0px 24px" justifyContent="center">
          <Row justifyContent="space-between">
            <Box>{printedLocation}</Box>
            <Box>
              <Row>
                <Box>
                  <MailIcon />
                  <div></div>
                </Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </Row>
            </Box>
          </Row>
        </Box>
      </Row>
      <Row>TEST</Row>
    </Card>
  );
};

export default Header;
