import "./Products.scss";
import { useState } from "react";
import { useProducts } from "../../utils/utils";
import { Container, Box, Grid, Icon, Image, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import LoadingError from "../LoadingError/LoadingError";
import { useContext } from "react";
import { CartContext } from "../../context/Context";

export default function Products() {
  const [page, setPage] = useState(1);
  // Imports addProduct function from context and adds product to empty array
  const { addProduct } = useContext(CartContext);
  const limit = 20;

  // get all the products using the useProducts hook
  // isLoading is used to determine if the products are loading or not
  // error is used to determine if there is an error or not
  const { isLoading, error, products, totalPages } = useProducts(page, limit);

  //  If the products from api is true render component else render LoadingError component
  if (isLoading || !products || error) {
    return <LoadingError isLoading={isLoading} error={error} />;
  }

  return (
    <>
      <Container
        borderBottom="none"
        borderTop="1px solid black"
        borderRight="1px solid black"
        borderLeft="1px solid black"
        bg="#FEF5EC"
        padding="0"
        margin="0"
        width="100%"
        maxW="100%"
        // maxH="820px"
        // overflow="auto"
      >
        <Box as="h1" mt="1rem" fontSize="2rem" textAlign="center">
          Products
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={6}
          p={{ base: "1rem" }}
        >
          {products
            ? products.map((product) => (
                <Box
                  bg="white"
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
                    loading="lazy"
                    alt="products image"
                    border="1px solid lightgray"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    // width="100%"
                    height="18rem"
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
                      ${product.retailPrice}
                      <Icon
                        as={MdOutlineAddShoppingCart}
                        className="react-icons"
                        cursor="pointer"
                        onClick={() => {
                          addProduct(product);
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))
            : null}
        </Grid>
        <Box mt={4} textAlign="center" marginBottom="1rem">
          {page > 1 && (
            <Button
              onClick={() => setPage(page - 1)}
              style={{ marginRight: "10px" }}
            >
              Previous
            </Button>
          )}
          {page < totalPages && (
            <Button onClick={() => setPage(page + 1)}>Next</Button>
          )}
        </Box>
      </Container>
    </>
  );
}
