import { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletConnectProvider } from "../context/Context";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  return (
    <>
      <WalletConnectProvider>
        <Component {...pageProps} />
      </WalletConnectProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default MyApp;
