import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import type { AppDispatch, RootState } from "../../../redux/store";
import { accountSchema } from "../../../validators";
import { addAccount, fetchAccountByUserId } from "../../../redux/slice/account";

interface Props {
  userId: string;
}

function BankManagementForm({ userId }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector(
    (state: RootState) => state.account
  );

 interface AccountFormData {
    userId:string;
    bankName: string;
    holderName: string;
    accNo: string;
    ifscCode: string;
    upi: string;
    note?: string;
    qr?: FileList;
}
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AccountFormData>({
    resolver: yupResolver(accountSchema) as any,
    defaultValues: {
      userId,
      bankName: "",
      holderName: "",
      accNo: "",
      ifscCode: "",
      upi: "",
      note: "",
    },
  });



const onSubmit = async (
  data: AccountFormData
) => {
  try {
    const formData = new FormData();

    formData.append("userId", userId);
    formData.append("bankName", data.bankName);
    formData.append("holderName", data.holderName);
    formData.append("accNo", data.accNo);
    formData.append("ifscCode", data.ifscCode);
    formData.append("upi", data.upi || "");
    formData.append("note", data.note || "");

    if (data.qr?.[0]) {
      formData.append("qr", data.qr[0]);
    }

    await dispatch(addAccount(formData)).unwrap();
    await dispatch(fetchAccountByUserId(userId)).unwrap();

    toast.success(
      "Bank account added successfully"
    );

    reset({
      bankName: "",
      holderName: "",
      accNo: "",
      ifscCode: "",
      upi: "",
      note: "",
    });
  } catch (error: any) {
    toast.error(
      error?.message ||
        "Failed to add bank account"
    );
  }
};

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header">
        <h5 className="mb-0">
          Add Bank Account
        </h5>
      </div>

      <div className="card-body">
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row g-3">

            {/* Bank Name */}
            <div className="col-md-6">
              <label className="form-label">
                Bank Name
              </label>

              <input
                type="text"
                className={`form-control ${
                  errors.bankName
                    ? "is-invalid"
                    : ""
                }`}
                {...register("bankName")}
                placeholder="Bank Name"
              />

              <div className="invalid-feedback">
                {
                  errors.bankName
                    ?.message
                }
              </div>
            </div>

            {/* Holder Name */}
            <div className="col-md-6">
              <label className="form-label">
                Account Holder Name
              </label>

              <input
                type="text"
                className={`form-control ${
                  errors.holderName
                    ? "is-invalid"
                    : ""
                }`}
                {...register("holderName")}
                placeholder="Account Holder name"
              />

              <div className="invalid-feedback">
                {
                  errors.holderName
                    ?.message
                }
              </div>
            </div>

            {/* Account Number */}
            <div className="col-md-6">
              <label className="form-label">
                Account Number
              </label>

              <input
                type="text"
                className={`form-control ${
                  errors.accNo
                    ? "is-invalid"
                    : ""
                }`}
                {...register("accNo")}
                placeholder="XXXXXXXXXXXX"
              />

              <div className="invalid-feedback">
                {
                  errors.accNo?.message
                }
              </div>
            </div>

            {/* IFSC */}
            <div className="col-md-6">
              <label className="form-label">
                IFSC Code
              </label>

              <input
                type="text"
                className={`form-control ${
                  errors.ifscCode
                    ? "is-invalid"
                    : ""
                }`}
                {...register("ifscCode")}
                placeholder="ABC0001234"
              />

              <div className="invalid-feedback">
                {
                  errors.ifscCode
                    ?.message
                }
              </div>
            </div>

            {/* UPI */}
            <div className="col-md-6">
              <label className="form-label">
                UPI ID
              </label>

              <input
                type="text"
                className={`form-control ${
                  errors.upi
                    ? "is-invalid"
                    : ""
                }`}
                {...register("upi")}
                placeholder="example@upi"
              />

              <div className="invalid-feedback">
                {errors.upi?.message}
              </div>
            </div>

            {/* QR Upload */}
            {/* <div className="col-md-6">
              <label className="form-label">
                QR Image
              </label>

              <input
                type="file"
                accept="image/*"
                className="form-control"
                {...register("qr")}
              />
            </div> */}

            <div className="col-md-6">
                <label className="form-label fw-semibold">
                    QR Code Image
                </label>

                <input
                    type="file"
                    accept="image/*"
                    className={`form-control ${
                    errors.qr ? "is-invalid" : ""
                    }`}
                    {...register("qr")}
                />

                {errors.qr && (
                    <div className="invalid-feedback">
                    {String(errors.qr.message)}
                    </div>
                )}
                </div>

            {/* Notes */}
            <div className="col-md-12">
              <label className="form-label">
                Notes
              </label>

              <textarea
                rows={3}
                className="form-control"
                {...register("note")}
                placeholder="Additional information..."
              />
            </div>

            {/* Submit */}
            <div className="col-md-12 text-end">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-outline-primary"
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Saving...
                  </>
                ) : (
                  "Add Account"
                )}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default BankManagementForm;