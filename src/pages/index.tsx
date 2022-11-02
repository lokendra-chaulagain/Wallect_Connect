import { useContext } from "react";
import MainCard from "../components/MainCard";
import { WalletConnect } from "../context/Context";
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {
  const { connectWallet, currentAccount, loading } = useContext(WalletConnect);
  return (
    <div className="app_body">
      <div className="pt-3 px-4 d-flex container justify-content-end">
        <button
          onClick={connectWallet}
          type="button"
          className="custom_button d-flex align-items-center justify-content-center btn px-4 py-2 rounded-pill">
          {loading && !currentAccount ? <BeatLoader color="#1e5262" /> : currentAccount ? "Connected" : "Connect Wallet"}
        </button>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-5">
        <MainCard />
      </div>
    </div>
  );
};

export default Home;
