interface WithdrawDetailsModalProps {
  show: boolean;
  onClose: () => void;
  withdraw: any;
}

const WithdrawDetailsModal = ({ show, onClose, withdraw,}: WithdrawDetailsModalProps) => {
  if (!show || !withdraw) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Withdrawal Details</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">

              <div className="row g-3">

                {/* User Details */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <strong>User Details</strong>
                    </div>

                    <div className="card-body">
                      <table className="table table-sm mb-0">
                        <tbody>
                          <tr>
                            <th>Name</th>
                            <td>
                              {withdraw.userId?.firstName}{" "}
                              {withdraw.userId?.lastName}
                            </td>
                          </tr>

                          <tr>
                            <th>Email</th>
                            <td>{withdraw.userId?.email || "-"}</td>
                          </tr>

                          <tr>
                            <th>Wallet</th>
                            <td>${withdraw.userId?.wallet}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <strong>Bank Details</strong>
                    </div>

                    <div className="card-body">
                      <table className="table table-sm mb-0">
                        <tbody>
                          <tr>
                            <th>Holder Name</th>
                            <td>{withdraw.bankId?.holderName}</td>
                          </tr>

                          <tr>
                            <th>Bank Name</th>
                            <td>{withdraw.bankId?.bankName}</td>
                          </tr>

                          <tr>
                            <th>Account No.</th>
                            <td>{withdraw.bankId?.accNo}</td>
                          </tr>

                          <tr>
                            <th>IFSC Code</th>
                            <td>{withdraw.bankId?.ifscCode}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Withdrawal Details */}
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <strong>Withdrawal Details</strong>
                    </div>

                    <div className="card-body">
                      <table className="table table-bordered mb-0">
                        <tbody>
                          <tr>
                            <th>Amount</th>
                            <td>${withdraw.amount}</td>
                          </tr>

                          <tr>
                            <th>Payment Type</th>
                            <td>{withdraw.payType}</td>
                          </tr>

                          <tr>
                            <th>Status</th>
                            <td>
                              <span
                                className={`badge ${
                                  withdraw.status === 0
                                    ? "bg-warning"
                                    : withdraw.status === 1
                                    ? "bg-success"
                                    : "bg-danger"
                                }`}
                              >
                                {withdraw.status === 0
                                  ? "Pending"
                                  : withdraw.status === 1
                                  ? "Approved"
                                  : "Rejected"}
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <th>Requested At</th>
                            <td>
                              {new Date(
                                withdraw.createdAt
                              ).toLocaleString()}
                            </td>
                          </tr>

                          <tr>
                            <th>Updated At</th>
                            <td>
                              {new Date(
                                withdraw.updatedAt
                              ).toLocaleString()}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
      ></div>
    </>
  );
};

export default WithdrawDetailsModal;