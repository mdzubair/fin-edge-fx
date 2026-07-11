import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { withdrawNewSchema } from "../../../validators";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import toast from "react-hot-toast";
import { addWithdraw, fetchWithdrawByUserId } from "../../../redux/slice/withdraw";
import { getSingleAccount } from "../../../redux/slice/account";
import { useNavigate } from "react-router-dom";
// interface Account {
//   _id:string;
//   userId:string;
//   bankName?: string;
//   holderName?: string;
//   accNo?: string;
//   ifscCode?: string;
// }

type WithdrawForm = {
  _id:string;
  userId: string;
  amount: number;
  payType: string;
};

interface WithdrawFormProps {
  userId: string;
}
const WithdrawOptions = ({userId}: WithdrawFormProps) => {

  const [terms, setTerms] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("onlineBank");
  const [rupeeAmount, setRupeeAmount] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const currency = useSelector((state: RootState) => state.currency);
  const currencyVal = Number(currency?.currency?.currencyVal ?? 0);

  const { account, loading: accountLoading,  } = useSelector((state: RootState) => state.account);

  const { register, handleSubmit, reset, setValue, formState: { errors },} = useForm<WithdrawForm>({
    resolver: yupResolver(withdrawNewSchema) as any,
    defaultValues: { amount: 0,},
  });

const handleSelectedMethod = useCallback(
  async (methodType: string) => {
    try {
      setSelectedMethod(methodType);
      await dispatch(getSingleAccount(userId)).unwrap();
    } catch (error: any) {
      toast.error(error?.message || "Failed to fetch bank details.");
    }
  },
  [dispatch, userId]
);

useEffect(() => {
  if (!accountLoading && !account) {
    toast.error(
      "Your bank details were not found. Please add your bank details before requesting a withdrawal."
    );

    navigate("/admin/manage-bank");
  }
}, [account, accountLoading, navigate]);

const onSubmit = async (data: WithdrawForm) => {
  if (!account) return;

  const payload = {
    ...data,
    bankId: account._id,
    userId,
    payType: selectedMethod,
  };

  try {
    await dispatch(addWithdraw(payload)).unwrap();
    await dispatch(
      fetchWithdrawByUserId({
        userId,
        status: 0,
      })
    ).unwrap();

    toast.success("Withdrawal request submitted.");

    reset({
      amount: 0,
    });

    setRupeeAmount(0);
    setTerms(false);
  } catch (error: any) {
    toast.error(error?.message || "Failed to submit withdrawal.");
  }
};

const handleRupeeChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const inr = Number(e.target.value) || 0;

  setRupeeAmount(inr);

  if (!currencyVal) {
    setValue("amount", 0);
    return;
  }

  const usd = Number((inr / currencyVal).toFixed(2));

  setValue("amount", usd, {
    shouldValidate: true,
    shouldDirty: true,
    shouldTouch: true,
  });
};


  
  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Select Withdrawal Method</h4>

      <div className="row g-4">
        {/* Bank Transfer */}
        <div className="col-md-4">
          <div
            className={`card shadow-sm h-100 border ${
              selectedMethod === "onlineBank" ? "border-primary border-3" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleSelectedMethod("onlineBank")}
          >
            <div className="card-body text-center">
              <i className="fas fa-university fa-3x text-primary mb-3"></i>

              <h5>Online Bank Transfer</h5>

              <p className="text-muted">
                Withdraw funds directly to your bank account.
              </p>
            </div>
          </div>
        </div>

        {/* Binance */}
        <div className="col-md-4">
          <div className={`card shadow-sm h-100 border ${selectedMethod === "binance" ? "border-primary border-3" : "border bg-light position-relative disabled" }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleSelectedMethod("binance")}>
            <span className="position-absolute top-0 end-0 m-2">
              <i className="fas fa-lock text-danger"></i>
            </span>

            <div className="card-body text-center">
              <i className="fab fa-bitcoin fa-3x text-warning mb-3"></i>

              <h5>Binance Pay</h5>

              <p className="text-muted">
                Requires a successful deposit before withdrawal.
              </p>

              <button className="btn btn-outline-secondary">
                Locked
              </button>
            </div>
          </div>
        </div>

        {/* Crypto */}
        <div className="col-md-4">
          <div  className={`card shadow-sm h-100 border ${selectedMethod === "cryptocurrency" ? "border-primary border-3" : "border bg-light position-relative disabled" }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleSelectedMethod("cryptocurrency")}>
            <span className="position-absolute top-0 end-0 m-2">
              <i className="fas fa-lock text-danger"></i>
            </span>

            <div className="card-body text-center">
              <i className="fas fa-coins fa-3x text-success mb-3"></i>

              <h5>Cryptocurrency</h5>

              <p className="text-muted">
                Requires a successful deposit before withdrawal.
              </p>

              <button className="btn btn-outline-secondary" disabled>
                Locked
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedMethod === "onlineBank" && (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card shadow-sm mt-5">
          <div className="card-header">
            <h5 className="mb-0">Bank Withdrawal Details</h5>
          </div>

          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Account Holder Name</label>
                <input type="text" className="form-control" value={account?.holderName} readOnly/>
              </div>

              <div className="col-md-4">
                <label className="form-label">Bank Name</label>
                <input type="text" className="form-control" value={account?.bankName} readOnly/>
              </div>

              <div className="col-md-4">
                <label className="form-label">Account Number</label>
                <input type="text" className="form-control" value={account?.accNo} readOnly/>
              </div>

              <div className="col-md-4">
                <label className="form-label">IFSC / SWIFT Code</label>
                <input type="text" className="form-control" value={account?.ifscCode} readOnly/>
              </div>

              <div className="col-md-4">
              <label className="form-label"> ₹({Number(currencyVal || 0).toFixed(2)}) </label>
               <input type="number" min={1} className="form-control" value={rupeeAmount} onChange={handleRupeeChange} placeholder="Enter INR Amount"/>             
            </div>

           
              <div className="col-md-4">
                <label className="form-label">Withdrawal Amount ( <strong>USD</strong> )</label>                
                <input type="number" min={15} max={1000} step="1" {...register("amount", { valueAsNumber: true,  })} className={`form-control ${ errors.amount ? "is-invalid" : ""  }`} disabled={true} />
                {errors.amount && (
                  <div className="invalid-feedback"> {errors.amount.message}</div>
                )}
              </div>

              <div className="col-12">
                <div className="col-6">
                  <input type="checkbox" checked={terms} onChange={() => setTerms((prev) => !prev)}/> I declare the following:
                  <ul>
                    <li>The withdrawal details provided above belong to me.</li>
                    <li>I understand that any fund withdrawals from my trading account will result in the proportional removal at my trading bonus.</li>
                    <li>I also acknowledge and accept that my withdrawal request may be amended and completed according to Fin Edge FX withdrawal priority procedure.</li>
                  </ul>
                </div>
                
              </div>


              <div className="col-12">
                <button className="btn btn-primary" disabled={!terms}> Submit Withdrawal</button>
              </div>

              
            </div>
          </div>
        </div>
        </form>
      )}
    </div>
  );
};

export default WithdrawOptions;