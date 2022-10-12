import React, { useEffect, useState } from "react";
import BalanceModal from "./BalanceModal";
import Table from "./Table";

const Card = () => {
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");

  //first checking window.etherium object is present or not that means metamask is installed or not in the browser
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        //metamask is installed get all the accounts
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setCurrentWalletAddress(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    } else {
      //ask user to install install
      console.log("Please install metamask");
    }
  };
  console.log(currentWalletAddress);

  useEffect(() => {
    const getCurrentlyConnectedWalletAddress = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          //metamask is installed get all the accounts
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts.length > 0) {
            setCurrentWalletAddress(accounts[0]);
          } else {
            console.log("Wallet is not connected play try again once ");
          }
        } catch (error) {}
      } else {
        //ask user to install install
        console.log("Please install metamask");
      }
    };
    getCurrentlyConnectedWalletAddress();
  });

  useEffect(() => {
    //when we changed wallet or disconnected the wallet the effect should be immediately reflect in the frontend
    const walletRemovedOrWalletChangedListener = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        window.ethereum.on("accountsChanged", (accounts: any) => {
          setCurrentWalletAddress(accounts[0]);
        });
      } else {
        //ask user to install install
        setCurrentWalletAddress("");
        console.log("Please install metamask");
      }
    };
    walletRemovedOrWalletChangedListener();
  });

  return (
    <div className="card py-4 border-0">
      {currentWalletAddress ? (
        <div className="d-flex m-0 align-items-center justify-content-end gap-1 px-3">
          <div className="p-2  blinkChild rounded-circle" style={{ backgroundColor: "green" }}></div>
          <h5 className="m-0">Connected</h5>
        </div>
      ) : null}

      {currentWalletAddress ? (
        <>
          <h2 className="text-center py-3 ">Your Wallet Address </h2>
          <div className="d-flex justify-content-center">
            <p className="txtColor  py-2 px-2 rounded-2 btnBg" style={{ color: "#F5F5DC" }}>
              {currentWalletAddress}
            </p>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center py-4 ">Connect your wallet and check details </h2>
          <div className="d-flex justify-content-center">
            <button onClick={connectWallet} className="col-2  border-0  py-2 btn btnBg" type="button" style={{ width: "180px" }}>
              <span className="txtColor"> Connect Wallet</span>
            </button>
          </div>
        </>
      )}
      <div className="card-body ">
        <div className="row mt-5">
          <div className="row mx-0 ">
            <div className="col-12 col-sm-8 px-0 col-md-9 mb-3  ">
              <input type="string" placeholder="Enter Your wallet address " className="form-control w-100 py-3  " id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="px-sm-0 col-12 col-sm-4 px-0  col-md-3 ">
              <BalanceModal />
            </div>
          </div>

          <div className="row  mx-0 mt-5 mb-3">
            <button className="btn border-0  py-2 btnBg" type="button">
              <span className="txtColor"> Get Latest Transaction Details</span>
            </button>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Card;
