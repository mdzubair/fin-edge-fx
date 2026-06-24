
type SupportItem = {
  key: string;
  title: string;
  subTitle: string;
};

const CybersecurityScams = () => {
  const supportBox: SupportItem[] = [
    {
      key: "phishingAttacks",
      title: "🎣 Phishing Attacks",
      subTitle: "Fraudulent emails or websites that mimic legitimate companies",
    },
    {
      key: "phoneScams",
      title: "📞 Phone Scams",
      subTitle: "Scammers posing as broker representatives",
    },
    {
      key: "guaranteedReturns",
      title: "💰 Guaranteed Returns",
      subTitle: "Promises of unrealistic returns with zero risk",
    },
    {
      key: "fakeTradingBots",
      title: "🤖 Fake Trading Bots",
      subTitle: "Software claiming to generate automatic profits",
    },
    {
      key: "socialMediaImpersonation",
      title: "👥 Social Media Impersonation",
      subTitle: "Fake accounts impersonating company staff",
    },
    {
      key: "accountTakeover",
      title: "🔓 Account Takeover",
      subTitle: "Unauthorized access to your trading account",
    },
  ];

  const supportFaqs: string[] = [
    "Never share your password with anyone",
    "Enable Two-Factor Authentication (2FA)",
    "Always verify the URL before logging in",
    "Use strong, unique passwords",
    "Be cautious of unsolicited calls or emails",
  ];

  return (
    <>
      {/* ================= SCAMS ================= */}
        <section className="support-section py-5">
        <div className="container">
          <div className="row g-4">

            {supportBox.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.key}>
                <div className="support-card h-100 text-center">

                  <h4>{item.title}</h4>

                  <p>{item.subTitle}</p>


                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROTECTION ================= */}
         <section className="support-section">
          <div className="container">

            <div className="row">
                <div className="col-lg-12 mb-4">
                  <div className="support-card p-4 p-lg-5">
                    <div className="top-bar" />

                    {/* Title */}
                    <h4 className="fw-bold mb-3">How to Protect Yourself</h4>

                    {/* Subtitle */}
                    {supportBox[2].subTitle && (
                      <p className="mb-4">
                        {supportBox[2].subTitle}
                      </p>
                    )}

                    {/* Description */}
                    <ul className="list-unstyled mb-0">
                     {supportFaqs.map((item, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start mb-3"
                        >
                          <span className="check-icon me-3">
                              ✓
                            </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
            </div>

          </div>
        </section>

      {/* ================= REPORT ================= */}
      <section className="support-section">
        <div className="container text-center">
            <div className="warning-icon mb-3">🚨 </div>
          <h3 className="fw-bold mb-4 text-white">
            Report Suspicious Activity
          </h3>

          <div className="row justify-content-center">
            
            <div className="col-md-5 mb-3">
              <div className="support-card p-4 rounded-4 text-white">
                <h6 className="fw-bold">Email</h6>
                <a href="mailto:security@finedgefx.com">
                  security@finedgefx.com
                </a>
              </div>
            </div>

            <div className="col-md-5 mb-3">
              <div className="support-card p-4 rounded-4 text-white">
                <h6 className="fw-bold">Phone</h6>
                <p className="mb-0 text-black">+1-800-FinEdgeFx</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CybersecurityScams;