import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";
import CartState from "../store/CartState";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/signin" ||
    router.pathname === "/signup" ||
    router.pathname === "/forgot"
      ? false
      : true;
  return (
    <CartState>
      {showHeader && <Navbar />}
      <Component {...pageProps} />
      {showHeader && <Footer />}
    </CartState>
  );
}

export default MyApp;
