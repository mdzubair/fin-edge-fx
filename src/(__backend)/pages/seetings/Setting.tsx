
import FooterNews from "../../components/FooterNews";

const cardStyle = {
  backgroundColor: "#222e3c",
  border: "none",
};

function Settings() {
  return (
    <div className="container-fluid p-0">
      {/* Account Settings */}
      <div className="row mb-3">
        <div className="col">
          <h3>
            <strong>Account</strong> Settings
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 d-flex">
          <div className="card flex-fill" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Status</h5>
              <h4 className="mt-2 mb-1 text-success">
                Fully Verified
              </h4>
              <div>
                <span className="badge bg-success me-2">3/3</span>
                <span className="text-muted">Steps Complete</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex">
          <div className="card flex-fill" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Deposit Limit</h5>
              <h4 className="mt-2 mb-1 text-success">Unlimited</h4>
              <span className="text-muted">
                Some payment methods may have their own limits.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Steps */}
      <div className="row mt-4 mb-3">
        <div className="col">
          <h3>
            <strong>Verification</strong> Steps
          </h3>
        </div>
      </div>

      <div className="row">
        {/* Personal Details */}
        <div className="col-12 d-flex mb-3">
          <div className="card flex-fill" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa-solid fa-user text-primary me-2"></i>
                Personal Details
              </h5>

              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div>
                  <span className="text-muted me-4">
                    <i className="fa-solid fa-envelope text-success me-1"></i>
                    m****@gmail.com
                  </span>

                  <span className="text-muted">
                    <i className="fa-solid fa-phone text-success me-1"></i>
                    +91****2063
                  </span>
                </div>

                <button className="btn btn-outline-success btn-sm">
                  <i className="fa-solid fa-circle-check me-1"></i>
                  Verified
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Identity Verification */}
        <div className="col-12 d-flex mb-3">
          <div className="card flex-fill" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa-solid fa-id-card text-warning me-2"></i>
                Identity Verification
              </h5>

              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                <span className="text-muted">
                  Mohammad Zubair Khan
                </span>

                <button className="btn btn-outline-success btn-sm">
                  <i className="fa-solid fa-circle-check me-1"></i>
                  Verified
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Address Verification */}
        <div className="col-12 d-flex">
          <div className="card flex-fill" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="fa-solid fa-location-dot text-danger me-2"></i>
                Residential Address Verification
              </h5>

              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                <span className="text-muted">
                  MIG 2/65, Near Bus Stand, Housing Board Colony,
                  Maihar, Madhya Pradesh, India - 485771
                </span>

                <button className="btn btn-outline-success btn-sm">
                  <i className="fa-solid fa-circle-check me-1"></i>
                  Verified
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <FooterNews />
    </div>
  );
}

export default Settings;