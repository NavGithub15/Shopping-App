import "./Header.scss";
import { Link } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import SideDrawer from "../SideDrawer/SideDrawer";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../../context/Context";
import { useContext } from "react";
import logo from "../../assets/shopit.png";

export default function Header() {
  // opens the bottom drawer using the useDisclosure hook from chakra-ui
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { totalQty } = useContext(CartContext);

  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      padding="1rem 2rem 1rem 2rem"
      bg="#FEF5EC"
      justifyContent="space-between"
      margin="0 auto"
      border="1px solid black"
    >
      <Flex align="center">
        <Link to="/">
          <img
            className="header-logo"
            width={150}
            height={20}
            src={logo}
            alt="logo"
          />
        </Link>
      </Flex>

      <Flex align="center">
        <button onClick={onOpen} className="header-button">
          <BsCart className="react-icons react-icons-custom" />
          <span className="header-span">{totalQty}</span>
        </button>
      </Flex>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
