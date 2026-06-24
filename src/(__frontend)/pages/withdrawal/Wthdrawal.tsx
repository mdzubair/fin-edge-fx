
import React from "react";

type SupportItem = {
  title: string;
  description: string[];
};

type WithdrawTable = {
  title: string;
  method: string[];
  processingTime: string[];
  minWithdrawal: string[];
  fee: string[];
};

const Withdrawal: React.FC = () => {
  const withdrawFaqList: SupportItem[] = [
    {
      title: "How to Withdraw",
      description: [
        "Log in to your account",
        'Navigate to "Withdrawal" section',
        "Select withdrawal method",
        "Enter amount",
        "Confirm identity if required",
        "Submit request",
      ],
    },
  ];

  const withdrawFaqTable: WithdrawTable[] = [
    {
      title: "Withdrawal Methods & Processing Times",
      method: [
        "Credit/Debit Card",
        "Bank Transfer",
        "Skrill",
        "Neteller",
        "Bitcoin",
      ],
      processingTime: [
        "1-3 business days",
        "3-5 business days",
        "Instant - 24 hours",
        "Instant - 24 hours",
        "24 hours",
      ],
      minWithdrawal: ["$50", "$100", "$50", "$50", "$100"],
      fee: ["$0", "$0", "$0", "$0", "Network fee"],
    },
  ];

  return (
    <>
    {/* ================= TABLE ================= */}
        <section className="support-section">
          <div className="container">
            <div className="support-card">
              <h3>{withdrawFaqTable[0]?.title}</h3>

              <div className="table-responsive">
                <table className="modern-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Processing</th>
                      <th>Min</th>
                      <th>Fee</th>
                    </tr>
                  </thead>

                  <tbody>
                    {withdrawFaqTable[0]?.method.map((method, index) => (
                      <tr key={index}>
                        <td>{method}</td>

                        <td>
                          {withdrawFaqTable[0]?.processingTime[index]}
                        </td>

                        <td>
                          {withdrawFaqTable[0]?.minWithdrawal[index]}
                        </td>

                        <td className="fee">
                          {withdrawFaqTable[0]?.fee[index]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
         {/* ================= STEPS ================= */}
        <section className="support-section">
          <div className="container">
            <div className="glass-card">
              <h3>{withdrawFaqList[0]?.title}</h3>

              <div className="steps-grid">
                {withdrawFaqList[0]?.description.map((step, i) => (
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

export default Withdrawal;