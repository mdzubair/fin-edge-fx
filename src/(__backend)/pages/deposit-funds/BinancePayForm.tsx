import { Link, useSearchParams } from "react-router-dom";

const BinancePayForm = () => {
  const [searchParams] = useSearchParams();

  const step1 = searchParams.get("step-1");
  const label = searchParams.get("label");

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-sm-12">
            <div className="card border-0 shadow-sm rounded-4">

                {/* Header */}
                <div className="card-header bg-white py-3 px-4 border-bottom">
                    <div className="d-flex justify-content-between align-items-center">

                    <div>
                        <h5 className="mb-1 fw-bold">
                        <i className="fab fa-bitcoin text-warning me-2"></i>
                        {label?.toUpperCase()}
                        </h5>
                    </div>

                    <Link
                        to={`/admin/deposit-optiopns?step-1=${step1}`}
                        className="btn btn-light border rounded-pill px-3"
                    >
                        <i className="fas fa-arrow-left me-2"></i>
                        Back
                    </Link>

                    </div>
                </div>

                <div className="card-body p-4">

                
                    {/* Amount */}
                    <div className="mb-4">

                    <label className="form-label">
                        Deposit Amount
                    </label>

                    <div className="input-group input-group-lg">

                        <span className="input-group-text bg-white">
                        <i className="fas fa-dollar-sign text-success"></i>
                        </span>

                        <input
                        type="number"
                        className="form-control"
                        placeholder="Enter amount"
                        />

                        <span className="input-group-text bg-white">
                        USD
                        </span>

                    </div>

                    <small className="text-muted mt-2 d-block">
                        * The exchange rate shown above is for reference only and may change at the time of processing.
                    </small>

                    </div>

                    {/* Limits */}
                    <div className="row g-3 mb-4">

                    <div className="col-6">
                        <div className="border rounded-3 p-3 text-center">
                        <small className="text-muted d-block">Minimum</small>
                        <h6 className="fw-bold mb-0">$50</h6>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="border rounded-3 p-3 text-center">
                        <small className="text-muted d-block">Maximum</small>
                        <h6 className="fw-bold mb-0">$20,000</h6>
                        </div>
                    </div>

                    </div>

                    {/* Terms */}
                    <div className="card border rounded-4 mb-3">
                    <div className="card-body">

                        <div className="form-check">

                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="term1"
                        />

                        <label
                            htmlFor="term1"
                            className="form-check-label"
                        >
                            <div className="small text-muted mt-1">
                            Fin Edge FX only accepts and processes Binance Pay deposits and withdrawals based on your submitted instructions. Any funds deposited through Binance Pay must be withdrawn or refunded using the same payment method, in accordance with the company's withdrawal policy.
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
                            id="term2"
                        />

                        <label
                            htmlFor="term2"
                            className="form-check-label"
                        >

                            <div className="small text-muted mt-1">
                            I understand that my trading account credentials must be kept strictly confidential. I acknowledge and agree that any instructions or communications submitted through the online trading platform or my trading account are made at my own risk. I expressly authorize Fin Edge FX to rely on and act upon any instruction that it reasonably believes, in good faith, has been submitted or authorized by me.
                            </div>

                        </label>

                        </div>

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

export default BinancePayForm;