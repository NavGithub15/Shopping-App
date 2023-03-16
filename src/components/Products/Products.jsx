import "./Products.scss";
import { useProducts } from "../../utils/utils";
import { Container, Box, Flex, Icon, Image, Spinner } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Broken from "../../assets/images/broken.png";
import LoadingError from "../LoadingError/LoadingError";

export default function Products() {
  // get all the products using the useProducts hook
  const { data } = useProducts();

  // If the products loading or gets an error, show a message
  if (!data) {
    return <LoadingError />;
  }

  return (
    <>
      <Container
        padding="0"
        margin="0"
        width="100%"
        maxW="100%"
        maxH="710px"
        overflow="auto"
      >
        <Flex
          flexWrap="wrap"
          p={{ base: "1rem" }}
          sx={{
            "@media screen and (min-width: 62rem)": {
              border: "1px solid lightgray",
            },
            "@media screen and (min-width: 20rem)": {
              borderTop: "1px solid lightgray",
            },
          }}
        >
          {data
            ? data.data.products.map((product) => (
                <Box
                  maxW="280px"
                  margin="1rem auto"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  padding="0"
                  key={product._id}
                >
                  <Image
                    src={product.imageURLs[0]}
                    alt="products image"
                    border="1px solid lightgray"
                  />
                  <Box>
                    <Box
                      mt="1"
                      marginLeft=".5rem"
                      marginRight=".5rem"
                      fontWeight="semibold"
                      as="h5"
                      lineHeight="tight"
                    >
                      {product.fulhausProductName}
                    </Box>
                    <Box display="flex" alignItems="center">
                      {new Array(5).fill("").map((_, i) => (
                        <StarIcon
                          key={i}
                          color={"yellow.500"}
                          mt="1"
                          marginLeft="8px"
                        />
                      ))}
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      margin="0.5rem 0.5rem 1rem 0.5rem"
                      fontSize="1rem"
                      as="h6"
                      fontWeight="semibold"
                      color="gray.600"
                    >
                      ${product.rentalPrice}
                      <Icon
                        as={MdOutlineAddShoppingCart}
                        className="react-icons"
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                </Box>
              ))
            : null}
        </Flex>
      </Container>
    </>
  );
}
