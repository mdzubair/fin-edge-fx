const WithdrawOptions = ()=>{
    return(
        <div className="row g-4">

  {/* Online Bank Transfer */}
  <div className="col-md-4">
    <div className="card shadow-sm border-0 h-100 position-relative">
      <div className="position-absolute top-0 end-0 m-2">
        <i className="fas fa-lock text-danger fs-5"></i>
      </div>

      <div className="card-body text-center">
        <i className="fas fa-university fa-3x text-primary mb-3"></i>
        <h5 className="fw-bold">Online Bank Transfer</h5>
        <p className="text-muted mb-4">
          Deposit funds securely using your local or international bank account.
        </p>

        <button className="btn btn-secondary w-100" disabled>
          <i className="fas fa-lock me-2"></i>
          Coming Soon
        </button>
      </div>
    </div>
  </div>

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
          Deposit instantly using your Binance Pay wallet.
        </p>

        <button className="btn btn-secondary w-100" disabled>
          <i className="fas fa-lock me-2"></i>
          Coming Soon
        </button>
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
          Deposit using Bitcoin, Ethereum, USDT, and other supported cryptocurrencies.
        </p>

        <button className="btn btn-secondary w-100" disabled>
          <i className="fas fa-lock me-2"></i>
          Coming Soon
        </button>
      </div>
    </div>
  </div>

</div>
    )
}

export default WithdrawOptions;