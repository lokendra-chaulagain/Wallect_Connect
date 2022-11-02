import React, { useContext } from "react";
import { WalletConnect } from "../context/Context";

const MainCard = () => {
  const { connectWallet, currentAccount, accountBalance } = useContext(WalletConnect);
  console.log(accountBalance);
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
        {currentAccount ? (
          <input
            value={currentAccount}
            className="input_field border-0 rounded-0 py-2 px-2 mt-1"
            placeholder="No any wallet connected !"
          />
        ) : (
          <input
            className="input_field border-0 rounded-0 py-2 px-2 mt-1"
            placeholder="No any wallet connected !"
          />
        )}
      </div>

      <div className="mt-4">
        <label
          className="input_label"
          htmlFor="amount">
          Wallet Amount (ETH)
        </label>
        {accountBalance ? (
          <input
            value={accountBalance}
            className="input_field border-0 rounded-0 py-2 px-2 mt-1 "
            placeholder="0"
          />
        ) : (
          <input
            className="input_field border-0 rounded-0 py-2 px-2 mt-1 "
            placeholder="0"
          />
        )}
      </div>

      <button
        onClick={connectWallet}
        type="button"
        className="custom_button btn px-4 py-3 mt-3  rounded-1">
        {currentAccount ? "Connected" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default MainCard;
