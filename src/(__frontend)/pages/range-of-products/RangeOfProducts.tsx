const RangeOfProducts = () => {
  type SupportItem = {
    key: string;
    title: string;
    subTitle: string;
    fundArr: string[];
    helpIcon: string;
  };

  const supportBox: SupportItem[] = [
    {
      key: "forexCFDs",
      title: "Forex CFDs",
      subTitle: "61 Currency Pairs",
      fundArr: [
        "Major pairs: EUR/USD, GBP/USD",
        "Minor pairs: EUR/GBP, AUD/NZD",
        "Leverage up to 1:1000",
      ],
      helpIcon: "💱",
    },
    {
      key: "stockCFDs",
      title: "Stock CFDs",
      subTitle: "+2100 Products",
      fundArr: [
        "US stocks: Apple, Microsoft",
        "European stocks: Volkswagen",
        "Asian stocks: Toyota, Alibaba",
      ],
      helpIcon: "📊",
    },
    {
      key: "indexCFDs",
      title: "Index CFDs",
      subTitle: "25 Indices",
      fundArr: [
        "US: S&P 500, NASDAQ",
        "Europe: DAX, FTSE 100",
        "Asia: Nikkei 225",
      ],
      helpIcon: "📈",
    },
    {
      key: "commodities",
      title: "Commodities",
      subTitle: "24 Products",
      fundArr: [
        "Energy: Oil, Natural Gas",
        "Metals: Gold, Silver",
        "Agriculture: Wheat, Corn",
      ],
      helpIcon: "🛢️",
    },
    {
      key: "cryptocurrency",
      title: "Cryptocurrency",
      subTitle: "21 Products",
      fundArr: [
        "Bitcoin, Ethereum",
        "24/7 trading",
        "No crypto wallet needed",
      ],
      helpIcon: "💎",
    },
    {
      key: "bondCFDs",
      title: "Bond CFDs",
      subTitle: "9 Products",
      fundArr: [
        "US Treasury bonds",
        "German Bunds",
        "UK Gilts",
      ],
      helpIcon: "📋",
    },
  ];

  return (
    <section className="support-section py-5">
        <div className="container">
          <div className="row g-4">

            {supportBox.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="support-card h-100 text-center">

                   <div className="icon-wrapper d-flex justify-content-center">
                      <div className="icon-box mb-3">{item.helpIcon}</div>
                    </div>
                  <h4>{item.title}</h4>

                  <p>{item.subTitle}</p>
                    <ul className="list-unstyled text-start small"> 
                    {item.fundArr.map((info, i) => (
                      <li key={i} className="d-flex align-items-start mb-2">     
                        <span className="check-icon me-2">✔</span>     {info}   
                      </li> 
                    ))}
                  </ul>
                 

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


  );
};

export default RangeOfProducts;