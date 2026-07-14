import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import { fetchAdminAccount } from "../../../redux/slice/account";
import { useForm } from "react-hook-form";
import { upiTransferSchema } from "../../../validators";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { createOnlineTransferDeposit } from "../../../redux/slice/trade-settlement";
type FormValues = {
  bankId: string;
  inrAmount: number;
  amount: number;
  declaration: boolean;
};

const UpiDepositForm = () => {
  const [searchParams] = useSearchParams();
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
    resolver: yupResolver(upiTransferSchema) as any,
    defaultValues: {
      bankId: "",
      inrAmount: 0,
      amount: 0,
      declaration: false,
    },
  });
  
  
  
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
      const payload = {...data, userId: auth?.user?._id, bankId: accounts[0]?._id, payBy:label};
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
                to={`/admin/deposit-optiopns?step-1=upi`}
                className="btn btn-light border rounded-pill px-3"
                    >
                        <i className="fas fa-arrow-left me-2"></i>
                Back
              </Link>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">

                {/* UPI Details */}
                  <label className="form-label">
                      <i className="fas fa-qrcode me-2 text-primary"></i>
                      UPI Details
                  </label>

                <div className="list-group list-group-flush border rounded-3 mb-4">

                  <div className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="text-muted">UPI ID</span>

                    <div className="d-flex align-items-center">
                      <strong className="me-2">{accounts && accounts[0]?.upi}</strong>

                      <button className="btn btn-sm btn-light border rounded-circle">
                        <i className="far fa-copy"></i>
                      </button>
                    </div>
                  </div>

                </div>

                {/* INR Amount */}
                <div className="mb-3">
                  <label className="form-label"> Deposit Amount (INR) </label>
                   <input type="number" className={`form-control ${   errors.inrAmount ? "is-invalid" : "" }`} placeholder="Enter amount" {...register("inrAmount")}/>
                  <div className="invalid-feedback"> {errors.inrAmount?.message}</div>
                </div>

                {/* USD Amount */}
                <div className="mb-3">
                  <label className="form-label">
                    Deposit Amount (USD)
                  </label>
                  <input type="number" className="form-control bg-light" readOnly {...register("amount")}/>
                </div>

                <small className="text-muted d-block mb-3">
                  * The exchange rate shown above is for reference only and may vary at the time of processing.
                </small>

                {/* Limits */}
                <div className="d-flex justify-content-between mb-4">
                  <span className="badge bg-light text-dark border">
                    Min: ₹8,000
                  </span>

                  <span className="badge bg-light text-dark border">
                    Max: ₹100,000
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
                              account registered in my name, which matches the name
                              registered on my Fin Edge FX trading account and my
                              government-issued identity document. I understand that
                              Fin Edge FX does not accept deposits from third-party bank
                              accounts.
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

export default UpiDepositForm;