import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";
import CartState from "../store/CartState";
import UserState from "../store/UserState";
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
    <UserState>
      <CartState>
        {showHeader && <Navbar />}
        <Component {...pageProps} />
        {showHeader && <Footer />}
      </CartState>
    </UserState>
  );
}

export default MyApp;
