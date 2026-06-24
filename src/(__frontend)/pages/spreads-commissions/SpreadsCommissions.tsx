
type WithdrawTable = {
  title: string;
  instrument: string[];
  standardAccount: string[];
  rawSpreadAccount: string[];
  professionalAccount: string[];
};

const SpreadsCommissions = () => {
  const withdrawFaqTable: WithdrawTable[] = [
    {
      title: "Account Type Comparison",
      instrument: ["EUR/USD", "GBP/USD", "USD/JPY", "Gold"],
      standardAccount: [
        "From 1.0 pips",
        "From 1.2 pips",
        "From 0.1 pips + $7/lot",
        "From 2.0 pips",
      ],
      rawSpreadAccount: [
        "From 0.0 pips + $7/lot",
        "From 0.1 pips + $7/lot",
        "From 0.0 pips + $7/lot",
        "From 0.5 pips + $7/lot",
      ],
      professionalAccount: [
        "From 0.0 pips + $5/lot",
        "From 0.1 pips + $5/lot",
        "From 0.0 pips + $5/lot",
        "From 0.3 pips + $5/lot",
      ],
    },
  ];

  const withdrawFaq: string[] = [
    "Deposit Fee: $0",
    "Withdrawal Fee: $0",
    "Inactivity Fee: $10/month (after 3 months)",
    "Currency Conversion: 0.5%",
  ];

  return (
    <>
           {/* ================= TABLE ================= */}
      {/* ================= TABLE ================= */}
      <section className="support-section">
        <div className="container">
          <div className="support-card">
              <h3>Account Type Comparison</h3>

              <div className="table-responsive">
                <table className="modern-table">
                  <thead>
                      <tr>
                    <th>Instrument</th>
                    <th>Standard</th>
                    <th className="highlight-col">Raw Spread</th>
                    <th>Professional</th>
                  </tr>
                  </thead>

                  <tbody>
                   {withdrawFaqTable[0].instrument.map((item, index) => (
                    <tr key={index}>
                      <td>{item}</td>
                      <td>{withdrawFaqTable[0].standardAccount[index]}</td>
                      <td>
                        {withdrawFaqTable[0].rawSpreadAccount[index]}
                      </td>
                      <td>{withdrawFaqTable[0].professionalAccount[index]}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </section>


        <section className="support-section">
          <div className="container">
            <div className="glass-card">
              <h3>Additional Fees</h3>
              
              <div className="steps-grid">
                {withdrawFaq.map((step, i) => (
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

export default SpreadsCommissions;