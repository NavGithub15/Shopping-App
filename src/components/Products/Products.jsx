import "./Products.scss";
import { useProducts } from "../../utils/utils";
import { Container, Box, Flex, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function Products() {
  const { isLoading, error, data } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Container padding="0" margin="0" width="100%" maxW="100%">
        <Flex
          flexWrap="wrap"
          p={{ base: "1rem", lg: "2rem" }}
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
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  padding="0"
                  key={product.userId.id}
                >
                  <Image src={product.imageURLs[0]} alt="products image" />

                  <Box>
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    ></Box>
                    <Box display="flex" mt="2" alignItems="center">
                      {/* {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'yellow.500' : 'gray.300'}
              />
            ))} */}
                      <Box as="span" color="gray.600" fontSize="sm">
                        5 reviews
                      </Box>
                    </Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                      $100
                      <Icon as={MdOutlineAddShoppingCart} />
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
