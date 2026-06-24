import { Images } from "../../../constants-image";
import { Link } from "react-router-dom";

type SupportItem = {
  title: string;
  description: string;
  srcLink: string;
  buttonAction: string;
  buttonActionText: string;
};

const LegalDocuments = () => {
  const supportBox: SupportItem[] = [
    {
      title: "Terms & Conditions",
      description: "Our general terms and conditions of service",
      srcLink: Images.contactLoaction,
      buttonAction: "/pdfs/terms.pdf",
      buttonActionText: "Download PDF",
    },
    {
      title: "Privacy Policy",
      description: "How we collect and protect your personal data",
      srcLink: Images.emailIcon,
      buttonAction: "/pdfs/privacy-policy.pdf",
      buttonActionText: "Download PDF",
    },
    {
      title: "Risk Disclosure",
      description: "Important information about trading risks",
      srcLink: Images.contactTel,
      buttonAction: "/pdfs/risk-disclosure.pdf",
      buttonActionText: "Download PDF",
    },
    {
      title: "Client Agreement",
      description: "Legal agreement between you and FinEdgeFx",
      srcLink: Images.contactLoaction,
      buttonAction: "/pdfs/client-agreement.pdf",
      buttonActionText: "Download PDF",
    },
    {
      title: "Order Execution Policy",
      description: "How we execute your trading orders",
      srcLink: Images.emailIcon,
      buttonAction: "/pdfs/order-execution-policy.pdf",
      buttonActionText: "Download PDF",
    },
    {
      title: "Complaints Policy",
      description: "How to raise and resolve complaints",
      srcLink: Images.contactTel,
      buttonAction: "/pdfs/complaints-policy.pdf",
      buttonActionText: "Download PDF",
    },
  ];

  return (
    <>
   

      {/* ================= DOCUMENTS ================= */}
        <section className="support-section py-5">
        <div className="container">
          <div className="row g-4">

            {supportBox.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="support-card h-100 text-center">

                  <div className="icon-wrapper d-flex justify-content-center">
                      <div className="icon-box mb-3">📄</div>
                    </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <Link
                    to=""
                    className="btn support-btn"
                  >
                   Download PDF
                  </Link>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>




      {/* ================= IMPORTANT INFO ================= */}

      <section className="support-section" >
        <div className="container">
          <div className="important-card text-center">
            <div className="warning-icon mb-3">⚠️</div>

            <h3 className="fw-bold mb-3">
              Important Information
            </h3>

            <p className="mb-0">
              Please read all legal documents carefully before opening an
              account. Trading CFDs and leveraged financial products involves a
              high level of risk and may not be suitable for all investors.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalDocuments;