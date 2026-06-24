import React from "react";

// ================= TYPES =================
type SupportItem1 = {
  key: string;
  title: string;
  subTitle: string;
  fundArr: string[];
  accType: string;
};

// ================= COMPONENT =================
const AccountsOverview: React.FC = () => {
  // ================= DATA =================
  const supportBox1: SupportItem1[] = [
    {
      key: "standardAccount",
      title: "Standard Account",
      subTitle: "Perfect for beginners and casual traders",
      fundArr: [
        "Minimum deposit: $200",
        "Spreads from 1.0 pips",
        "No commission",
        "Leverage up to 1:1000",
        "Free trading signals",
        "24/7 support",
      ],
      accType: "standard-account",
    },
    {
      key: "rawSpreadAccount",
      title: "Raw Spread Account",
      subTitle: "For experienced traders seeking tight spreads",
      fundArr: [
        "Minimum deposit: $500",
        "Raw spreads from 0.0 pips",
        "Commission: $7 per lot",
        "Leverage up to 1:500",
        "Advanced trading tools",
        "Priority support",
      ],
      accType: "raw-standard-account",
    },
    {
      key: "professionalAccount",
      title: "Professional Account",
      subTitle: "For high-volume traders and institutions",
      fundArr: [
        "Minimum deposit: $10,000",
        "Raw spreads from 0.0 pips",
        "Reduced commission rates",
        "Higher leverage options",
        "VIP support & account manager",
        "Custom trading solutions",
      ],
      accType: "professional-account",
    },
  ];

  return (
    <section className="support-section" data-aos="fade-up">
      <div className="container">
        
        {/* Title */}
        <div className="row">
          {supportBox1.map((item) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={item.key}>
              
              <div className="card h-100 border-0 rounded-4 p-4 text-center position-relative support-card">
                
                {/* Gradient Top Bar */}
                <div className="top-bar" />

                {/* Title */}
                <h5 className="fw-bold mt-2">{item.title}</h5>
                <p className="text-muted small">{item.subTitle}</p>

                {/* Features */}
                <ul className="list-unstyled text-start small">
                  {item.fundArr.map((itm, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      <span className="me-2 text-success">✔</span>
                      {itm}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-auto">
                  <button className="btn open-btn px-4 py-2 support-btn">
                    Open Account
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AccountsOverview;