import "./ShopNow.scss"
import Products from "../../components/Products/Products";
import ProductDetails from "../../components/ProductsDetails/ProductDetails";


export default function ShopNow() {
  return (
    <>
    <main className="shopNow">
      <div className="shopNow__container">
      <ProductDetails />
      <Products />
      </div>
    </main>
    </>
  )
}
