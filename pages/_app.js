import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";
import CartState from "../store/CartState";

function MyApp({ Component, pageProps }) {
  return (
    <CartState>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartState>
  );
}

export default MyApp;
