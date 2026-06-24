
import React from "react";

// ================= TYPES =================
type SupportItem = {
  key: string;
  title: string;
  subTitle: string;
  icon: React.ReactNode;
};

type FeatureItem = {
  key: string;
  title: string;
  description: string;
  helpIcon: React.ReactNode;
};

const LaunchWebTrader: React.FC = () => {

  const supportBox: SupportItem[] = [
    {
      key: "metaTrader4",
      title: "MetaTrader 4",
      subTitle: "The world's most popular trading platform with advanced charting",
      icon: "🖥️",
    },
    {
      key: "metaTrader5",
      title: "MetaTrader 5",
      subTitle: "Next-generation platform with more timeframes and indicators",
      icon: "📊",
    },
    {
      key: "tradingView",
      title: "TradingView",
      subTitle: "Cloud-based platform with advanced charting tools",
      icon: "📈",
    },
    {
      key: "cTrader",
      title: "cTrader",
      subTitle: "Advanced ECN platform designed for professional traders",
      icon: "⚡",
    },
  ];

  const features: FeatureItem[] = [
    {
      key: "fast-execution",
      title: "Fast Execution",
      description: "Execute orders in milliseconds",
      helpIcon: "⚡",
    },
    {
      key: "advanced-charts",
      title: "Advanced Charts",
      description: "Access hundreds of technical indicators",
      helpIcon: "📊",
    },
    {
      key: "automated-trading",
      title: "Automated Trading",
      description: "Use expert advisors and trading robots",
      helpIcon: "🤖",
    },
    {
      key: "mobile-trading",
      title: "Mobile Trading",
      description: "Trade on the go with mobile apps",
      helpIcon: "📱",
    },
  ];

  return (
    <>
      {/* ================= PLATFORMS ================= */}
      <section className="support-section py-5">
        <div className="container">
          <div className="row g-4">

            {supportBox.map((item) => (
              <div className="col-lg-3 col-md-6" key={item.key}>
                <div className="support-card h-100 text-center">

                  <div className="icon-box mb-3 mx-auto">{item.icon}</div>

                  <h4>{item.title}</h4>

                  <p style={{height:"100px"}}>{item.subTitle}</p>

                  <button className="btn support-btn w-100 my-2">
                      Launch Trader
                    </button>

                    <a href="/pdfs/terms.pdf" className="btn support-btn w-100">
                      Download
                    </a>


                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= FEATURES ================= */}
          <section className="support-section py-5">
        <div className="container">
          <div className="row g-4">

            {features.map((item) => (
              <div className="col-lg-3 col-md-6" key={item.key}>
                <div className="support-card h-100 text-center">

                  <div className="icon-box mb-3 mx-auto">{item.helpIcon}</div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>



      {/* ================= LOGIN ================= */}
          <section className="contact-form-section">
        <div className="container">

          <div className="form-card">

            <div className="text-center mb-5">
              <h2 className="form-title">
               Login to Web Trader
              </h2>
            </div>

            <form >

              <div className="row">
                {/* EMAIL */}
                <div className="col-12 mb-4">
                  <input
                    type="email"
                    
                    placeholder="Email Address"
                    className="form-control modern-input"
                  />

                </div>

{/* EMAIL */}
                <div className="col-12 mb-4">
                  <input
                    type="password"
                    
                    placeholder="Password"
                    className="form-control modern-input"
                  />

                </div>
                {/* BUTTON */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn submit-btn"
                  >
                    Login
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </section>


    </>
  );
};

export default LaunchWebTrader;