import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { receiptList, updateReceiptStatus, } from "../../../redux/slice/deposit";
import { getSingleAccount } from "../../../redux/slice/account";
import { IMG_URL } from "../../../api/default-data";
import UploadReceiptForm from "./UploadReceiptForm";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
function DepositFunds() {
  const dispatch = useDispatch<AppDispatch>();
  const { userId } = useParams<{ userId: string }>();  
  const auth = useSelector((state:RootState)=>state.auth);
  const paramUserId: string = auth?.user?.userType === 1 ? (userId ?? "0") : (auth?.user?._id?.toString() ?? "0");


  const [statusFilter, setStatusFilter] = useState<number>(0);
  const { receipts, loading } = useSelector((state: RootState) => state.deposit);
  const fetchReceipts = useCallback(
    async (status: number = statusFilter) => {
      try {
        if (!paramUserId) {
          toast.error("User ID is required");
          return;
        }
        await dispatch(receiptList({ userId:paramUserId, status, }));
      } catch (error:any) {
        toast.error(error.message);
      }
    },
    [dispatch, paramUserId, statusFilter]
  );

  useEffect(() => {
    fetchReceipts();
  }, [fetchReceipts]);

  const changeDepositStatus = async (
    rowId: string,
    status: number
  ) => {
    try {
      await dispatch(
        updateReceiptStatus({
          rowId,
          status,
        })
      ).unwrap();

      await fetchReceipts(statusFilter);
      if (!paramUserId) {
        toast.error("User ID is required");
        return;
      }
      await dispatch(getSingleAccount(paramUserId));
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleFilterChange = async (status: number) => {
    setStatusFilter(status);
    await fetchReceipts(status);
  };

  const renderStatus = (status: number) => {
    switch (status) {
      case 1:
        return (
          <span className="badge rounded-pill border border-success text-success">
            Confirmed
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

  return (
    <>
     {/* {loading && (<Loader /> )} */}

      {auth && auth?.user?.userType==0 && <UploadReceiptForm userId={paramUserId} />}

      <div className="card mt-4">
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
          <h5 className="mb-0">Receipt List</h5>

          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-sm ${
                statusFilter === 0
                  ? "btn-warning"
                  : "btn-outline-warning"
              }`}
              onClick={() => handleFilterChange(0)}
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
              onClick={() => handleFilterChange(1)}
            >
              Complete
            </button>

            <button
              type="button"
              className={`btn btn-sm ${
                statusFilter === 2
                  ? "btn-danger"
                  : "btn-outline-danger"
              }`}
              onClick={() => handleFilterChange(2)}
            >
              Rejected
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Method</th>
                  <th>Amount</th>
                  <th>Receipt</th>
                  <th>Status</th>
                  <th>Date</th>
                  {auth && auth?.user?.userType==1 && <th>Action</th>}
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
                  receipts?.length > 0 &&
                  receipts.map(
                    (
                      item: any,
                      index: number
                    ) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>

                        <td>
                          {item?.userId?.firstName}{" "}
                          {item?.userId?.lastName}
                        </td>

                        <td>{item.payBy}</td>

                        <td>${item.amount}</td>

                        <td>
                          <img
                            src={`${IMG_URL}receipt/${item.receipt}`}
                            alt="Receipt"
                            className="img-thumbnail"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                          />
                        </td>

                        <td>
                          {renderStatus(item.status)}
                        </td>

                        <td>
                          {new Date(
                            item.createdAt
                          ).toLocaleString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        {auth && auth?.user?.userType==1 &&
                        <td>
                          {item.status === 0 && (
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
                          )}
                        </td>
                        }
                      </tr>
                    )
                  )}

                {!loading &&
                  receipts?.length === 0 && (
                    <tr>
                      <td
                        colSpan={auth && auth?.user?.userType==1?8:7}
                        className="text-center py-4"
                      >
                        No receipts found
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

export default DepositFunds;