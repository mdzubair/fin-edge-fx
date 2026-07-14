
import { Link, useSearchParams } from "react-router-dom";

const DepositUSDSubOptiopns = () => {
    const [searchParams] =  useSearchParams();
    const step1 = searchParams.get("step-1");
    const step2 = searchParams.get("step-2");
  const tabs = [
    {
      id: "bep20",
      title: "Binance Smart Chain (BEP20)",
      icon: "fas fa-coins",
    },
    {
      id: "erc20",
      title: "Ethereum (ERC20)",
      icon: "fab fa-ethereum",
    },
    {
      id: "polygon",
      title: "Polygon",
      icon: "fas fa-project-diagram",
    },
    {
      id: "trc20",
      title: "Tron (TRC20)",
      icon: "fas fa-bolt",
    },
  ];

  return (
    <>
        <div className="container-fluid">
             <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
                <h4 className="fw-bold mb-4">Select {step1?.toLocaleUpperCase()} Method</h4>
                <Link to={`/admin/deposit-optiopns?step-1=${step1}`} className={`btn btn-sm btn-outline-warning`}>
                    Back
                </Link>
            </div>
            <div className="row g-4">
                {tabs.map((tab) => ( 
                    <div className="col-lg-6 col-md-6" key={tab.id}>
                        <Link to={`/admin/deposit-usd-pay-details?step-2=${tab.id}&step-1=${step1}`}>
                        <div className={`card h-100 shadow-sm position-relative transition-all ${ step2 === tab.id ? "border-primary border-3" : "border-light" }`} style={{ cursor: "pointer", transition: "0.3s ease", borderRadius: "15px", }} >
                            {step2 === tab.id && (
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
                                    step2 === tab.id
                                    ? "text-primary"
                                    : "text-secondary"
                                }`}
                                >
                                <i className={`${tab.icon} fa-3x`}></i>
                                </div>

                                <h5 className="fw-semibold mb-0">{tab.title}</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            <p className="text-muted py-4">You may lose funds if you choose the correct protocall</p>
        </div>    
    </>
  );
};

export default DepositUSDSubOptiopns;