import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import type { AppDispatch, RootState } from "../../../redux/store";
import type { ProfileFormData } from "../../../interfaces";
import { profileUpdateSchema } from "../../../validators";
import { getUserById, updateProfile } from "../../../redux/slice/user";


function ProfileUpdateForm() {
  const dispatch = useDispatch<AppDispatch>();
  const {user, loading } = useSelector((state: RootState) => state.users);
  const auth = useSelector((state:RootState)=>state.auth);
  const userId = auth?.user?._id;
   useEffect(() => {
      if (userId) {
        dispatch(getUserById(userId));
      }
    }, [dispatch, userId]);

  // const user = useSelector((state: RootState) => state.auth.user );

  const { register, handleSubmit, reset, formState: { errors },} = useForm<ProfileFormData>({
    resolver: yupResolver(profileUpdateSchema) as any,
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", address: "", city: "", state: "", country: "", zip: "",},
  });

  useEffect(() => {
    if (user) {
      reset({ firstName: user.firstName || "", lastName: user.lastName || "", email: user.email || "", phone: user.phone || "", address: user.address || "", city: user.city || "", state: user.state || "", country: user.country || "", zip: user.zip || "", });
    }
  }, [user, reset]);

  const onSubmit = async (data: ProfileFormData) => {
    if (!user?._id) return;
    const result = await dispatch( updateProfile({ userId: user._id, data,}));
    if (updateProfile.fulfilled.match(result)) {
      toast.success("Profile updated successfully");
    } else {
      toast.error(result.payload as string);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "50vh" }}
    >
      <div className="card mb-4 w-100" style={{ maxWidth: "900px" }}>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label">
                  First Name
                </label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  placeholder="First name"
                  {...register("firstName")}
                />

                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">
                  Last Name
                </label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  placeholder="Last name"
                  {...register("lastName")}
                />

                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="mb-3  col-md-6">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  readOnly
                  {...register("email")}
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">
                  Phone
                </label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.phone ? "is-invalid" : ""
                  }`}
                  placeholder="Phone Number"
                  {...register("phone")}
                />

                <div className="invalid-feedback">
                  {errors.phone?.message}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Address
              </label>

              <input
                type="text"
                className={`form-control ${
                  errors.address ? "is-invalid" : ""
                }`}
                placeholder="Address"
                {...register("address")}
              />

              <div className="invalid-feedback">
                {errors.address?.message}
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-md-3">
                <label className="form-label">
                  City
                </label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.city ? "is-invalid" : ""
                  }`}
                  {...register("city")}
                />

                <div className="invalid-feedback">
                  {errors.city?.message}
                </div>
              </div>

              <div className="mb-3 col-md-3">
                <label className="form-label">
                  State
                </label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.state ? "is-invalid" : ""
                  }`}
                  {...register("state")}
                />

                <div className="invalid-feedback">
                  {errors.state?.message}
                </div>
              </div>

              <div className="mb-3 col-md-3">
                <label className="form-label">
                  Country
                </label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.country ? "is-invalid" : ""
                  }`}
                  {...register("country")}
                />

                <div className="invalid-feedback">
                  {errors.country?.message}
                </div>
              </div>

              <div className="mb-3 col-md-3">
              <label className="form-label">
                Zip Code
              </label>

              <input
                type="text"
                className={`form-control ${
                  errors.zip ? "is-invalid" : ""
                }`}
                {...register("zip")}
              />

              <div className="invalid-feedback">
                {errors.zip?.message}
              </div>
            </div>
            </div>

            

            <button
              type="submit"
              className="btn btn-outline-primary"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;