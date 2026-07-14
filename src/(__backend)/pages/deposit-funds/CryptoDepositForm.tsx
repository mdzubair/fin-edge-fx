
// import { Link, useSearchParams } from "react-router-dom";

// const CryptoDepositForm = () => {
//   const [searchParams] = useSearchParams();

//   const step1 = searchParams.get("step-1");
//   const label = searchParams.get("label");

//   return (
//     <div className="container-fluid py-4">
//       <div className="row justify-content-center">
//         <div className="col-lg-5 col-md-7 col-sm-12">
//           <div className="card border-0 shadow-sm rounded-4">

//             {/* Header */}
//             <div className="card-header bg-white d-flex justify-content-between align-items-center">
//               <h5 className="mb-0 fw-bold">
//                 <i className="fas fa-university text-primary me-2"></i>
//                 {label?.toUpperCase()}
//               </h5>

//               <Link
//                 to={`/admin/deposit-optiopns?step-1=${step1}`}
//                 className="btn btn-light border rounded-pill px-3"
//                     >
//                         <i className="fas fa-arrow-left me-2"></i>
//                 Back
//               </Link>
//             </div>

//             {/* Body */}
//             <div className="card-body">

//               {/* Bank */}
//               <div className="mb-3">
//                 <label className="form-label">
//                   Select Currency
//                 </label>

//                 <select className="form-select" defaultValue="kotak">
//                   <option value="">Select Currency</option>
//                   <option value="binance">Binance Token</option>
//                   <option value="bitcoin">Bitcoin</option>
//                   <option value="ethereum">Ethereum</option>
//                   <option value="usdt">USDT</option>
//                   <option value="usdc">USDC</option>
//                 </select>
//               </div>

//               {/* USD Amount */}
//               <div className="mb-3">
//                 <label className="form-label">
//                   Deposit Amount (USD)
//                 </label>

//                 <input
//                   type="number"
//                   className="form-control bg-light"
//                   placeholder="0.00"
//                   readOnly
//                 />
//               </div>

//               <small className="text-muted d-block mb-3">
//                 * The exchange rate shown above is for reference only and may
//                 change at the time of processing.
//               </small>

//               {/* Limits */}
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <span className="badge bg-light text-dark border px-3 py-2">
//                   Min: 50 USD
//                 </span>

//                 <span className="badge bg-light text-dark border px-3 py-2">
//                   Max:20,000 USD
//                 </span>
//               </div>

//                  {/* Terms */}
//                     <div className="card border rounded-4 mb-3">
//                     <div className="card-body">

//                         <div className="form-check">

//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="term1"
//                         />

//                         <label
//                             htmlFor="term1"
//                             className="form-check-label"
//                         >
//                             <div className="small text-muted mt-1">
//                             Fin Edge FX only accepts and processes Binance Pay deposits and withdrawals based on your submitted instructions. Any funds deposited through Binance Pay must be withdrawn or refunded using the same payment method, in accordance with the company's withdrawal policy.
//                             </div>

//                         </label>

//                         </div>

//                     </div>
//                     </div>

//                     {/* Security */}
//                     <div className="card border rounded-4 mb-4">
//                     <div className="card-body">

//                         <div className="form-check">

//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="term2"
//                         />

//                         <label
//                             htmlFor="term2"
//                             className="form-check-label"
//                         >

//                             <div className="small text-muted mt-1">
//                             I understand that my trading account credentials must be kept strictly confidential. I acknowledge and agree that any instructions or communications submitted through the online trading platform or my trading account are made at my own risk. I expressly authorize Fin Edge FX to rely on and act upon any instruction that it reasonably believes, in good faith, has been submitted or authorized by me.
//                             </div>

//                         </label>

//                         </div>

//                     </div>
//                     </div>


//               {/* Buttons */}
//               <div className="d-flex gap-2">
//                 <button
//                   type="submit"
//                   className="btn btn-outline-success flex-fill rounded-3"
//                 >
//                   <i className="fas fa-check me-2"></i>
//                   Deposit
//                 </button>

