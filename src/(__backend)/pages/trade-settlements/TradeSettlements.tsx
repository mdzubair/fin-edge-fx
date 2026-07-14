import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import type { AppDispatch, RootState } from "../../../redux/store";
import { settlementList, updateDepositStatus } from "../../../redux/slice/trade-settlement";
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

  const [statusFilter, setStatusFilter] = useState<number>(0);

  const fetchSettlement = useCallback(
    async (status: number) => {
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
    status: number
  ) => {
    setStatusFilter(status);
  };

  const renderStatus = (status: number) => {
    switch (status) {
      case 1:
        return (
          <span className="badge rounded-pill border border-success text-success">
            Approved
          </span>
        );

      case 2:
        return (
          <span className="badge rounded-pill border border-danger text-danger">
            Rejected
          </span>
        );

      default:
        return (
          <span className="badge rounded-pill border border-warning text-warning">
            Pending
          </span>
        );
    }
  };
const changeDepositStatus = async ( rowId: string, status: number) => {
    try {
      await dispatch(updateDepositStatus({rowId, status, })).unwrap();
      await fetchSettlement(statusFilter);
    } catch (error) {
      console.error("Failed to update status:", error);
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
                statusFilter === 0
                  ? "btn-warning"
                  : "btn-outline-warning"
              }`}
              onClick={() =>
                handleFilterChange(0)
              }
            >
              Pending
            </button>

            <button
              type="button"
              className={`btn btn-sm ${
                statusFilter === 1
                  ? "btn-success"
                  : "btn-outline-success"
              }`}
              onClick={() =>
                handleFilterChange(1)
              }
            >
              Approved
            </button>

            <button
              type="button"
              className={`btn btn-sm ${
                statusFilter === 2
                  ? "btn-danger"
                  : "btn-outline-danger"
              }`}
              onClick={() =>
                handleFilterChange(2)
              }
            >
              Debited
            </button>
          </div>
        </div>

        <div className="card-body p-4">
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle mb-0">
              <thead className="table-light">
                <tr className=" text-nowrap">
                  <th>#</th>
                  <th>User</th>
                  <th>Pay By</th>
                  <th>Account</th>
                  <th>IFSC</th>
                  <th>UPI</th>
                  <th>Previous</th>
                  <th>Amount</th>
                  <th>Processed</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Date</th>
                  {(auth && auth?.user?.userType==1) && <th>Action</th>}
                </tr>
              </thead>

              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={12} className="text-center py-4">
                      <div className="spinner-border spinner-border-sm me-2"></div>
                      Loading...
                    </td>
                  </tr>
                )}

                {!loading &&
                  deposits?.map((item: any, index: number) => (
                    <tr key={item._id} >

                      <td>{index + 1}</td>

                      <td style={{ minWidth: 150 }}>
                        <div className="fw-semibold">
                          {item?.userId?.firstName} {item?.userId?.lastName}
                        </div>
                      </td>

                      <td className="text-nowrap">
                        {item?.payBy}
                      </td>

                      <td className="text-nowrap">
                        {item?.bankId?.accNo || "-"}
                      </td>

                      <td className="text-nowrap">
                        {item?.bankId?.ifscCode || "-"}
                      </td>

                      <td className="text-nowrap">
                        {item?.bankId?.upi || "-"}
                      </td>

                      <td className="text-nowrap fw-semibold">
                        ${(item.preAmount).toFixed(2)}
                      </td>

                      <td className="text-nowrap fw-semibold">
                        ${(item.crAmount).toFixed(2)}
                      </td>

                      <td className="text-nowrap fw-semibold">
                        {item.payType === "add_val" ? (
                          <span className="text-success">
                            +${item.processAmount}
                          </span>
                        ) : (
                          <span className="text-danger">
                            -${item.processAmount}
                          </span>
                        )}
                      </td>

                      <td className="text-nowrap">
                        {item.payType === "add_val" ? (
                          <span className="badge bg-success">
                            Credit
                          </span>
                        ) : (
                          <span className="badge bg-danger">
                            Debit
                          </span>
                        )}
                      </td>

                      <td className="text-nowrap">
                        {renderStatus(item.payStatus)}
                      </td>

                      <td
                        className="text-nowrap"
                        style={{ minWidth: 150 }}
                      >
                        {new Date(item.createdAt).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>

                        {(auth && auth?.user?.userType==1) && item.payStatus === 0 && <td>
                          
                            <div className="d-flex gap-2">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-success"
                                onClick={() =>
                                  changeDepositStatus(
                                    item._id,
                                    1
                                  )
                                }
                              >
                                Approve
                              </button>

                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() =>
                                  changeDepositStatus(
                                    item._id,
                                    2
                                  )
                                }
                              >
                                Reject
                              </button>
                            </div>
                          
                          
                          
                          
                          
                          
                          </td>}




                        
                    </tr>
                  ))}

                {!loading && deposits?.length === 0 && (
                  <tr>
                    <td colSpan={12} className="text-center py-4">
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