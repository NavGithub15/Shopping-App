import { Box, Flex } from "@chakra-ui/react";
import logo from "../../assets/shopit.png";

export default function Footer() {
  return (
    <Box
      borderTop="none"
      border="1px solid black"
      as="footer"
      w="100%"
      h="6rem"
      bg="#FEF5EC"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex as="p" alignItems="center">
        Copyright{" "}
        <img
          style={{ mixBlendMode: "darken" }}
          src={logo}
          width={100}
          height={10}
          alt="logo"
        />{" "}
        2023
      </Flex>
    </Box>
  );
}
