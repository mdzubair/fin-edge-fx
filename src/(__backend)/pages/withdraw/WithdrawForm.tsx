import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { withdrawSchema } from "../../../validators";
import type { AppDispatch, RootState } from "../../../redux/store";
import type { WithdrawFormPayload } from "../../../interfaces";
import { addWithdraw, fetchWithdrawByUserId } from "../../../redux/slice/withdraw";
import {  useState } from "react";
// import { updateUsdPrice } from "../../../redux/slice/currency";


interface WithdrawFormProps {
  userId: string;
}

function WithdrawForm({userId}: WithdrawFormProps) {
  const [rupeeAmount, setRupeeAmount] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.withdraw);
  const currency = useSelector((state: RootState) => state.currency);
  const currencyVal =  currency?.currency?.currencyVal || "0"; 
console.log(currency);



  const {register,handleSubmit,reset, setValue, formState: { errors }, } = useForm<WithdrawFormPayload>({
    resolver: yupResolver(withdrawSchema) as any,
    defaultValues: { payType: "India local banks" },
  });





  const onSubmit = async (data: WithdrawFormPayload) => {
    try {
      await dispatch(addWithdraw({...data, userId,})).unwrap();

      await dispatch(
        fetchWithdrawByUserId({userId,  status:0})
      ).unwrap();

      toast.success("Settlement submitted successfully");

      reset();
      setRupeeAmount(0);
    } catch (error: any) {
      toast.error(
        typeof error === "string"
          ? error
          : "Failed to submit settlement"
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
    <div className="card border-0 shadow-lg rounded-4">
      <div className="card-header text-white py-3">
        <h5 className="mb-0">Withdraw</h5>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row align-items-start g-3">

            {/* Transaction Type */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Transaction
              </label>

              <div className="d-flex gap-3">
                <div className="form-check">
                  <input {...register("payType")} type="radio" value="India local banks" id="payType" className="form-check-input" />
                  <label htmlFor="India local banks" className="form-check-label text-success fw-semibold">
                    India local banks
                  </label>
                </div>

                <div className="form-check">
                  <input {...register("payType")} type="radio" value="PayPal" id="payType" className="form-check-input" disabled/>
                  <label htmlFor="PayPal" className="form-check-label text-danger fw-semibold">
                    PayPal
                  </label>
                </div>

                <div className="form-check">
                  <input {...register("payType")} type="radio" value="Stripe" id="payType" className="form-check-input" disabled/>
                  <label htmlFor="Stripe" className="form-check-label text-danger fw-semibold">
                    Stripe
                  </label>
                </div>

                <div className="form-check">
                  <input {...register("payType")} type="radio" value="Razorpay" id="payType" className="form-check-input" disabled/>
                  <label htmlFor="Razorpay" className="form-check-label text-danger fw-semibold">
                    Razorpay
                  </label>
                </div>
              </div>

              {errors.payType && (
                <small className="text-danger d-block mt-1">
                  {errors.payType.message}
                </small>
              )}
            </div>

            {/* Amount */}
            <div className="col-md-2 mb-3">
              <label className="form-label"> ₹({Number(currencyVal || 0).toFixed(2)}) </label>
               <input type="number" min={1} className="form-control" value={rupeeAmount} onChange={handleRupeeChange} placeholder="Enter INR Amount"/>             
            </div>

            <div className="col-md-2 mb-3">
              <label className="form-label">
                Amount ($1)
              </label>

              <input type="number" min={100} max={1000} step="1" {...register("amount", { valueAsNumber: true,  })} className={`form-control ${ errors.amount ? "is-invalid" : ""  }`} disabled={true} />

              {errors.amount && (
                <div className="invalid-feedback">
                  {errors.amount.message}
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="col-md-2">
              <label className="form-label d-block">
                &nbsp;
              </label>

              <button type="submit" disabled={loading} className="btn btn-outline-primary w-100">
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"  role="status" />
                    Processing...
                  </>
                ) : (
                  "Withdraw"
                )}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default WithdrawForm;