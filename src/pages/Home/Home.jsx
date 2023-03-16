import "./Home.scss";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content-container">
          <h1 className="hero__content">
            <span className="hero__text-left">
              <span className="hero__span-0">Elevate your property </span>
            </span>
            <span className="hero__text-right">
              <span className="hero__span-1">with thoughtful design</span>
            </span>
          </h1>
          <Link className="hero__cta">
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
    </div>
  );
}
