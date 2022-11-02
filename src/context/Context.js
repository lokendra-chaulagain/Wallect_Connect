import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";
import { ethers } from "ethers";
export const WalletConnect = createContext();

export const WalletConnectProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(undefined);
  const [accountBalance, setAccountBalance] = useState("");

  const connectionSuccess = () => toast.success("Wallet connected Successfully ");
  const alreadyConnected = () => toast.success("Wallet Already Connected ! ");

  // This functions runs on every page refresh and gets connected wallet address.
  useEffect(() => {
    const getCurrentlyConnectedWalletAddress = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts.length > 0) {
            setCurrentAccount(accounts[0]);

            const balance = await window.ethereum.request({
              method: "eth_getBalance",
              params: [currentAccount, "latest"],
            });
            setAccountBalance(ethers.utils.formatEther(balance));
          } else {
            console.log("Wallet is not connected please try again once ");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Please install metamask");
      }
    };
    getCurrentlyConnectedWalletAddress();
  }, [currentAccount]);

  // Connect wallet function
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setCurrentAccount(accounts[0]);
        {
          currentAccount ? alreadyConnected() : connectionSuccess();
        }
        console.log(`Wallet connected successfully and wallet address is ${accounts[0]}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install metamask");
    }
  };

  // Function that listen on account changed
  useEffect(() => {
    const walletRemovedOrWalletChangedListener = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        window.ethereum.on("accountsChanged", (accounts) => {
          setCurrentAccount(accounts[0]);
        });
      } else {
        console.log("Please install metamask");
      }
    };
    walletRemovedOrWalletChangedListener();
  }, []);

  return <WalletConnect.Provider value={{ connectWallet, currentAccount, accountBalance }}>{children}</WalletConnect.Provider>;
};
