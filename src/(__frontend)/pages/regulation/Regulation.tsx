
type SupportItem = {
  title: string;
  subTitle: string;
  descriptionIcon: string;
  description: string[];
};

const Regulation = () => {
  const supportBox: SupportItem[] = [
    {
      title: "Regulatory Information",
      subTitle: "",
      descriptionIcon: "",
      description: [
        "FinEdgeFx is the trading name of Raw Trading Ltd, regulated by the Seychelles Financial Services Authority (FSA) with license SD018.",
      ],
    },
    {
      title: "Client Fund Protection",
      subTitle: "",
      descriptionIcon: "✓",
      description: [
        "Client funds held in segregated accounts with top-tier banks",
        "Negative balance protection on all retail accounts",
        "Regular audits by independent auditors",
        "Compliance with anti-money laundering regulations",
      ],
    },
    {
      title: "Regulatory Compliance",
      subTitle: "We adhere to strict regulatory standards including:",
      descriptionIcon: "✓",
      description: [
        "Know Your Customer (KYC) procedures",
        "Anti-Money Laundering (AML) policies",
        "Data protection and privacy regulations",
        "Fair trading practices",
      ],
    },
  ];

  return (
    <>
    
        <section className="support-section">
          <div className="container">

            <div className="row">
                <div className="col-lg-12 mb-4">
                  <div className="support-card p-4 p-lg-5">
                    <div className="top-bar" />

                    {/* Title */}
                    <h4 className="fw-bold mb-3">
                      {supportBox[0].title}
                    </h4>

                    {/* Subtitle */}
                    {supportBox[0].subTitle && (
                      <p className="mb-4">
                        {supportBox[0].subTitle}
                      </p>
                    )}

                    {/* Description */}
                    <ul className="list-unstyled mb-0">
                      {supportBox[0].description.map((desc, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start mb-3"
                        >
                          {supportBox[0].descriptionIcon && (
                            <span className="check-icon me-3">
                              {supportBox[0].descriptionIcon}
                            </span>
                          )}

                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
            </div>

          </div>
        </section>
        
          
        <section className="support-section">
          <div className="container">

            <div className="row">
                <div className="col-lg-12 mb-4">
                  <div className="support-card p-4 p-lg-5">
                    <div className="top-bar" />

                    {/* Title */}
                    <h4 className="fw-bold mb-3">
                      {supportBox[1].title}
                    </h4>

                    {/* Subtitle */}
                    {supportBox[1].subTitle && (
                      <p className="mb-4">
                        {supportBox[1].subTitle}
                      </p>
                    )}

                    {/* Description */}
                    <ul className="list-unstyled mb-0">
                      {supportBox[1].description.map((desc, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start mb-3"
                        >
                          {supportBox[1].descriptionIcon && (
                            <span className="check-icon me-3">
                              {supportBox[1].descriptionIcon}
                            </span>
                          )}

                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
            </div>

          </div>
        </section>


         <section className="support-section">
          <div className="container">

            <div className="row">
                <div className="col-lg-12 mb-4">
                  <div className="support-card p-4 p-lg-5">
                    <div className="top-bar" />

                    {/* Title */}
                    <h4 className="fw-bold mb-3">
                      {supportBox[2].title}
                    </h4>

                    {/* Subtitle */}
                    {supportBox[2].subTitle && (
                      <p className="mb-4">
                        {supportBox[2].subTitle}
                      </p>
                    )}

                    {/* Description */}
                    <ul className="list-unstyled mb-0">
                      {supportBox[2].description.map((desc, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start mb-3"
                        >
                          {supportBox[2].descriptionIcon && (
                            <span className="check-icon me-3">
                              {supportBox[2].descriptionIcon}
                            </span>
                          )}

                          <span>{desc}</span>
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

export default Regulation;