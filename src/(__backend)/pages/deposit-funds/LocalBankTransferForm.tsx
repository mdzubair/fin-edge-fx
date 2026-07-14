import { Link, useSearchParams } from "react-router-dom";

const LocalBankTransferForm = () => {
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
                <i className="fas fa-university text-primary me-2"></i>
                {label?.toUpperCase()}
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

              {/* Bank */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Select Bank
                </label>

                <select className="form-select" defaultValue="kotak">
                  <option value="">Select Bank</option>
                  <option value="kotak">Kotak Mahindra Bank</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                </select>
              </div>

              {/* INR Amount */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Deposit Amount (INR)
                </label>

                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  placeholder="Enter deposit amount"
                />
              </div>

              {/* USD Amount */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Deposit Amount (USD)
                </label>

                <input
                  type="number"
                  className="form-control bg-light"
                  placeholder="0.00"
                  readOnly
                />
              </div>

              <small className="text-muted d-block mb-3">
                * The exchange rate shown above is for reference only and may
                change at the time of processing.
              </small>

              {/* Limits */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="badge bg-light text-dark border px-3 py-2">
                  Min: ₹3,000
                </span>

                <span className="badge bg-light text-dark border px-3 py-2">
                  Max: ₹200,000
                </span>
              </div>

              {/* Declaration */}
              <div className="alert alert-warning rounded-3 mb-4">
                <div className="d-flex">
                  <i className="fas fa-exclamation-triangle text-warning me-2 mt-1"></i>

                  <small>
                    I declare that this deposit is being made from a bank
                    account registered in my name, which matches the name on my
                    Fin Edge FX trading account and my government-issued
                    identity document. I understand that Fin Edge FX does not
                    accept deposits from third-party bank accounts.
                  </small>
                </div>
              </div>

              {/* Buttons */}
              <div className="d-flex gap-2">
                <button
                  type="submit"
                  className="btn btn-outline-success flex-fill rounded-3"
                >
                  <i className="fas fa-check me-2"></i>
                  Deposit
                </button>

                <Link
                  to="/admin/deposit-funds"
                  className="btn btn-outline-primary  flex-fill rounded-3"
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

export default LocalBankTransferForm;