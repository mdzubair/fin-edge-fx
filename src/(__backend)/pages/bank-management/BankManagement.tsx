import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import { deleteAccountById, fetchAccountByUserId, updateAccountStatus } from "../../../redux/slice/account";
import BankManagementForm from "./BankManagementForm";


function BankManagement() {
  const auth = useSelector((state:RootState)=>state.auth);
  const USER_ID= auth?.user?._id;
    const dispatch = useDispatch<AppDispatch>();
    const { accounts } = useSelector((state:RootState)=>state.account);
    useEffect(()=>{
        dispatch(fetchAccountByUserId(USER_ID))
    }, [dispatch, USER_ID])

    const changeStatus = async ( rowId: string, status: number) => {
        await dispatch(updateAccountStatus({ rowId, status })).unwrap();
        dispatch(fetchAccountByUserId(USER_ID));
    };

    const deleteAccount = async (rowId: string) => {
        if (!window.confirm("Delete this account?")) return;
         await dispatch(deleteAccountById(rowId)).unwrap();
         dispatch(fetchAccountByUserId(USER_ID));
    };




    return(
        <>
        <BankManagementForm userId={USER_ID}/>

        <div className="row g-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Bank Accounts</h4>
                <span className="badge bg-primary">Total: {accounts?.length || 0}</span>
            </div>
            {accounts?.map((account) => (
            <div className="col-12 mb-4" key={account._id}>
                <div className="card border-0 shadow-lg" style={{ borderRadius: "15px", overflow: "hidden",}}>
                    <div className="card-body p-4">
                      <div className="row align-items-center">
                        {/* QR Code */}
                        <div className="col-md-3 text-center mb-3 mb-md-0">
                          {account.qr && (
                            <img src={`https://fin-edge-fx-api.vercel.app/api/v1/public/account/${account.qr}`}
                              alt={account.bankName} className="img-fluid border rounded p-2 bg-white"    style={{ maxWidth: "180px", maxHeight: "180px",}}/>
                          )}
                          <span className={` mt-2 badge rounded-pill border ${account.status == 1 ? "border-success text-success" : "border-danger text-danger" }`}>
                            {account.status == 1 ? "Active" : "Inactive"}
                          </span>
                        </div>

                        {/* Bank Details */}
                        <div className="col-md-9">
                          <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                            <h4 className="fw-bold text-primary mb-0">{account.bankName}</h4>
                            <div className="d-flex gap-2 mt-2 mt-md-0">
                              <button type="button" className={`btn btn-sm px-3 ${account.status == 0 ? "btn-outline-success" : account.status == 1 ? "btn-outline-danger" : "btn-outline-success" }`} onClick={() => changeStatus( account._id, account.status == 0 ? 1 : account.status == 1 ? 2 : 1) } >
                                {account.status == 0 ? "Activate" : account.status == 1 ? "Deactivate" : "Activate"}
                              </button>
                                <button type="button" className="btn btn-outline-danger btn-sm px-3" onClick={() => deleteAccount(account._id)}>
                                  <i className="fa fa-trash me-1"></i>Delete
                                </button>
                              </div>
                            </div>

                          <div className="row g-3">
                            <div className="col-md-6">
                              <div className="border rounded p-3 bg-light">
                                <small className="text-muted d-block">Account Holder</small>
                                <strong>{account.holderName}</strong>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="border rounded p-3 bg-light">
                                <small className="text-muted d-block">Account Number</small>
                                <strong>{account.accNo}</strong>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="border rounded p-3 bg-light">
                                <small className="text-muted d-block">IFSC Code</small>
                                <strong>{account.ifscCode}</strong>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="border rounded p-3 bg-light">
                                <small className="text-muted d-block">Note</small>
                                <span>{account.note || "N/A"}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Bank Details */}
                      </div>
                    </div>
                  </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default BankManagement;