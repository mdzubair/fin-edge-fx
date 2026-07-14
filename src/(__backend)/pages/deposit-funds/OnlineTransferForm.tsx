import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../../../redux/store";
import { fetchAdminAccount } from "../../../redux/slice/account";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { onlineTransferSchema } from "../../../validators";
import toast from "react-hot-toast";
import { createOnlineTransferDeposit } from "../../../redux/slice/trade-settlement";

type FormValues = {
  bankId: string;
  inrAmount: number;
  amount: number;
  declaration: boolean;
};


const OnlineTransferForm = () => {
  
  const [searchParams] = useSearchParams();
  const step1 = searchParams.get("step-1");
  const label = searchParams.get("label");

const dispatch = useDispatch<AppDispatch>();
const auth = useSelector((state:RootState)=>state.auth);

const { accounts } = useSelector((state:RootState)=>state.account);
const currency = useSelector((state: RootState) => state.currency);
const currencyVal =  currency?.currency?.currencyVal || "0"; 
const navigate = useNavigate();
useEffect(() => {
const loadAccounts = async () => {
  try {
    await dispatch(fetchAdminAccount()).unwrap();
  } catch (error) {
    console.error("Failed to fetch accounts:", error);
  }
};

loadAccounts();
}, [dispatch]);

  
  
const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting },} = useForm<FormValues>({
  resolver: yupResolver(onlineTransferSchema) as any,
  defaultValues: {
    bankId: "",
    inrAmount: 0,
    amount: 0,
    declaration: false,
  },
});

const selectedBankId = watch("bankId");
const selectedBank = accounts?.find((bank: any) => bank._id === selectedBankId);



const inrAmount = watch("inrAmount");

useEffect(() => {
   // API rate
  setValue(
    "amount",
    Number(((inrAmount || 0) / currencyVal).toFixed(2))
  );
}, [inrAmount, setValue, currencyVal]);


const onSubmit = async (data: FormValues) => {
  try {
    const payload = {...data, userId: auth?.user?._id, payBy:label};
    await dispatch(createOnlineTransferDeposit(payload)).unwrap();
    toast.success("Payment added successfully.")
    navigate("/admin/trade-settlements");
  } catch (error:any) {
    toast.error(error)
  }
};

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-sm-12">
          <div className="card border-0 shadow-sm rounded-4">

            {/* Header */}
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">
                <i className="fas fa-university text-primary me-2"></i>
                {label?.toUpperCase()}
              </h5>

              <Link
                to={`/admin/deposit-optiopns?step-1=${step1}`}
                className="btn btn-light border rounded-pill px-3"
                    >
                        <i className="fas fa-arrow-left me-2"></i>
                Back
              </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* Body */}
            <div className="card-body">

              {/* Bank */}
              <div className="mb-3">
                <label className="form-label">
                  Select Bank
                </label>
                 <select className={`form-select ${errors.bankId ? "is-invalid" : ""}`} {...register("bankId")}>
                    <option value="">Select Bank</option>
                    {accounts?.map((item: any) => (
                      <option key={item._id} value={item._id}>
                        {item.bankName}
                      </option>
                    ))}
                  </select>

                  <div className="invalid-feedback">
                    {errors.bankId?.message}
                  </div>
              </div>

              {selectedBank && (
                <div className="card border-0 shadow-sm rounded-4 mt-4">
                  <div className="card-header bg-light fw-bold">
                    <i className="fas fa-university text-primary me-2"></i>
                    Bank Details
                  </div>

                  <div className="card-body">

                    <div className="d-flex justify-content-between py-2 border-bottom">
                      <span className="text-muted">Bank Name</span>
                      <strong>{selectedBank.bankName}</strong>
                    </div>

                    <div className="d-flex justify-content-between py-2 border-bottom">
                      <span className="text-muted">Account Holder</span>
                      <strong>{selectedBank.holderName}</strong>
                    </div>

                    <div className="d-flex justify-content-between py-2 border-bottom">
                      <span className="text-muted">Account Number</span>

                      <div>
                        <strong>{selectedBank.accNo}</strong>

                        <button
                          type="button"
                          className="btn btn-sm btn-link"
                          onClick={() =>
                            navigator.clipboard.writeText(selectedBank.accNo)
                          }
                        >
                          <i className="far fa-copy"></i>
                        </button>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between py-2 border-bottom">
                      <span className="text-muted">IFSC</span>
                      <strong>{selectedBank.ifscCode}</strong>
                    </div>


                  </div>
                </div>
              )}








              {/* INR Amount */}
              <div className="mb-3">
                <label className="form-label">
                  Deposit Amount (INR)
                </label>

                <input type="number" className={`form-control ${   errors.inrAmount ? "is-invalid" : "" }`} placeholder="Enter amount" {...register("inrAmount")}/>

                <div className="invalid-feedback">
                  {errors.inrAmount?.message}
                </div>
              </div>

              {/* USD Amount */}
              <div className="mb-3">
                <label className="form-label">
                  Deposit Amount (USD)
                </label>

                <input type="number" className="form-control bg-light" readOnly {...register("amount")}/>
              </div>

              <small className="text-muted d-block mb-3">
                * The exchange rate shown above is for reference only and may
                change at the time of processing.
              </small>

              {/* Limits */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="badge bg-light text-dark border px-3 py-2">
                  Min: ₹3,000
                </span>

                <span className="badge bg-light text-dark border px-3 py-2">
                  Max: ₹200,000
                </span>
              </div>

              {/* Declaration */}
              <div className="card border rounded-4 mb-3">
                <div className="card-body">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="term1" {...register("declaration")}/>

                      <label htmlFor="term1" className="form-check-label">
                          <div className="small text-muted mt-1">
                            I declare that this deposit is being made from a bank
                            account registered in my name, which matches the name on my
                            Fin Edge FX trading account and my government-issued
                            identity document. I understand that Fin Edge FX does not
                            accept deposits from third-party bank accounts.
                          </div>
                      </label>
                      
                      <div className="text-danger small mt-1">
                        {errors.declaration?.message}
                      </div>
                    </div>
                </div>
              </div>



              {/* Buttons */}
              <div className="d-flex gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-success flex-fill rounded-3"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-check me-2"></i>
                      Deposit
                    </>
                  )}
                </button>

                <Link
                  to="/admin/trade-settlements"
                  className="btn btn-outline-primary  flex-fill rounded-3"
                >
                  <i className="fas fa-history me-2"></i>
                  Deposit History
                </Link>
              </div>

            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineTransferForm;