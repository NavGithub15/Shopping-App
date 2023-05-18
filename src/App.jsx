import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ShopNow from "./pages/ShopNow/ShopNow";
import { Text } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopNow" element={<ShopNow />} />
          <Route
            path="*"
            element={
              <Text
                textAlign="center"
                marginTop="5rem"
                fontSize="2xl"
                fontWeight="bold"
              >
                There's nothing here: 404!
              </Text>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
