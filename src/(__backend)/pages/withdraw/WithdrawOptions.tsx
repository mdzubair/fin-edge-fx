import { useState } from "react";

const WithdrawOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState("bank");

  return (
    <div className="container-fluid">

      <h4 className="fw-bold mb-3">Select Withdrawal Method</h4>

      <div className="row g-4">

        {/* Bank Transfer */}
        <div className="col-md-4">
          <div
            className={`card shadow-sm h-100 border ${
              selectedMethod === "bank"
                ? "border-primary border-3"
                : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMethod("bank")}
          >
            <div className="card-body text-center">
              <i className="fas fa-university fa-3x text-primary mb-3"></i>

              <h5>Online Bank Transfer</h5>

              <p className="text-muted">
                Withdraw funds directly to your bank account.
              </p>
            </div>
          </div>
        </div>

        {/* Binance */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border bg-light position-relative">

            <span className="position-absolute top-0 end-0 m-2">
              <i className="fas fa-lock text-danger"></i>
            </span>

            <div className="card-body text-center">
              <i className="fab fa-bitcoin fa-3x text-warning mb-3"></i>

              <h5>Binance Pay</h5>

              <p className="text-muted">
                Requires a successful deposit before withdrawal.
              </p>

              <button
                className="btn btn-outline-secondary"
                disabled
              >
                Locked
              </button>
            </div>
          </div>
        </div>

        {/* Crypto */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border bg-light position-relative">

            <span className="position-absolute top-0 end-0 m-2">
              <i className="fas fa-lock text-danger"></i>
            </span>

            <div className="card-body text-center">
              <i className="fas fa-coins fa-3x text-success mb-3"></i>

              <h5>Cryptocurrency</h5>

              <p className="text-muted">
                Requires a successful deposit before withdrawal.
              </p>

              <button
                className="btn btn-outline-secondary"
                disabled
              >
                Locked
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Form */}

      {selectedMethod === "bank" && (
        <div className="card shadow-sm mt-5">
          <div className="card-header">
            <h5 className="mb-0">
              Bank Withdrawal Details
            </h5>
          </div>

          <div className="card-body">

            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">
                  Account Holder Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Bank Name
                </label>

                <input
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Account Number
                </label>

                <input
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  IFSC / SWIFT Code
                </label>

                <input
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Withdrawal Amount
                </label>

                <input
                  type="number"
                  className="form-control"
                />
              </div>

              <div className="col-12">
                <button className="btn btn-primary">
                  Submit Withdrawal
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawOptions;