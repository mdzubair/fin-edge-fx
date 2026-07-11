import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { withdrawNewSchema } from "../../../validators";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import toast from "react-hot-toast";
import { addWithdraw } from "../../../redux/slice/withdraw";
interface Account {
  _id:string;
  userId:string;
  bankName?: string;
  holderName?: string;
  accNo?: string;
  ifscCode?: string;
}

type WithdrawForm = {
  _id:string;
  userId: string;
  amount: number;
  payType: string;
};

interface WithdrawOptionsProps {
  account: Account | null;
}

const WithdrawOptions = ({ account }: WithdrawOptionsProps) => {
  const [terms, setTerms]= useState<boolean>(false)
  const [selectedMethod, setSelectedMethod] = useState("onlineBank");  
  const [rupeeAmount, setRupeeAmount] = useState<number>(0);
  const currency = useSelector((state: RootState) => state.currency);
  const currencyVal =  currency?.currency?.currencyVal || "0"; 
  const dispatch = useDispatch<AppDispatch>();

  if (!account) return null;

  const {_id, bankName = "", holderName = "", accNo = "", ifscCode = "", userId=""} = account;
  
const { register, handleSubmit, reset, setValue, formState: { errors },} = useForm<WithdrawForm>({
  resolver: yupResolver(withdrawNewSchema) as any,
  defaultValues: { payType: "onlineBank", amount: 0,},
});


const onSubmit = async (data: WithdrawForm) => {
  const payload = { ...data, bankId: _id, userId, payType: selectedMethod,};
  console.log(payload);
 
 
  try {
      await dispatch(addWithdraw(payload)).unwrap();
      toast.success("Withdrawal request submitted");

      // reset({payType: selectedMethod,amount:0
      // });
    reset();
    setRupeeAmount(0);
    setTerms(false);

  } catch (error: any) {
      toast.error(
        typeof error === "string"
          ? error
          : "Failed to submit withdrawal"
      );
    }
};

  const handleRupeeChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    const inr = Number(e.target.value) || 0;
    setRupeeAmount(inr);
    const usd = Number((inr / currencyVal).toFixed(2));
    setValue("amount", usd, { shouldValidate: true, });
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
            onClick={() => setSelectedMethod("onlineBank")}
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
          <div className={`card shadow-sm h-100 border ${
              selectedMethod === "binance" ? "border-primary border-3" : "border bg-light position-relative"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMethod("binance")}>
            <span className="position-absolute top-0 end-0 m-2">
              <i className="fas fa-lock text-danger"></i>
            </span>

            <div className="card-body text-center">
              <i className="fab fa-bitcoin fa-3x text-warning mb-3"></i>

              <h5>Binance Pay</h5>

              <p className="text-muted">
                Requires a successful deposit before withdrawal.
              </p>

              <button className="btn btn-outline-secondary" disabled>
                Locked
              </button>
            </div>
          </div>
        </div>

        {/* Crypto */}
        <div className="col-md-4">
          <div  className={`card shadow-sm h-100 border ${
              selectedMethod === "cryptocurrency" ? "border-primary border-3" : "border bg-light position-relative"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMethod("cryptocurrency")}>
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
                <input type="text" className="form-control" value={holderName} readOnly/>
              </div>

              <div className="col-md-4">
                <label className="form-label">Bank Name</label>
                <input type="text" className="form-control" value={bankName} readOnly/>
              </div>

              <div className="col-md-4">
                <label className="form-label">Account Number</label>
                <input type="text" className="form-control" value={accNo} readOnly/>
              </div>

              <div className="col-md-4">
                <label className="form-label">IFSC / SWIFT Code</label>
                <input type="text" className="form-control" value={ifscCode} readOnly/>
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