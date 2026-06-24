
type WithdrawTable = {
  title: string;
  session: string[];
  opensGMT: string[];
  closesGMT: string[];
  majorPairs: string[];
};

const TradingHours = () => {
  const withdrawFaqTable: WithdrawTable[] = [
    {
      title: "Forex Trading Sessions",
      session: ["Sydney", "Tokyo", "London", "New York"],
      opensGMT: [
        "Sunday 22:00",
        "Monday 00:00",
        "Monday 08:00",
        "Monday 13:00",
      ],
      closesGMT: [
        "Monday 07:00",
        "Monday 09:00",
        "Monday 17:00",
        "Monday 22:00",
      ],
      majorPairs: [
        "AUD/USD, NZD/USD",
        "USD/JPY, AUD/JPY",
        "EUR/USD, GBP/USD",
        "EUR/USD, USD/CAD",
      ],
    },
  ];

  return (
    <>
    
      {/* ================= TABLE ================= */}
      <section className="support-section">
        <div className="container">
          <div className="support-card">
              <h3>Forex Trading Sessions</h3>

              <div className="table-responsive">
                <table className="modern-table">
                  <thead>
                     <tr>
                      <th>Session</th>
                      <th>Opens (GMT)</th>
                      <th>Closes (GMT)</th>
                      <th>Major Pairs</th>
                    </tr>
                  </thead>

                  <tbody>
                    {withdrawFaqTable[0].session.map((session, index) => (
                    <tr key={index}>
                      <td>
                        <span className="session-badge">
                          {session}
                        </span>
                      </td>
                      <td>{withdrawFaqTable[0].opensGMT[index]}</td>
                      <td>{withdrawFaqTable[0].closesGMT[index]}</td>
                      <td className="fee">
                        {withdrawFaqTable[0].majorPairs[index]}
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </section>

      {/* ================= CRYPTO ================= */}
      
      <section className="support-section" >
        <div className="container">
          <div className="support-card text-center">
            <div className="warning-icon mb-3">⚠️</div>

            <h3 className="fw-bold mb-3">
              Cryptocurrency Trading
            </h3>

            <p className="mb-0">
             All cryptocurrencies trade <strong> 24/7 </strong> including weekends with no breaks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TradingHours;