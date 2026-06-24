import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { offerSchema } from "../../../validators";
import type { AppDispatch, RootState } from "../../../redux/store";
import { storeOffer, offerList } from "../../../redux/slice/offer";
import { userList } from "../../../redux/slice/user";

interface OfferFormData {
  offerNote: string;
  amount: number;
  userType: "all" | "selected";
  userId: string[];
  offerDate: string;
  status: 0 | 1 | 2 | 3;
}

const defaultValues: OfferFormData = {
  offerNote: "",
  amount: 0,
  userType: "all",
  userId: [],
  offerDate: "",
  status: 1,
};

function OfferForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [submitting, setSubmitting] = useState(false);

  const { users } = useSelector(
    (state: RootState) => state.users
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<OfferFormData>({
    resolver: yupResolver(offerSchema) as any,
    defaultValues,
  });

  useEffect(() => {
    dispatch(userList());
  }, [dispatch]);

  const userType = watch("userType");

  const onSubmit = async (
    data: OfferFormData
  ) => {
    try {
      setSubmitting(true);

      const payload = {
        offerNote: data.offerNote.trim(),
        amount: Number(data.amount),
        offerDate: data.offerDate,
        status: Number(data.status),
        applyTo: data.userType,
        userId:
          data.userType === "all"
            ? []
            : data.userId,
      };

      await dispatch(
        storeOffer(payload)
      ).unwrap();

      await dispatch(offerList()).unwrap();

      reset(defaultValues);

      toast.success(
        "Offer created successfully"
      );
    } catch (error: any) {
      toast.error(
        error?.message ||
          error ||
          "Failed to create offer"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h5 className="mb-0">
          Create Offer
        </h5>
      </div>

      <div className="card-body">
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row">
            {/* Offer Note */}
            <div className="col-12 mb-3">
              <label className="form-label">
                Offer Note
              </label>

              <textarea
                rows={4}
                className={`form-control ${
                  errors.offerNote
                    ? "is-invalid"
                    : ""
                }`}
                {...register("offerNote")}
              />

              <div className="invalid-feedback">
                {errors.offerNote?.message}
              </div>
            </div>

            {/* Amount */}
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Amount
              </label>

              <input
                type="number"
                step="0.01"
                className={`form-control ${
                  errors.amount
                    ? "is-invalid"
                    : ""
                }`}
                {...register("amount", {
                  valueAsNumber: true,
                })}
              />

              <div className="invalid-feedback">
                {errors.amount?.message}
              </div>
            </div>

            {/* Apply To */}
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Apply To
              </label>

              <select
                className="form-select"
                {...register("userType")}
              >
                <option value="all">
                  All Users
                </option>
                <option value="selected">
                  Selected Users
                </option>
              </select>
            </div>

            {/* Users */}
            {userType === "selected" && (
              <div className="col-md-12 mb-3">
                <label className="form-label">
                  Select Users
                </label>

                <select
                  multiple
                  size={8}
                  className={`form-select ${
                    errors.userId
                      ? "is-invalid"
                      : ""
                  }`}
                  {...register("userId")}
                >
                  {users?.map((user: any) => (
                    <option
                      key={user._id}
                      value={user._id}
                    >
                      {user.firstName}{" "}
                      {user.lastName}
                    </option>
                  ))}
                </select>

                <div className="invalid-feedback">
                  {errors.userId?.message as string}
                </div>
              </div>
            )}

            {/* Expiry Date */}
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Offer Expiry Date
              </label>

              <input
                type="date"
                min={
                  new Date()
                    .toISOString()
                    .split("T")[0]
                }
                className={`form-control ${
                  errors.offerDate
                    ? "is-invalid"
                    : ""
                }`}
                {...register("offerDate")}
              />

              <div className="invalid-feedback">
                {errors.offerDate?.message}
              </div>
            </div>

            {/* Status */}
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Status
              </label>

              <select
                className="form-select"
                {...register("status", {
                  valueAsNumber: true,
                })}
              >
                <option value={0}>
                  Pending
                </option>
                <option value={1}>
                  Active
                </option>
                <option value={2}>
                  Expired
                </option>
                <option value={3}>
                  Rejected
                </option>
              </select>
            </div>

            {/* Submit */}
            <div className="col-12 text-center mt-3">
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-outline-primary px-4"
              >
                {submitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Saving...
                  </>
                ) : (
                  "Save Offer"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OfferForm;