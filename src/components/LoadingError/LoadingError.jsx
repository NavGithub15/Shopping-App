import { useProducts } from "../../utils/utils";
import { Box, Image, Spinner } from "@chakra-ui/react";
import Broken from "../../assets/images/broken.png";

export default function LoadingError({ isLoading, error }) {

  return (
    <>
      {isLoading || error ? (
        <Box
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="100vh"
          width="100vw"
          marginTop="3rem"
        >
          {isLoading ? (
            <>
              <Spinner size="xl" />
              <Box fontSize="2xl" mt={4}>
                Loading....
              </Box>
            </>
          ) : (
            <Box>
              <Image
                src={Broken}
                alt="broken"
                boxSize="10rem"
                margin=" 2rem auto"
              />
              <Box>{`Something went wrong: ${error.message}`}</Box>
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
}
