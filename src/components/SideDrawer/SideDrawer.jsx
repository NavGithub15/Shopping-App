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
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";

export default function SideDrawer({ isOpen, onClose }) {
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
              <Card
                fontWeight="300"
                direction={{ base: "row", sm: "row" }}
                mt="1rem"
                overflow="hidden"
                variant="outline"
                height="150px"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100px", sm: "100px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />

                <Stack fontFamily="eb garamond" fontWeight="300">
                  <Flex justify="space-between" align="center">
                    <Heading
                      size="md"
                      fontFamily="eb garamond"
                      margin=" 2rem .5rem"
                    >
                      The perfect latte
                    </Heading>
                    <FaTrash />
                  </Flex>
                  <Flex justify="space-between" align="" margin="0 1rem">
                    <Text py="2" margin="0 .5rem">
                      $10
                    </Text>
                    <Text py="2" margin="0 .5rem">
                      1x
                    </Text>
                  </Flex>
                </Stack>
              </Card>
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
                <Text fontFamily="eb garamond">$10</Text>
              </Flex>
              <Flex
                align="center"
                justifyContent="space-between"
                fontSize="2rem"
                width="100%"
              >
                <Button bgColor="white" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  bgColor="black"
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
