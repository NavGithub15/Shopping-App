import "./ProductsDetails.scss";
import { useState } from "react";
import { Container, Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/images/image1.jpeg";
import Image2 from "../../assets/images/image2.jpeg";
import Image3 from "../../assets/images/image3.jpeg";
import Image4 from "../../assets/images/image4.jpeg";
import Image5 from "../../assets/images/image5.jpeg";
import Image6 from "../../assets/images/image6.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

export default function ProductDetails() {
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
        breakpoint: "768px",
        settings: {
          width: "100vw",
        },
      },
    ],
  };

  return (
    <>
      <Container padding="0" margin="0">
        <Slider
          {...settings}
          sx={{
            "@media screen and (max-width: 320px)": {
              margin: 0,
            },
          }}
        >
          {images.map((image, index) => (
            <Box
              bg="#e7e6dd"
              p={{ base: "1rem", lg: "2rem" }}
              width={{ base: "100%" }}
              maxW={{ base: "100%", lg: "100%" }}
              key={index}
            >
              <Image
                src={image}
                alt={index}
                objectFit="cover"
                objectPosition="50% 50%"
                height={{ base: "100vh", lg: "80vh" }}
                backgroundSize="cover"
                maxHeight={{ base: "100vh", lg: "100%" }}
                width={{ base: "100%" }}
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
