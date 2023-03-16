import "./ProductsDetails.scss";
import { Container} from "@chakra-ui/react";

export default function ProductDetails() {
  return (
    <>
      <Container
        bg="#e7e6dd"
        padding="0"
        margin="0"
        p={{base: "1rem", lg: "2rem"}}
        width={{ base: "100%", lg: "60%" }}
        maxW={{ base: "100%", lg: "100%" }}
      >
        <h1>Product Details</h1>
      </Container>
    </>
  );
}