//                 <Link
//                   to="/admin/deposit-funds"
//                   className="btn btn-outline-primary  flex-fill rounded-3"
//                 >
//                   <i className="fas fa-history me-2"></i>
//                   Deposit History
//                 </Link>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CryptoDepositForm;


import { Link, useSearchParams } from "react-router-dom";

const CryptoDepositForm = () => {
  const [searchParams] = useSearchParams();

  const step1 = searchParams.get("step-1");
  const label = searchParams.get("label");

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-sm-12">
          <div className="card border-0 shadow-sm rounded-4">

            {/* Header */}
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">
                <i className="fas fa-coins text-warning me-2"></i>
                {label?.toUpperCase()} Deposit
              </h5>

              <Link
                to={`/admin/deposit-optiopns?step-1=${step1}`}
                className="btn btn-light border rounded-pill px-3"
              >
                <i className="fas fa-arrow-left me-2"></i>
                Back
              </Link>
            </div>

            {/* Body */}
            <div className="card-body">

              {/* Currency */}
              <div className="mb-3">
                <label className="form-label">
                  Select Cryptocurrency
                </label>

                <select className="form-select">
                  <option value="">Select Currency</option>
                  <option value="bnb">Binance Coin (BNB)</option>
                  <option value="btc">Bitcoin (BTC)</option>
                  <option value="eth">Ethereum (ETH)</option>
                  <option value="usdt">USDT</option>
                  <option value="usdc">USDC</option>
                </select>
              </div>

              {/* Amount */}
              <div className="mb-3">
                <label className="form-label">
                  Deposit Amount (USD)
                </label>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-dollar-sign"></i>
                  </span>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter amount"
                  />

                  <span className="input-group-text">
                    USD
                  </span>
                </div>
              </div>

              <small className="text-muted d-block mb-4">
                * The exchange rate displayed is for reference only and may
                change at the time of processing.
              </small>

              {/* Limits */}
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="border rounded-3 p-3 text-center">
                    <small className="text-muted d-block">
                      Minimum Deposit
                    </small>

                    <h6 className="fw-bold mb-0">
                      $50
                    </h6>
                  </div>
                </div>

                <div className="col-6">
                  <div className="border rounded-3 p-3 text-center">
                    <small className="text-muted d-block">
                      Maximum Deposit
                    </small>

                    <h6 className="fw-bold mb-0">
                      $20,000
                    </h6>
                  </div>
                </div>
              </div>

              {/* Crypto Policy */}
              <div className="card border rounded-4 mb-3">
                <div className="card-body">

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="cryptoPolicy"
                    />

                    <label
                      htmlFor="cryptoPolicy"
                      className="form-check-label"
                    >
                      <strong>Cryptocurrency Deposit Policy</strong>

                      <div className="small text-muted mt-2">
                        I understand that Fin Edge FX only accepts
                        cryptocurrency deposits sent to the wallet address
                        provided for this transaction. Deposits sent through an
                        unsupported blockchain network or to an incorrect wallet
                        address may be permanently lost and cannot be recovered.
                      </div>
                    </label>
                  </div>

                </div>
              </div>

              {/* Security */}
              <div className="card border rounded-4 mb-4">
                <div className="card-body">

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="securityPolicy"
                    />

                    <label
                      htmlFor="securityPolicy"
                      className="form-check-label"
                    >
                      <strong>Security Confirmation</strong>

                      <div className="small text-muted mt-2">
                        I understand that my trading account credentials must
                        remain confidential. I acknowledge that any transaction
                        initiated through my trading account is my
                        responsibility, and I authorize Fin Edge FX to process
                        instructions that it reasonably believes have been
                        submitted or authorized by me.
                      </div>
                    </label>
                  </div>

                </div>
              </div>

              {/* Buttons */}
              <div className="d-flex gap-2">
                <button
                  type="submit"
                  className="btn btn-success flex-fill rounded-3"
                >
                  <i className="fas fa-wallet me-2"></i>
                  Deposit Now
                </button>

                <Link
                  to="/admin/deposit-funds"
                  className="btn btn-outline-primary flex-fill rounded-3"
                >
                  <i className="fas fa-history me-2"></i>
                  Deposit History
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDepositForm;