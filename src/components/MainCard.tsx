import React, { useContext } from "react";
import { WalletConnect } from "../context/Context";
import BeatLoader from "react-spinners/BeatLoader";

const MainCard = () => {
  const { connectWallet, currentAccount, accountBalance, loading } = useContext(WalletConnect);
  return (
    <div className="card custom_Card  px-2 py-3 border-1 rounded-1 mx-2 ">
      <div className=" ">
        <h5 className="card_heading text-center">Connect wallet and check your balance</h5>
      </div>

      <div className="mt-3 ">
        <label
          className="input_label"
          htmlFor="address">
          Wallet Address
        </label>

        <input
          value={currentAccount}
          readOnly
          className="input_field border-0 rounded-0 py-2 px-2 mt-1"
          placeholder="No any wallet connected !"
        />
      </div>

      <div className="mt-4">
        <label
          className="input_label"
          htmlFor="amount">
          Wallet Amount (ETH)
        </label>

        <div className="input_field d-flex align-items-center mt-1 ">
          {currentAccount && accountBalance ? (
            <input
              value={accountBalance}
              readOnly
              className="input_field border-0 rounded-0 py-2 px-2  "
              placeholder="0"
            />
          ) : currentAccount && !accountBalance ? (
            <BeatLoader
              color="#1e5262"
              className="input_field border-0 rounded-0 py-2 mt-1 "
            />
          ) : (
            <input
              value={accountBalance}
              readOnly
              className="input_field border-0 rounded-0 py-2 px-2  "
              placeholder="0"
            />
          )}
        </div>
      </div>

      <button
        onClick={connectWallet}
        type="button"
        className="custom_button d-flex align-items-center justify-content-center btn px-4 py-3 mt-3   rounded-1">
        {loading && !currentAccount ? <BeatLoader color="#1e5262" /> : currentAccount ? "Connected" : "Connect Wallet"}
      </button>

      {loading && !currentAccount ? (
        <div
          className="alert custom_alert mt-4 text-center rounded-"
          role="alert">
          Please accept the Wallet connection request !!
        </div>
      ) : null}
    </div>
  );
};

export default MainCard;
 