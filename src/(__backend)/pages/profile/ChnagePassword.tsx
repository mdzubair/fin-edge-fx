import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { changePasswordSchema } from "../../../validators";
import type { AppDispatch, RootState } from "../../../redux/store";
import { updatePassword } from "../../../redux/slice/user";

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const PASSWORD_FIELDS = [
  {
    name: "currentPassword",
    label: "Current Password",
  },
  {
    name: "newPassword",
    label: "New Password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
  },
] as const;

function ChangePassword() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state:RootState)=>state.auth);
  const userId = auth?.user?._id;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = async ({
    currentPassword,
    newPassword,
  }: FormData) => {
    const result = await dispatch(
      updatePassword({
        userId,
        currentPassword,
        newPassword,
      })
    );

    if (updatePassword.fulfilled.match(result)) {
      toast.success("Password changed successfully");
      reset();
      return;
    }

    toast.error(
      (result.payload as string) ||
        "Failed to change password"
    );
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="card shadow-sm" style={{ width: 500 }}>
        <div className="card-body">
          <h5 className="card-title mb-4">
            Change Password
          </h5>

          <form onSubmit={handleSubmit(onSubmit)}>
            {PASSWORD_FIELDS.map(({ name, label }) => (
              <div className="mb-3" key={name}>
                <label
                  htmlFor={name}
                  className="form-label"
                >
                  {label}
                </label>

                <input
                  id={name}
                  type="password"
                  className={`form-control ${
                    errors[name] ? "is-invalid" : ""
                  }`}
                  {...register(name)}
                />

                {errors[name] && (
                  <div className="invalid-feedback">
                    {errors[name]?.message}
                  </div>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="btn btn-outline-primary w-100"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Saving..."
                : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;