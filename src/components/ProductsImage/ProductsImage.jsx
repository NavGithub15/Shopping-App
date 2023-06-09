import { Container, Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpeg";
import Image4 from "../../assets/images/image4.jpeg";
import Image5 from "../../assets/images/image5.jpg";
import Image6 from "../../assets/images/image6.jpeg";
import Image7 from "../../assets/images/image7.jpeg";
import Image8 from "../../assets/images/image8.jpeg";
import Image9 from "../../assets/images/image9.jpg";
import Image10 from "../../assets/images/image10.jpeg";
import Image11 from "../../assets/images/image11.jpeg";
const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11];

export default function ProductDetails() {
  // React carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          width: "100vw",
        },
      },
    ],
  };

  return (
    <>
      <Container padding="0" margin="0" marginBottom="2rem" width="full">
        <Slider
          style={{ width: "100vw" }}
          {...settings}
          sx={{
            "@media screen and (max-width: 320px)": {
              margin: 0,
            },
          }}
        >
          {images.map((image, index) => (
            <Box
              bg="white"
              p={{ base: "1rem", lg: "2rem" }}
              width={{ base: "100%" }}
              height="30rem"
              maxW={{ base: "100%", lg: "100%" }}
              key={index}
            >
              <Image
                src={image}
                alt={index}
                objectFit="cover"
                objectPosition="50% 50%"
                height={{ base: "100vh", lg: "80vh" }}
                backgroundSize="contain"
                maxHeight={{ base: "100vh", lg: "100%" }}
                width={{ base: "100vw", md: "100vw" }}
                maxWidth={{ base: "100%", lg: "100%" }}
                // Add media queries to adjust the image size on smaller screens
                sx={{
                  "@media screen and (max-width: 767px)": {
                    height: "100vw",
                    width: "100vw",
                    objectPosition: "50% 0",
                    objectFit: "cover",
                  },
                  "@media screen and (min-width: 768px) and (max-width: 1023px)":
                    {
                      height: "50vh",
                    },
                }}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </>
  );
}
