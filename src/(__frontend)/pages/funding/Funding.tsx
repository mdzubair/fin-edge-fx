
import React from "react";

type SupportItem = {
  key: string;
  title: string;
  fundArr: string[];
  helpIcon: React.ReactNode;
};

const Funding: React.FC = () => {
  const supportBox: SupportItem[] = [
    {
      key: "creditDebit",
      title: "Credit/Debit Cards",
      fundArr: ["Fee: $0", "Time: Instant", "Min: $50"],
      helpIcon: "💳",
    },
    {
      key: "bankTransfer",
      title: "Bank Transfer",
      fundArr: ["Fee: $0", "Time: 1-3 days", "Min: $200"],
      helpIcon: "🏦",
    },
    {
      key: "ewallets",
      title: "E-Wallets",
      fundArr: ["Fee: $0", "Time: Instant", "Min: $50"],
      helpIcon: "⚡",
    },
    {
      key: "cryptoCurrency",
      title: "Cryptocurrency",
      fundArr: ["Fee: $0", "Time: 10-60 min", "Min: $100"],
      helpIcon: "💎",
    },
    {
      key: "mobilePayment",
      title: "Mobile Payment",
      fundArr: ["Fee: $0", "Time: Instant", "Min: $50"],
      helpIcon: "📱",
    },
  ];

  const supportFaqs: string[] = [
    "Log in to your FinEdgeFx account",
    'Navigate to "Deposit" section',
    "Select your preferred payment method",
    "Enter the deposit amount",
    "Complete the payment",
    "Funds appear instantly",
  ];

  return (
    <>
       {/* ================= FUNDING METHODS ================= */}
        <section className="support-section">
          <div className="container">

          
            <div className="row">
              {supportBox.map((item) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 mb-4"
                  key={item.key}
                >
                  <div className="support-card h-100">

                    <div className="card-glow" />

                    <div className="icon-box  mx-auto">
                      {item.helpIcon}
                    </div>

                    <h5 className="text-center">{item.title}</h5>

                    <div className="badge-wrapper">
                      {item.fundArr.map((info, i) => (
                        <span key={i} className="funding-badge">
                          {info}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= HOW TO DEPOSIT ================= */}
        <section className="support-section">
          <div className="container">
            <div className="glass-card">
              <h3>How to Deposit</h3>
               <p>
                  Follow these simple steps to fund your trading account.
                </p>
              <div className="steps-grid">
                {supportFaqs.map((step, i) => (
                  <div className="step-item" key={i}>
                    <div className="step-number">{i + 1}</div>
                    <div>{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Funding;