import React from "react";

const BalanceModal = () => {
  return (
    <div>
      <button className="btn border-0  py-3 btnBg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <span className="txtColor"> Check Balance</span>
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade  modalBorder" id="exampleModal" tab-index="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modalBorder  ">
          <div className="modal-content modalBg">
            <div className="modal-header ">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h1 className="modal-title text-center my-3  modalTxtColor fs-5" id="exampleModalLabel">
              Your Current Balance : 6736 ethers
            </h1>

            <div className="d-flex align-content-center justify-content-end px-2">
              <button className="col-3 btn border-0 px-4  my-3 btnBg" type="button" data-bs-dismiss="modal">
                <span className="txtColor"> Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceModal;
