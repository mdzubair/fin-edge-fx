import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import type { AppDispatch, RootState } from "../../../redux/store";
import { settlementList } from "../../../redux/slice/trade-settlement";
import TradeSettlementForm from "./TradeSettlementForm";
import { useParams } from "react-router-dom";

function TradeSettlements() {
  const { userId } = useParams<{ userId: string }>();  
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state:RootState)=>state.auth);
  const paramUserId: string = auth?.user?.userType === 1 ? (userId ?? "0") : (auth?.user?._id?.toString() ?? "0");
  const { deposits, loading } = useSelector(
    (state: RootState) => state.tradeSettlement
  );

  const [statusFilter, setStatusFilter] = useState<string>("add_val");

  const fetchSettlement = useCallback(
    async (status: string) => {
      try {
        await dispatch(settlementList({ userId:paramUserId, status,})).unwrap();
      } catch (error: any) {
        toast.error(
          error || "Failed to fetch settlements"
        );
      }
    },
    [dispatch]
  );

  useEffect(() => {
    fetchSettlement(statusFilter);
  }, [fetchSettlement, statusFilter]);

  const handleFilterChange = (
    status: string
  ) => {
    setStatusFilter(status);
  };

  const renderStatus = (status: string) => {
    switch (status) {
      case "add_val":
        return (
          <span className="badge rounded-pill border border-success text-success">
            Credited
          </span>
        );

      case "less_val":
        return (
          <span className="badge rounded-pill border border-danger text-danger">
            Debited
          </span>
        );

      default:
        return (
          <span className="badge bg-secondary">
            Unknown
          </span>
        );
    }
  };

  return (
    <>
    {(auth && auth?.user?.userType==1 && paramUserId!="0") && <TradeSettlementForm userId={paramUserId} />}
      

      <div className="card mt-4 shadow-sm border-0">
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
          <h5 className="mb-0">
            Settlement List
          </h5>

          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-sm ${
                statusFilter === "add_val"
                  ? "btn-success"
                  : "btn-outline-success"
              }`}
              onClick={() =>
                handleFilterChange("add_val")
              }
            >
              Credited
            </button>

            <button
              type="button"
              className={`btn btn-sm ${
                statusFilter === "less_val"
                  ? "btn-danger"
                  : "btn-outline-danger"
              }`}
              onClick={() =>
                handleFilterChange("less_val")
              }
            >
              Debited
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>preAmount</th>
                  <th>crAmount</th>
                  <th>Process Amount</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {loading && (
                  <tr>
                    <td
                      colSpan={8}
                      className="text-center py-4"
                    >
                      <div className="spinner-border spinner-border-sm me-2" />
                      Loading...
                    </td>
                  </tr>
                )}

                {!loading &&
                  deposits?.map(
                    (
                      item: any,
                      index: number
                    ) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>

                        <td>
                          {
                            item?.userId
                              ?.firstName
                          }{" "}
                          {
                            item?.userId
                              ?.lastName
                          }
                        </td>

                        
                        <td className="fw-semibold">
                          ${item.preAmount}
                        </td>
                        <td className="fw-semibold">
                          ${item.crAmount}
                        </td>
                        <td className="fw-semibold">
                          ${item.payType === "add_val" ? (
                            <span className="text-success">{item.processAmount}</span>
                          ):(<span className="text-danger">{item.processAmount}</span> )}
                        </td>
                        <td>
                          {item.payType ===
                          "add_val" ? (
                            <span className="text-success fw-semibold">
                              Credit
                            </span>
                          ) : (
                            <span className="text-danger fw-semibold">
                              Debit
                            </span>
                          )}
                        </td>

                        <td>
                          {renderStatus(
                            item.payType
                          )}
                        </td>

                        <td>
                          {new Date(
                            item.createdAt
                          ).toLocaleString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute:
                                "2-digit",
                            }
                          )}
                        </td>
                      </tr>
                    )
                  )}

                {!loading &&
                  deposits?.length ===
                    0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="text-center text-muted py-4"
                      >
                        No settlements found
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TradeSettlements;