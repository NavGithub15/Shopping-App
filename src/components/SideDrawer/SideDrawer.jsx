import {
  Drawer,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Image,
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";

export default function SideDrawer({ isOpen, onClose }) {
  return (
    <>
      <Drawer open={open} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerCloseButton />
        <DrawerOverlay />
        <DrawerContent padding="1rem" bgColor="#e7e6dd">
          <Heading fontFamily="eb garamond" fontWeight="300">
            My Orders
          </Heading>
          <Card
            fontFamily="eb garamond"
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

            <Stack>
              <CardBody>
                <Heading size="md">The perfect latte</Heading>

                <Text py="2">$10</Text>
                <Text py="2">1x</Text>
              </CardBody>
            </Stack>
          </Card>
          <DrawerFooter justifyContent="space-around">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              bgColor="black"
              color="white"
              _hover={{ bgColor: "rgba(0,0,0,0.7)" }}
            >
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
