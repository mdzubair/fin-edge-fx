// import { useState } from "react";
// import CryptoDepositForm from "./CryptoDepositForm";
// import BinancePayForm from "./BinancePayForm";
// import UsdDepositForm from "./UsdDepositForm";
// import UpiDepositForm from "./UpiDepositForm";
// import BankTransferForm from "./BankTransferForm";
// import OnlineTransferForm from "./OnlineTransferForm";
import { Link, useSearchParams } from "react-router-dom";

const depositMethods = [
  {
    id: "crypto",
    label: "Cryptocurrency",
    icon: "fa-brands fa-bitcoin",
    link:"/admin/deposit-funds-crypto",
  },
  // {
  //   id: "binance",
  //   label: "Binance Pay",
  //   icon: "fa-solid fa-wallet",
  //   link:"/admin/deposit-funds-binance",
  // },
  {
    id: "usd",
    label: "USD",
    icon: "fa-solid fa-dollar-sign",
    link:"/admin/deposit-funds-usd",
  },
  {
    id: "upi",
    label: "UPI",
    icon: "fa-solid fa-mobile-screen-button",
    link:"/admin/deposit-funds-upi",
  },
  // {
  //   id: "bank",
  //   label: "Local Bank Transfer",
  //   icon: "fa-solid fa-building-columns",
  //   link:"/admin/deposit-funds-bank",
  // },
  {
    id: "online",
    label: "Online Bank Transfer",
    icon: "fa-solid fa-credit-card",
    link:"/admin/deposit-funds-bank",
  },
];

const DepositFormOptions = () => {
  const [searchParams] =  useSearchParams();
  const step1 = searchParams.get("step-1");
  return (
    <div className="container-fluid">
      <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
        <h4 className="fw-bold mb-4">Select Deposit Method</h4>
         <Link to="/admin/deposit-funds" className="btn btn-light border rounded-pill px-3"
                    >
                        <i className="fas fa-arrow-left me-2"></i>
              Back
          </Link>
      </div>

      <div className="row g-4">
        {depositMethods.map((method) => (
          <div className="col-lg-4 col-md-6" key={method.id}>
            <Link to={`${method.link}?step-1=${method.id}&label=${method.label}`}>
              <div
                className={`card h-100 shadow-sm position-relative transition-all ${
                  step1 === method.id
                    ? "border-primary border-3"
                    : "border-light"
                }`}
                style={{
                  cursor: "pointer",
                  transition: "0.3s ease",
                  borderRadius: "15px",
                }}
          
              >
                {step1 === method.id && (
                  <span
                    className="position-absolute top-0 end-0 m-2 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "28px",
                      height: "28px",
                    }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </span>
                )}

                <div className="card-body text-center pt-4">
                  <div
                    className={`mb-3 ${
                      step1 === method.id
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                  >
                    <i className={`${method.icon} fa-3x`}></i>
                  </div>

                  <h5 className="fw-semibold mb-0">{method.label}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
{/*       
      <hr />
         <h5 className="mb-0">{selectedMethod.toLocaleUpperCase()} {`Details`.toLocaleUpperCase()}</h5>
      <hr />

        {selectedMethod === "crypto" && <CryptoDepositForm />}
        {selectedMethod === "binance" && <BinancePayForm />}
        {selectedMethod === "usd" && <UsdDepositForm />}
        {selectedMethod === "upi" && <UpiDepositForm />}
        {selectedMethod === "bank" && <BankTransferForm />}
        {selectedMethod === "online" && <OnlineTransferForm />} */}
    </div>
  );
};

export default DepositFormOptions;