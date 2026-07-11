const WithdrawOptions = () => {
  return (
    <>
    <div className="row g-4">
      {/* Online Bank Transfer */}
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 position-relative">
          <div className="position-absolute top-0 end-0 m-2">
            {/* <i className="fas fa-lock text-danger fs-5"></i> */}
          </div>

          <div className="card-body text-center">
            <i className="fas fa-university fa-3x text-primary mb-3"></i>

            <h5 className="fw-bold">Online Bank Transfer</h5>

            <p className="text-muted mb-4">
              Withdraw funds securely to your local or international bank account.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-4">
        <h5 className="fw-bold">Disabled Method</h5>
        <p className="text-muted mb-4">
           A diposit is required befor you can use this method to Withdraw your funds.
        </p>
      {/* Binance Pay */}
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 position-relative">
          <div className="position-absolute top-0 end-0 m-2">
            <i className="fas fa-lock text-danger fs-5"></i>
          </div>

          <div className="card-body text-center">
            <i className="fab fa-bitcoin fa-3x text-warning mb-3"></i>

            <h5 className="fw-bold">Binance Pay</h5>

            <p className="text-muted mb-4">
              Withdraw your funds directly to your Binance Pay wallet.
            </p>
          </div>
        </div>
      </div>

      {/* Cryptocurrency */}
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 position-relative">
          <div className="position-absolute top-0 end-0 m-2">
            <i className="fas fa-lock text-danger fs-5"></i>
          </div>

          <div className="card-body text-center">
            <i className="fas fa-coins fa-3x text-success mb-3"></i>

            <h5 className="fw-bold">Cryptocurrency</h5>

            <p className="text-muted mb-4">
              Withdraw using Bitcoin, Ethereum, USDT, and other supported cryptocurrencies.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WithdrawOptions;