

import { Link } from "react-router-dom";
import { Images } from "../../../constants-image";

type SupportItem = {
  key: string;
  title: string;
  subTitle: string;
  icon: string;
};

type StatsItem = {
  value: string;
  label: string;
};

const Home = () => {
  // PLATFORM DATA
  const supportBox: SupportItem[] = [
    {
      key: "metaTrader4",
      title: "MetaTrader 4",
      subTitle: "Advanced Forex Trading Platform",
      icon: Images.mt4,
    },
    {
      key: "metaTrader5",
      title: "MetaTrader 5",
      subTitle: "Multi Asset Trading Platform",
      icon: Images.mt5,
    },
    {
      key: "tradingView",
      title: "TradingView",
      subTitle: "Smart Charts & Analysis",
      icon: Images.mt5,
    },
  ];

  // STATS DATA
  const statsData: StatsItem[] = [
    { value: "0.0", label: "PIP SPREADS*" },
    { value: "1:1000", label: "LEVERAGE" },
    { value: "0.01", label: "MICRO LOT TRADING" },
    { value: "+2250", label: "TRADABLE INSTRUMENTS" },
    { value: "24/7", label: "DEDICATED SUPPORT" },
  ];

  return (
    <>
      {/* TOP STATS */}
      <section className="spread-section py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {statsData.map((item, index) => (
              <div
                className="col-lg col-md-4 col-6"
                key={index}
              >
                <div className="modern-stat-card text-center h-100">
                  <div className="card-glow"></div>

                  <h2 className="stat-number">
                    {item.value}
                  </h2>

                  <p className="stat-label mb-0">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAW SPREAD SECTION */}
      <section className="spread-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT */}
            <div className="col-lg-6">
              <div className="row g-4">
                {statsData.slice(0, 4).map((item, index) => (
                  <div className="col-md-6 col-6" key={index}>
                    <div className="modern-stat-card text-center h-100">
                      <h3 className="stat-number">
                        {item.value}
                      </h3>

                      <p className="stat-label mb-0">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <div className="content-box text-center text-lg-start">
                <span className="mini-title">
                  WHY CHOOSE US
                </span>

                <h2 className="section-title mt-3">
                  The Raw Spread <br />
                  Advantage
                </h2>

                <p className="section-text mt-4">
                  Trade with ultra-low spreads from 0.0 pips,
                  lightning-fast execution, and institutional-grade
                  liquidity built for professional traders.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start">
                  <Link
                    to="/register"
                    className="btn modern-btn"
                  >
                    Start Trading
                  </Link>

                  <Link
                    to="/register"
                    className="btn modern-outline-btn"
                  >
                    Try Free Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM SECTION */}
      <section className="spread-section py-5"  id="platforms">
        <div className="container">
          <div className="text-center mb-5">
            <span className="mini-title">
              TRADING PLATFORMS
            </span>

            <h2 className="section-title mt-3">
              Powerful Trading Platforms
            </h2>

            <p className="section-text mx-auto platform-desc">
              Access global markets with advanced technology,
              real-time execution, and professional tools.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {supportBox.map((item) => (
              <div
                className="col-lg-4 col-md-6"
                key={item.key}
              >
                <div className="platform-card text-center h-100">
                  <div className="platform-icon">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>

                  <h4 className="platform-title">
                    {item.title}
                  </h4>

                  <p className="platform-subtitle">
                    {item.subTitle}
                  </p>

                  <Link
                    to="/register"
                    className="btn modern-btn mt-3"
                  >
                    Start Trading
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PERFORMANCE */}
      <section className="spread-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="mini-title">
              GLOBAL PERFORMANCE
            </span>

            <h2 className="section-title mt-3">
              Our strength is in the numbers
            </h2>

            <p className="section-text performance-desc mx-auto mt-3">
              fynessGlobal is one of the world's leading Forex CFD
              providers with institutional-grade infrastructure.
            </p>
          </div>

          <div className="row g-4">
            {/* LEFT CARD */}
            <div className="col-lg-6">
              <div className="performance-card main-performance-card h-100">
                <div className="card-glow"></div>

                <div className="position-relative z-1">
                  <span className="badge-text">
                    Trusted Global Broker
                  </span>

                  <h2 className="main-performance-title mt-4">
                    Trade with confidence using institutional-grade infrastructure
                  </h2>

                  <p className="section-text mt-4">
                    Experience deep liquidity, ultra-fast execution,
                    and premium trading technology designed for professionals.
                  </p>

                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <Link
                      to="/register"
                      className="btn modern-btn"
                    >
                      Start Trading
                    </Link>

                    <Link
                      to="/register"
                      className="btn modern-outline-btn"
                    >
                      Try Free Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT GRID */}
            <div className="col-lg-6">
              <div className="row g-4">
                {/* CARD 1 */}
                <div className="col-md-6">
                  <div className="performance-card mini-performance-card h-100">
                    <div className="icon-circle">
                      ⚡
                    </div>

                    <h2 className="performance-number">
                      3,621,938<span>●</span>
                    </h2>

                    <p className="mini-card-title">
                      TRADES PER DAY
                    </p>

                    <p className="section-text mb-0">
                      Real-time trading activity
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="col-md-6">
                  <div className="performance-card mini-performance-card h-100">
                    <div className="icon-circle">
                      🤖
                    </div>

                    <h2 className="performance-number">
                      65.0%<span>●</span>
                    </h2>

                    <p className="mini-card-title">
                      ALGO TRADES
                    </p>

                    <p className="section-text mb-0">
                      Automated trading systems
                    </p>
                  </div>
                </div>

                {/* SERVER CARD */}
                <div className="col-12">
                  <div className="performance-card server-card">
                    <div className="row align-items-center g-4">
                      <div className="col-lg-7">
                        <div className="d-flex align-items-center gap-3 mb-4">
                          <div className="icon-circle">
                            🌎
                          </div>

                          <div>
                            <h2 className="server-title mb-1">
                              Equinix NY4
                            </h2>

                            <p className="mini-card-title mb-0">
                              TRADING HUB AT NEW YORK
                            </p>
                          </div>
                        </div>

                        <p className="section-text mb-0">
                          Institutional-grade infrastructure
                          with ultra-low latency execution.
                        </p>
                      </div>

                      <div className="col-lg-5">
                        <div className="server-info-box">
                          <div className="server-info-item">
                            <span>Location</span>
                            <strong>New York, USA</strong>
                          </div>

                          <div className="server-info-item">
                            <span>Latency</span>
                            <strong>0.12ms</strong>
                          </div>

                          <div className="server-info-item border-0">
                            <span>Execution</span>
                            <strong>Ultra Fast</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="spread-section py-5">
        <div className="container">
          <div className="row g-4">
            {/* LEFT */}
            <div className="col-lg-6">
              <div className="feature-card h-100">
                <div className="feature-icon mx-auto my-4">
                  ⚡
                </div>

                <h2 className="feature-title">
                  Fast Order Execution
                </h2>

                <div className="feature-list mt-4">
                  <p>
                    <span>✓</span>
                    Average execution speeds under 40ms
                  </p>

                  <p>
                    <span>✓</span>
                    Equinix NY4 ultra-low latency server
                  </p>

                  <p>
                    <span>✓</span>
                    Free low latency VPS available
                  </p>
                </div>

                <Link
                  to="/register"
                  className="btn modern-btn mt-4"
                >
                  Get Your Free VPS
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <div className="feature-card h-100">
                <div className="feature-icon mx-auto my-4">
                  📈
                </div>

                <h2 className="feature-title">
                  Institutional Grade Trading
                </h2>

                <div className="feature-list mt-4">
                  <p>
                    <span>✓</span>
                    Real deep liquidity providers
                  </p>

                  <p>
                    <span>✓</span>
                    Reduced slippage & requotes
                  </p>

                  <p>
                    <span>✓</span>
                    Over 29 Billion USD processed daily
                  </p>
                </div>

                <Link
                  to="/register"
                  className="btn modern-btn mt-4"
                >
                  Raw Price Benefits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATED TRADING */}
      <section className="spread-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT */}
            <div className="col-lg-6">
              <div className="auto-trading-left">
                {[
                  {
                    title: "US$2.06 Trillion",
                    sub: "TRADING VOLUME - OCTOBER 2025",
                    icon: "📊",
                  },
                  {
                    title: "3,653,897+",
                    sub: "TRADES EXECUTED PER DAY",
                    icon: "⚡",
                  },
                  {
                    title: "65% Automated",
                    sub: "ALGO TRADING ACTIVITY",
                    icon: "🤖",
                  },
                ].map((item, index) => (
                  <div
                    className="auto-stat-card"
                    key={index}
                  >
                    <div className="auto-icon">
                      {item.icon}
                    </div>

                    <div>
                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <div className="feature-card">
                <span className="mini-title">
                  AUTOMATED TRADING
                </span>

                <h2 className="feature-title mt-3">
                  Give your automated trading system the edge
                </h2>

                <p className="section-text mt-4">
                  fynessGlobal is one of the top choices
                  for automated traders. Our order matching
                  engine located in the New York Equinix NY4
                  data centre processes millions of trades daily.
                </p>

                <div className="row g-3 mt-4">
                  <div className="col-sm-6">
                    <div className="mini-feature-box">
                      <h5>
                        ⚡ Ultra Fast
                      </h5>

                      <p>
                        Low latency execution
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="mini-feature-box">
                      <h5>
                        🔒 Secure Servers
                      </h5>

                      <p>
                        Institutional infrastructure
                      </p>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link
                    to="/register"
                    className="btn modern-btn"
                  >
                    Start Trading
                  </Link>

                  <Link
                    to="/register"
                    className="btn modern-outline-btn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="spread-section py-5">
        <div className="container">
          <div className="cta-box text-center">
            <span className="mini-title">
              GET STARTED TODAY
            </span>

            <h2 className="section-title mt-3">
              Instant Account Opening & Funding
            </h2>

            <p className="section-text mt-3">
              Start trading global markets within minutes
              using our secure and advanced infrastructure.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <Link
                to="/register"
                className="btn modern-btn"
              >
                Start Trading
              </Link>

              <Link
                to="/register"
                className="btn modern-outline-btn"
              >
                Try Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>
        {`
        .spread-section {
          background: #020617;
          position: relative;
          overflow: hidden;
        }

        .modern-stat-card,
        .platform-card,
        .cta-box,
        .performance-card,
        .feature-card,
        .auto-stat-card,
        .mini-feature-box {
          position: relative;
          padding: 35px;
          border-radius: 28px;
          background: linear-gradient(
            135deg,
            #0b1b3b,
            #1f3c88
          );
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          transition: 0.4s ease;
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
        }

        .modern-stat-card:hover,
        .platform-card:hover,
        .cta-box:hover,
        .performance-card:hover,
        .feature-card:hover,
        .auto-stat-card:hover,
        .mini-feature-box:hover {
          transform: translateY(-8px);
        }

        .card-glow {
          position: absolute;
          width: 180px;
          height: 180px;
          background: rgba(59,130,246,0.2);
          filter: blur(70px);
          top: -80px;
          right: -80px;
        }

        .stat-number {
          color: #fff;
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .stat-label {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          letter-spacing: 1px;
        }

        .mini-title {
          color: #60a5fa;
          font-size: 14px;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .section-title {
          color: #fff;
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
        }

        .section-text {
          color: rgba(255,255,255,0.7);
          font-size: 17px;
          line-height: 1.9;
        }

        .platform-desc,
        .performance-desc {
          max-width: 700px;
        }

        .platform-card {
          padding: 45px 30px;
        }

        .platform-icon {
          width: 120px;
          height: 120px;
          margin: auto;
          border-radius: 30px;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }

        .platform-icon img {
          width: 70px;
        }

        .platform-title {
          color: #fff;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .platform-subtitle {
          color: rgba(255,255,255,0.65);
          font-size: 15px;
          line-height: 1.7;
        }

        .modern-btn {
          padding: 14px 30px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
          );
          color: #fff;
          font-weight: 600;
          transition: 0.3s ease;
          box-shadow: 0 15px 30px rgba(37,99,235,0.35);
        }

        .modern-btn:hover {
          transform: translateY(-3px);
          color: #fff;
        }

        .modern-outline-btn {
          padding: 14px 30px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent;
          color: #fff;
          transition: 0.3s ease;
        }

        .modern-outline-btn:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }

        .badge-text {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 50px;
          background: rgba(255,255,255,0.08);
          color: #fff;
          font-size: 13px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .main-performance-title,
        .feature-title,
        .server-title {
          color: #fff;
          font-size: 40px;
          font-weight: 800;
          line-height: 1.3;
        }

        .performance-number {
          color: #fff;
          font-size: 38px;
          font-weight: 800;
          margin: 20px 0 10px;
        }

        .performance-number span {
          color: #60a5fa;
        }

        .mini-card-title {
          color: #60a5fa;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }

        .icon-circle,
        .feature-icon,
        .auto-icon {
          width: 70px;
          height: 70px;
          border-radius: 22px;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #fff;
        }

        .server-info-box {
          border-radius: 22px;
          background: rgba(255,255,255,0.05);
          padding: 20px;
        }

        .server-info-item {
          display: flex;
          justify-content: space-between;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .server-info-item span {
          color: rgba(255,255,255,0.6);
        }

        .server-info-item strong {
          color: #fff;
        }

        .feature-list p {
          color: rgba(255,255,255,0.75);
          margin-bottom: 18px;
          font-size: 16px;
        }

        .feature-list p span {
          color: #60a5fa;
          margin-right: 10px;
          font-weight: bold;
        }

        .auto-trading-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .auto-stat-card {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .auto-stat-card h3 {
          color: #fff;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .auto-stat-card p {
          color: rgba(255,255,255,0.65);
          margin: 0;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .mini-feature-box h5 {
          color: #fff;
          margin-bottom: 10px;
        }

        .mini-feature-box p {
          color: rgba(255,255,255,0.65);
          margin: 0;
        }

        @media (max-width: 991px) {
          .section-title,
          .main-performance-title,
          .feature-title,
          .server-title {
            font-size: 34px;
          }
        }

        @media (max-width: 576px) {
          .section-title,
          .main-performance-title,
          .feature-title,
          .server-title {
            font-size: 26px;
          }

          .modern-stat-card,
          .platform-card,
          .cta-box,
          .performance-card,
          .feature-card,
          .auto-stat-card,
          .mini-feature-box {
            padding: 24px;
            border-radius: 22px;
          }

          .stat-number,
          .performance-number {
            font-size: 28px;
          }

          .auto-stat-card {
            flex-direction: column;
            text-align: center;
          }
        }
        `}
      </style>
    </>
  );
};

export default Home;