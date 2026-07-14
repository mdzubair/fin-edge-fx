import { Link, useSearchParams } from "react-router-dom";

const DepositUsdPayDetails = () =>{
    const [searchParams] =  useSearchParams();
    const step1 = searchParams.get("step-1");
    const step2 = searchParams.get("step-2");
    return (
        <div className="container-fluid py-4">
            
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7 col-sm-12">
                    

                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <h6></h6>
                        <Link to={`/admin/deposit-funds-usd?step-2=${step2}&step-1=${step1}`} className={`btn btn-sm btn-outline-warning`}>
                            Back
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="card-body text-center border-bottom py-4">
                    <div
                        className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: 60, height: 60 }}
                    >
                        <i className="fas fa-wallet text-primary fs-4"></i>
                    </div>

                    <h4 className="fw-bold mb-1">Payment Request</h4>

                    <p className="text-muted mb-0">
                        Complete your deposit to{" "}
                        <strong>Fin Edge FX</strong>
                    </p>
                    </div>

                    {/* Body */}
                    <div className="card-body">

                    {/* QR Code */}
                    <div className="text-center mb-4">

                        <div className="border rounded-4 p-3 d-inline-block bg-white">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/41/QR_Code_Example.svg"
                            width={150}
                            alt="QR Code"
                        />
                        </div>

                        <p className="text-muted small mt-3 mb-2">
                        Scan this QR Code with your crypto wallet
                        </p>

                        <span className="badge bg-primary px-3 py-2 rounded-pill">
                        {step2?.toLocaleUpperCase()}
                        </span>

                    </div>

                    {/* Bank Details */}
                    <h6 className="fw-bold mb-3">
                        <i className="fas fa-university me-2 text-primary"></i>
                        Bank Details
                    </h6>

                    <div className="list-group list-group-flush border rounded-3 mb-4">

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="text-muted">Bank Name</span>
                        <strong>HDFC Bank</strong>
                        </div>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="text-muted">Account Holder</span>
                        <strong>Fin Edge FX Pvt. Ltd.</strong>
                        </div>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="text-muted">Account Number</span>

                        <div className="d-flex align-items-center">
                            <strong className="me-2">
                            123456789012
                            </strong>

                            <button className="btn btn-sm btn-light border rounded-circle">
                            <i className="far fa-copy"></i>
                            </button>
                        </div>
                        </div>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="text-muted">IFSC Code</span>

                        <div className="d-flex align-items-center">
                            <strong className="me-2">
                            HDFC0001234
                            </strong>

                            <button className="btn btn-sm btn-light border rounded-circle">
                            <i className="far fa-copy"></i>
                            </button>
                        </div>
                        </div>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="text-muted">Branch</span>
                        <strong>Indore Main Branch</strong>
                        </div>

                    </div>

                    {/* Exchange Rate */}
                    <div className="bg-light rounded-3 p-3 text-center mb-4">

                        <small className="text-muted d-block">
                        Indicative Exchange Rate
                        </small>

                        <h6 className="fw-bold mb-0 mt-1">
                        1 USDT ({step2?.toLocaleUpperCase()}) = 1 USDT
                        </h6>

                    </div>

                    {/* Important */}
                    <div className="alert alert-warning border-0 rounded-3 mb-4 p-2">

                        <div className="d-flex">

                        <i className="fas fa-exclamation-circle mt-1 me-2"></i>

                        <small> Please note that USDT can only be received via the{" "} <strong>{step2?.toLocaleUpperCase()}</strong> protocol. Deposits made through any other network cannot be received or recovered. </small>

                        </div>

                    </div>

                    {/* Button */}
                    <button className="btn btn-outline-primary w-100 rounded-3 py-2">
                        <i className="fas fa-history me-2"></i>
                        View Deposit History
                    </button>

                    </div>

                </div>

                </div>
            </div>
            </div>
    );
}
export default DepositUsdPayDetails;