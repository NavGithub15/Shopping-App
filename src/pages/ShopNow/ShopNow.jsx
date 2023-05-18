import "./ShopNow.scss";
import Products from "../../components/Products/Products";
import ProductsImage from "../../components/ProductsImage/ProductsImage";

export default function ShopNow() {
  return (
    <>
      <main className="shopNow">
        <div className="shopNow__container">
        <ProductsImage />
          <Products />
        </div>
      </main>
    </>
  );
}
