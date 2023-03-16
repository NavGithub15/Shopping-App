import {
  Drawer,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
// import { Cart } from "../../context/Context";

export default function SideDrawer({ open }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { cartItems, addItem } = useContext(Cart);
  
  return (
    <>
      <Drawer
        open={open}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerCloseButton />
        <DrawerOverlay />
        <DrawerContent>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
