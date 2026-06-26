

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { receiptSchema } from "../../../validators";
import type { AppDispatch, RootState } from "../../../redux/store";
import { receiptList, submitDeposit } from "../../../redux/slice/deposit";
import { getSingleAccount } from "../../../redux/slice/account";
// import { updateUsdPrice } from "../../../redux/slice/currency";

interface ReceiptFormData {
  payBy: "UPI" | "BANK_TRANSFER";
  amount: number;
  receipt: FileList;
}

interface UploadReceiptFormProps {
  userId: string;
}

function UploadReceiptForm({
  userId,
}: UploadReceiptFormProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [preview, setPreview] = useState("");
  const [rupeeAmount, setRupeeAmount] = useState<number>(0);
  const currency = useSelector((state: RootState) => state.currency);
  const currencyVal =  currency?.currency?.currencyVal || "0"; 
  const { account } = useSelector((state: RootState) => state.account);
  const { loading } = useSelector((state: RootState) => state.deposit);


  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ReceiptFormData>({
    resolver: yupResolver(receiptSchema) as any,
    defaultValues: {
      payBy: "UPI",
    },
  });

  const paymentType = watch("payBy");

  useEffect(() => {
    if (userId) {
      dispatch(getSingleAccount(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const onSubmit = async (
    data: ReceiptFormData
  ) => {
    try {
      if (!account) {
        toast.error("Account details not found");
        return;
      }

      if (
        data.payBy === "UPI" &&
        !account?.upi?.trim()
      ) {
        toast.error("UPI account not configured");
        return;
      }

      if (
        data.payBy === "BANK_TRANSFER" &&
        !account?.accNo
      ) {
        toast.error(
          "Bank account not configured"
        );
        return;
      }

      const file = data.receipt?.[0];

      if (!file) {
        toast.error("Please upload receipt");
        return;
      }

      const formData = new FormData();

      formData.append("payBy", data.payBy);
      formData.append(
        "amount",
        String(data.amount)
      );
      formData.append("receipt", file);
      formData.append("userId", userId);
      formData.append(
        "accId",
        account?._id || ""
      );

      await dispatch(
        submitDeposit(formData)
      ).unwrap();

      await dispatch(
        receiptList({
          userId,
          status: 0,
        })
      );

      reset();

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      setPreview("");
      setRupeeAmount(0);
      toast.success(
        "Receipt submitted successfully"
      );
    } catch (error: any) {
      toast.error(
        error?.message ||
          error ||
          "Failed to submit receipt"
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
    <div className="card shadow-sm">
      <div className="card-header">
        <h5 className="mb-0">
          Upload Receipt
        </h5>
      </div>

      <div className="card-body">
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          {/* Payment Method */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Payment Method
            </label>

            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  {...register("payBy")}
                  type="radio"
                  value="UPI"
                  className="form-check-input"
                />
                <label className="form-check-label">
                  UPI
                </label>
              </div>

              <div className="form-check">
                <input
                  {...register("payBy")}
                  type="radio"
                  value="BANK_TRANSFER"
                  className="form-check-input"
                />
                <label className="form-check-label">
                  Bank Transfer
                </label>
              </div>
            </div>
          </div>

          {/* UPI Details */}
          {paymentType === "UPI" && (
            <div className="bg-info p-4 mb-3">
              <h6 className="fw-bold mb-3">
                Admin UPI Details
              </h6>

              <div className="row g-2">
                <div className="col-12 col-sm-6">
                  <div className="border rounded p-2 bg-white">
                    <small className="text-muted d-block">
                      Account Holder
                    </small>
                    <span className="fw-semibold text-break">
                      {account?.holderName || "-"}
                    </span>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="border rounded p-2 bg-white">
                    <small className="text-muted d-block">
                      UPI ID
                    </small>
                    <span className="fw-semibold text-break">
                      {account?.upi || "-"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bank Details */}
          {paymentType ===
            "BANK_TRANSFER" && (
            <div className="bg-info p-4  mb-3">
            <h6 className="fw-bold mb-3">
              Admin Bank Details
            </h6>

            <div className="row g-2">
              <div className="col-12 col-md-3">
                <div className="bg-white border rounded p-2 h-100">
                  <small className="text-muted d-block">
                    Account Holder
                  </small>
                  <span className="fw-semibold text-break">
                    {account?.holderName || "-"}
                  </span>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <div className="bg-white border rounded p-2 h-100">
                  <small className="text-muted d-block">
                    Bank Name
                  </small>
                  <span className="fw-semibold text-break">
                    {account?.bankName || "-"}
                  </span>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <div className="bg-white border rounded p-2 h-100">
                  <small className="text-muted d-block">
                    Account Number
                  </small>
                  <span className="fw-semibold text-break">
                    {account?.accNo || "-"}
                  </span>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <div className="bg-white border rounded p-2 h-100">
                  <small className="text-muted d-block">
                    IFSC Code
                  </small>
                  <span className="fw-semibold text-break">
                    {account?.ifscCode || "-"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          )}

          <div className="row">
            {/* Amount */}
            
            <div className="col-md-3 mb-3">
              <label className="form-label"> ₹({Number(currencyVal || 0).toFixed(2)}) </label>
               <input type="number" min={1} className="form-control" value={rupeeAmount} onChange={handleRupeeChange} placeholder="Enter INR Amount"/>             
            </div>

             <div className="col-md-3 mb-3">
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

            {/* Receipt Upload */}
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Receipt Screenshot
              </label>

              <div className="input-group">
                <input
                  type="file"
                  accept="image/*"
                  className={`form-control ${
                    errors.receipt
                      ? "is-invalid"
                      : ""
                  }`}
                  {...register("receipt", {
                    onChange: (e) => {
                      const file =
                        e.target.files?.[0];

                      if (!file) return;

                      if (preview) {
                        URL.revokeObjectURL(
                          preview
                        );
                      }

                      setPreview(
                        URL.createObjectURL(
                          file
                        )
                      );
                    },
                  })}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit"}
                </button>
              </div>

              {errors.receipt && (
                <div className="invalid-feedback d-block">
                  {errors.receipt.message}
                </div>
              )}

              {preview && (
                <div className="mt-3">
                  <img
                    src={preview}
                    alt="Receipt Preview"
                    className="img-thumbnail"
                    style={{
                      maxWidth: "200px",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadReceiptForm;