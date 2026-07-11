import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import type { AppDispatch, RootState } from "../../../redux/store";
import WithdrawForm from "./WithdrawForm";
import { fetchWithdrawByUserId, updateWithdrawStatus } from "../../../redux/slice/withdraw";
import { useNavigate, useParams } from "react-router-dom";
import WithdrawOptions from "./WithdrawOptions";
import { getSingleAccount } from "../../../redux/slice/account";

function Withdraw() {
  const dispatch = useDispatch<AppDispatch>();
  const { userId } = useParams<{ userId: string }>();  
  const auth = useSelector((state:RootState)=>state.auth);
  const paramUserId: string = auth?.user?.userType === 1 ? (userId ?? "0") : (auth?.user?._id?.toString() ?? "0");
  const { withdraws, loading } = useSelector(
    (state: RootState) => state.withdraw
  );
// const [updatingId, setUpdatingId] = useState("");
  const [statusFilter, setStatusFilter] = useState(0);

  const renderStatus = (status: number) => {
    switch (status) {
      case 1:
        return (
          <span className="badge rounded-pill border border-success text-success">
            Completed
          </span>
        );

      case 2:
        return (
          <span className="badge rounded-pill border border-danger text-danger">
            Cancelled
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

    
  const fetchWithdraw = useCallback(
    async (status: number) => {
      try {
        await dispatch(fetchWithdrawByUserId({userId: paramUserId, status})).unwrap();
      } catch (error: any) {
        toast.error(
          error || "Failed to fetch withdraw list"
        );
      }
    },
    [dispatch, paramUserId]
  );

  useEffect(() => {
    fetchWithdraw(statusFilter);
  }, [fetchWithdraw, statusFilter]);

  const handleFilterChange = (
    status: number
  ) => {
    setStatusFilter(status);
  };

    // const changeWithdrawStatus = async (rowId: string,status: number) => {
    //   try {
    //     await dispatch(updateWithdrawStatus({ rowId, status})).unwrap();  
    //     await fetchWithdraw(statusFilter);
    //   } catch (error) {
    //     console.error("Failed to update status:", error);
    //   }
    // };


    const changeWithdrawStatus = async ( rowId: string, status: number) => {
      try {
        // setUpdatingId(rowId);
        await dispatch(updateWithdrawStatus({ rowId, status,})).unwrap();
        toast.success("Status updated successfully");
        fetchWithdraw(statusFilter);
      } catch (error: any) {
        toast.error(error || "Unable to update status");
      } finally {
        // setUpdatingId("");
      }
    };

    
  // const { account } = useSelector((state:RootState)=>state.account);
  const { account, loading: accountLoading } = useSelector((state: RootState) => state.account);
  if (accountLoading) {
    return (
        <div className="text-center py-5">
            <div className="spinner-border" />
        </div>
    );
}
const fetchAcc = useCallback(async () => {
  try {
    await dispatch(getSingleAccount(paramUserId)).unwrap();
  } catch (error) {
    console.error(error);
  }
}, [dispatch, paramUserId]);

useEffect(() => {
  fetchAcc();
}, [fetchAcc]);

  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user?.userType === 0 && account === null) {
      toast.error("Your bank details were not found. Please add your bank details before requesting a withdrawal.");
      // navigate("/admin/manage-bank");
    }
  }, [account, auth?.user?.userType, navigate]);
    
console.log(account);

  return (
    <>

      {auth?.user?.userType === 0 && account && (
            <>
                <WithdrawOptions />
                <WithdrawForm userId={paramUserId} />
            </>
        )}

      <div className="card mt-4 shadow-sm border-0">
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
          <h5 className="mb-0">
            Withdraw List
          </h5>

          <div className="btn-group">
            <button type="button" className={`btn btn-sm ${ statusFilter === 0 ? "btn-warning" :  "btn-outline-warning" }`} onClick={() => handleFilterChange(0) }>
              Pending
            </button>

            <button type="button" className={`btn btn-sm ${ statusFilter === 1 ? "btn-success" :  "btn-outline-success" }`} onClick={() => handleFilterChange(1) }>
              Completed
            </button>

            <button type="button" className={`btn btn-sm ${ statusFilter === 2 ? "btn-danger" : "btn-outline-danger" }`} onClick={() => handleFilterChange(2) }>
              Cancelled
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
                  <th>Amount</th>
                  <th>Pay By</th>
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
                  withdraws?.map(
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

                        
                        <td >
                          ${item.amount}
                        </td>
                        <td>
                          {item.payType}
                        </td>
                        <td>
                         {renderStatus(item.status)}
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
                        {auth && auth?.user?.userType==1 && 
                        <td>
                          {
                          item.status==0 && (
                            <>
                           <button
                                type="button"
                                className="btn btn-sm btn-outline-success"
                                onClick={() => changeWithdrawStatus(item._id, 1)}
                              >
                                Complete
                              </button>

                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() =>changeWithdrawStatus(item._id, 2)}
                              >
                                Cancel
                              </button>
                            </>
                          )
                        }
                        </td>
                        }
                      </tr>
                    )
                  )}

                {!loading &&
                  withdraws?.length ===
                    0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="text-center text-muted py-4"
                      >
                        No withdraws found
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

export default Withdraw;