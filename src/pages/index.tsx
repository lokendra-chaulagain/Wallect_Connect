import { useContext } from "react";
import MainCard from "../components/MainCard";
import { WalletConnect } from "../context/Context";

const Home = () => {
  const { connectWallet, currentAccount } = useContext(WalletConnect);
  return (
    <div className="app_body">
      <div className="pt-3 px-4 d-flex container justify-content-end">
        <button
          onClick={connectWallet}
          type="button"
          className="custom_button btn px-4 py-2 rounded-pill">
          {currentAccount ? "Connected" : "Connect Wallet"}
        </button>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-5">
        <MainCard />
      </div>
    </div>
  );
};

export default Home;
