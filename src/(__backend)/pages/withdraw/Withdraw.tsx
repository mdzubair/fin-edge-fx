import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import type { AppDispatch, RootState } from "../../../redux/store";

// import WithdrawForm from "./WithdrawForm";
import WithdrawOptions from "./WithdrawOptions";

import {
  fetchWithdrawByUserId,
  updateWithdrawStatus,
} from "../../../redux/slice/withdraw";
import WithdrawDetailsModal from "./WithdrawDetailsModal";

// import { getSingleAccount } from "../../../redux/slice/account";

function Withdraw() {
  const dispatch = useDispatch<AppDispatch>();
  

  const { userId } = useParams<{ userId: string }>();

  const auth = useSelector((state: RootState) => state.auth);

  const { withdraws, loading } = useSelector(
    (state: RootState) => state.withdraw
  );

  const paramUserId =
    auth?.user?.userType === 1
      ? userId ?? "0"
      : auth?.user?._id?.toString() ?? "0";

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
        await dispatch(
          fetchWithdrawByUserId({
            userId: paramUserId,
            status,
          })
        ).unwrap();
      } catch (error: any) {
        toast.error(error || "Failed to fetch withdraw list");
      }
    },
    [dispatch, paramUserId]
  );
  

  useEffect(() => {
    fetchWithdraw(statusFilter);
  }, [fetchWithdraw, statusFilter]);

  const changeWithdrawStatus = async (
    rowId: string,
    status: number
  ) => {
    try {
      await dispatch(
        updateWithdrawStatus({
          rowId,
          status,
        })
      ).unwrap();

      toast.success("Status updated successfully");

      await fetchWithdraw(statusFilter);
    } catch (error: any) {
      toast.error(error || "Unable to update status");
    }
  };

   const [showModal, setShowModal] = useState(false);
  const [selectedWithdraw, setSelectedWithdraw] = useState<any>(null);

  const handleView = (item: any) => {
    setSelectedWithdraw(item);
    setShowModal(true);
  };
  return (
    <>
     
      { auth?.user?.userType === 0 && <WithdrawOptions userId={paramUserId}/>}

      <div className="card mt-4 shadow-sm border-0">
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
          <h5 className="mb-0">Withdraw List</h5>

          <div className="btn-group">
            <button
              className={`btn btn-sm ${
                statusFilter === 0
                  ? "btn-warning"
                  : "btn-outline-warning"
              }`}
              onClick={() => setStatusFilter(0)}
            >
              Pending
            </button>

            <button
              className={`btn btn-sm ${
                statusFilter === 1
                  ? "btn-success"
                  : "btn-outline-success"
              }`}
              onClick={() => setStatusFilter(1)}
            >
              Completed
            </button>

            <button
              className={`btn btn-sm ${
                statusFilter === 2
                  ? "btn-danger"
                  : "btn-outline-danger"
              }`}
              onClick={() => setStatusFilter(2)}
            >
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
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={7} className="text-center py-4">
                      <div className="spinner-border spinner-border-sm me-2" />
                      Loading...
                    </td>
                  </tr>
                )}

                {!loading &&
                  withdraws.map((item: any, index: number) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>

                      <td>
                        {item.userId?.firstName} {item.userId?.lastName}
                      </td>

                      <td>${item.amount}</td>

                      <td>{item.payType}</td>

                      <td>{renderStatus(item.status)}</td>

                      <td>
                        {new Date(item.createdAt).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                        <td>
                          <div className="d-flex gap-2">
                            <WithdrawDetailsModal show={showModal} onClose={() => setShowModal(false)} withdraw={selectedWithdraw} />
                             <button className="btn btn-outline-primary btn-sm" onClick={() => handleView(item)} >View</button>
                            {auth?.user?.userType === 1 &&  item.status === 0 && (                        
                              <>
                                <button
                                  className="btn btn-sm btn-outline-success"
                                  onClick={() =>
                                    changeWithdrawStatus(item._id, 1)
                                  }
                                >
                                  Complete
                                </button>

                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() =>
                                    changeWithdrawStatus(item._id, 2)
                                  }
                                >
                                  Cancel
                                </button>
                              </>
                            )}
                          </div>
                       </td>
                    </tr>
                  ))}

                {!loading && withdraws.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-4 text-muted">
                      No withdraws found.
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