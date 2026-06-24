import React from "react";
import { Link } from "react-router-dom";

type SupportItem = {
  key: string;
  title: string;
  subTitle: string;
  numList: number;
};

const OpenAccount: React.FC = () => {
  const supportBox: SupportItem[] = [
    {
      key: "register",
      title: "Register",
      subTitle: "Fill out our simple application form with your personal details",
      numList: 1,
    },
    {
      key: "verify",
      title: "Verify",
      subTitle: "Upload your ID and proof of address for verification",
      numList: 2,
    },
    {
      key: "fund",
      title: "Fund",
      subTitle: "Deposit funds using your preferred payment method",
      numList: 3,
    },
    {
      key: "trade",
      title: "Trade",
      subTitle: "Start trading on your live account with 2000+ instruments",
      numList: 4,
    },
  ];

  const supportFaqs: string[] = [
    "Valid government-issued ID (Passport, Driver's License, or National ID)",
    "Proof of address (Utility bill, Bank statement - not older than 3 months)",
    "Minimum age of 18 years",
    "Valid email address and phone number",
  ];

  return (
    <>
      {/* ================= STEPS ================= */}
       <section className="support-section">
        <div className="container">
          <div className="row g-4">

            {supportBox.map((item) => (
              <div className="col-lg-3 col-md-6" key={item.key}>
                <div className="support-card h-100 text-center">

                  <div className="icon-box mb-3 mx-auto"> {item.numList}</div>

                  <h4>{item.title}</h4>

                  <p style={{height:"100px"}}>{item.subTitle}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      
      <section className="support-section"  data-aos="fade-up">
        <div className="container">
          <div className="important-card text-center">
            <h3 className="fw-bold mb-3">
             Ready to Get Started?
            </h3>

            <p className="mb-0">
             Click the button below to register and start your trading journey with FinEdgeFx.
            </p>
            <Link to="/pdfs/terms.pdf" className="btn support-btn w-25 my-4">Register Now</Link>
          </div>
        </div>
      </section>

      {/* ================= REQUIREMENTS ================= */}
 
      <section className="support-section"  data-aos="fade-up">
          <div className="container">

            <div className="row">
                <div className="col-lg-12 mb-4">
                  <div className="support-card p-4 p-lg-5">
                    <div className="top-bar" />

                    {/* Title */}
                    <h4 className="fw-bold mb-3">
                     Requirements for Account Opening
                    </h4>

                    {/* Description */}
                    <ul className="list-unstyled mb-0">
                      {supportFaqs.map((desc, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start mb-3"
                        >
                           <span className="check-icon me-2">✔</span>
                    <span >{desc}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
            </div>

          </div>
        </section>
    </>
  );
};

export default OpenAccount;