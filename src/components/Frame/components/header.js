import { useContext, useMemo } from "react";
import { motion } from "framer-motion";

import { Card } from "../../Card";
import { Box, Row } from "../../Grid";
import useMyLocation from "../../../hooks/useMyLocation";
import { AppContext } from "../../../contexts/AppContext";

const borderStyle = "1px solid rgba(0, 0, 0, 0.1)";

const DropDownIcon = () => (
  <svg
    width="10"
    height="5"
    viewBox="0 0 10 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.757324 0H9.24261L4.99996 4.24264L0.757324 0Z"
      fill="black"
    />
  </svg>
);

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
  const {
    currentUser: { name, avatar, notifications_count: notificationsCount },
  } = useContext(AppContext);

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
          <Row justifyContent="space-between" alignItems="center">
            <Box>{printedLocation}</Box>
            <Box>
              <Row justifyContent="center" alignItems="center" gap="8px">
                <Box
                  as={motion.div}
                  width="36px"
                  height="36px"
                  position="relative"
                  alignItems="center"
                  justifyContent="center"
                  whileHover={{
                    cursor: "pointer",
                    backgroundColor: "rgba(0,0,0,.05)",
                  }}
                >
                  <Row
                    top="-8px"
                    width="18px"
                    right="-5px"
                    height="18px"
                    color="white"
                    alignItems="center"
                    position="absolute"
                    justifyContent="center"
                    style={{
                      borderRadius: "50%",
                      background: "#2995DA",
                      border: "2px solid white",
                    }}
                  >
                    3
                  </Row>
                  <MailIcon />
                </Box>
                <Box opacity=".5">{`Hello, ${name}`}</Box>
                <Box>
                  <img
                    src={avatar}
                    alt="avatar"
                    sizes="36px"
                    style={{
                      width: "36px",
                      borderRadius: "50%",
                      border: "1px solid rgba(0,0,0,.25)",
                    }}
                  />
                </Box>
                <Box>
                  <DropDownIcon />
                </Box>
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
