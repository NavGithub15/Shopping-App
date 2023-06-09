import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import ProductsImage from "../../components/ProductsImage/ProductsImage"
import "./Home.scss";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content-container">
          <h1 className="hero__content">
            <motion.span
              className="hero__text-left"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.3, ease: "easeInOut" },
              }}
            >
              Transform Your Space
            </motion.span>
            <motion.span
              className="hero__text-right"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
              }}
            >
              Discover Your Style
            </motion.span>
          </h1>
          <Link className="hero__cta" to="/shopNow">
            Shop Now
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 35 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hero__cta-icon"
            >
              <path
                d="M22.0645 0L21.0115 1.05817L32.0964 12.1978H0V13.6942H32.2027L21.0115 24.9418L22.0645 26L35 12.9995L22.0645 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      {/* <ProductsImage /> */}
    </div>
  );
}
