import React from "react";
import BalanceModal from "./BalanceModal";
import Table from "./Table";

const Card = () => {
  return (
    <div className="card py-4 border-0">
      <h2 className="text-center py-4 ">Connect your wallet and check details </h2>
      <div className="d-flex justify-content-center">
        <button className="col-2  border-0  py-3 btn btnBg" type="button">
          <span className="txtColor"> Connect Wallet</span>
        </button>
      </div>

      <div className="card-body ">
        <div className="row mt-5">
          <div className="col-10">
            <input className="form-control py-3" type="string" placeholder="Enter Your wallet address " />
          </div>
          <div className="col-2 ">
            <BalanceModal />
          </div>

          <div className="row mx-0 mt-5 mb-3">
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
