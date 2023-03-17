import {
  Drawer,
  DrawerFooter,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  Button,
  Image,
  Card,
  Stack,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../context/Context";

export default function SideDrawer({ isOpen, onClose }) {
  // Import cartItems from context displays array of cartItems and removeProduct function removes item from cartItems array
  // totalPrice function calculates total price of cartItems
  const { cartItems, removeProduct, addProduct, totalPrice } =
    useContext(CartContext);

  return (
    <>
      <Drawer open={open} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            padding="1rem"
            bgColor="#e7e6dd"
            flexDirection="column"
            height="100vh"
            justifyContent="space-between"
          >
            <Heading fontFamily="eb garamond" fontWeight="300">
              My Orders
            </Heading>
            <DrawerBody padding="0" maxH="700px" overflow="auto">
              {cartItems && cartItems.length ? (
                cartItems.map((item) => (
                  <Card
                    fontWeight="300"
                    bgColor="#e7e6dd"
                    direction={{ base: "row", sm: "row" }}
                    mt="1rem"
                    overflow="hidden"
                    variant="outline"
                    height="150px"
                    key={item._id}
                  >
                    <Image
                      objectFit="cover"
                      backgroundRepeat="no-repeat"
                      objectPosition="50% 50%"
                      maxW={{ base: "100px", sm: "100px" }}
                      src={item.imageURLs[0]}
                      alt="image"
                      ml=".5rem"
                    />

                    <Stack fontFamily="eb garamond">
                      <Flex justify="space-between" align="center">
                        <Text
                          fontSize="1rem"
                          fontFamily="eb garamond"
                          fontWeight="600"
                          margin=" 1rem .5rem"
                        >
                          {item.fulhausProductName}
                        </Text>
                      </Flex>
                      <Flex justify="space-between" align="" margin="0 1rem">
                        <Text py="2" margin="0 .5rem" fontWeight="600">
                          ${item.rentalPrice}
                        </Text>
                        <Flex alignItems="center" mr=".5rem">
                          <FaTrash
                            cursor="pointer"
                            onClick={() => {
                              removeProduct(item);
                            }}
                          />
                          <Text py="2" margin="0 .5rem" fontWeight="600">
                            {`${item.quantity}x`}
                          </Text>
                          <FaPlus
                            cursor="pointer"
                            onClick={() => {
                              addProduct(item);
                            }}
                          />
                        </Flex>
                      </Flex>
                    </Stack>
                  </Card>
                ))
              ) : (
                <Flex
                  padding="1rem"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="space-between"
                  position="absolute"
                  top="30%"
                  left="15%"
                >
                  <AiOutlineShoppingCart fontSize="5rem" />
                  <Heading as="h2" fontFamily="eb garamond" fontWeight="300">
                    Cart is empty
                  </Heading>
                </Flex>
              )}
            </DrawerBody>
            <DrawerFooter
              flexDirection="column"
              justifyContent="space-between"
              padding="0"
            >
              <Flex
                align="center"
                justifyContent="space-between"
                fontSize="2rem"
                width="100%"
                mb="1rem"
              >
                <Text fontFamily="eb garamond">Total</Text>
                <Text fontFamily="eb garamond">${totalPrice}</Text>
              </Flex>
              <Flex
                align="center"
                justifyContent="space-between"
                fontSize="2rem"
                width="100%"
              >
                <Button bgColor="white" onClick={onClose} borderRadius="none">
                  Shop More
                </Button>
                <Button
                  bgColor="black"
                  borderRadius="none"
                  color="white"
                  _hover={{ bgColor: "rgba(0,0,0,0.7)" }}
                >
                  Checkout
                </Button>
              </Flex>
            </DrawerFooter>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
