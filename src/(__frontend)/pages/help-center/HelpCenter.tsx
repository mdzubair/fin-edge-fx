
import React, { useState } from "react";

type SupportItem = {
  key: string;
  title: string;
  description: string;
  helpIcon: React.ReactNode;
};

type SupportFaqItem = {
  key: string;
  title: string;
  description: string;
};

const HelpCenter = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>("account");

  const supportBox: SupportItem[] = [
    {
      key: "getting-started",
      title: "Getting Started",
      description: "Account opening and first steps",
      helpIcon: "🚀",
    },
    {
      key: "deposits",
      title: "Deposits & Withdrawals",
      description: "Payment methods and processing",
      helpIcon: "💰",
    },
    {
      key: "platforms",
      title: "Trading Platforms",
      description: "MT4, MT5, and TradingView guides",
      helpIcon: "📊",
    },
    {
      key: "security",
      title: "Account Security",
      description: "2FA and safety tips",
      helpIcon: "🛡️",
    },
  ];

  const supportFaqs: SupportFaqItem[] = [
    {
      key: "account",
      title: "How do I open a trading account?",
      description:
        'Click "Open Account", fill the form, verify email, and upload documents.',
    },
    {
      key: "deposit",
      title: "What is the minimum deposit?",
      description:
        "Minimum deposit is $50 for most methods and $200 for bank transfers.",
    },
    {
      key: "verification",
      title: "How long does verification take?",
      description: "Usually completed within 24–48 hours.",
    },
    {
      key: "multiple",
      title: "Can I have multiple accounts?",
      description:
        "Yes, multiple trading accounts can be created under one profile.",
    },
  ];

  return (
    <>
      
      {/* ================= CATEGORY ================= */}

      <section className="category-section">
        <div className="container">
          <div className="row g-4">
            {supportBox.map((item) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6"
                key={item.key}
              >
                <div className="category-card h-100 text-center">
                  <div className="icon-box mx-auto">
                    {item.helpIcon}
                  </div>

                  <h5 className="fw-bold mt-4 mb-3">
                    {item.title}
                  </h5>

                  <p className="category-desc">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="support-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="support-title">
              Frequently Asked <span>Questions</span>
            </h2>

            <p className="support-subtitle">
              Quick answers to the most common customer questions.
            </p>
          </div>

          <div className="faq-wrapper mx-auto">
            {supportFaqs.map((item) => (
              <div
                key={item.key}
                className={`faq-card ${
                  activeFaq === item.key ? "active" : ""
                }`}
                onClick={() =>
                  setActiveFaq(
                    activeFaq === item.key ? null : item.key
                  )
                }
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0 fw-semibold">
                    {item.title}
                  </h6>

                  <span className="faq-icon">
                    {activeFaq === item.key ? "−" : "+"}
                  </span>
                </div>

                {activeFaq === item.key && (
                  <p className="faq-description">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUPPORT ================= */}

      <section className="support-section pb-5">
        <div className="container">
          <div className="support-wrapper text-center">
            <h2 className="support-title">
              Still Need <span>Help?</span>
            </h2>

            <p className="support-subtitle">
              Our support team is available 24/7 to assist you.
            </p>

            <div className="row mt-5 g-4">
              {[
                {
                  key: "chat",
                  label: "💬 Live Chat",
                  desc: "Instant support from our team",
                },
                {
                  key: "email",
                  label: "📧 support@finedgefx.com",
                  desc: "Send your questions anytime",
                },
                {
                  key: "phone",
                  label: "📞 +1-800-finedgefx",
                  desc: "Call our support desk",
                },
              ].map((item) => (
                <div className="col-lg-4 col-md-6" key={item.key}>
                  <div className="support-card h-100">
                    <h5 className="fw-bold mb-3">
                      {item.label}
                    </h5>

                    <p className="mb-0 text-muted">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCenter;