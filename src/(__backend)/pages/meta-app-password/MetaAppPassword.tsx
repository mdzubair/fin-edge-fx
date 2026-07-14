import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { credentialSchema } from "../../../validators";
import { saveCredentials } from "../../../redux/slice/generate-password";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import type { FormPayloadData } from "../../../interfaces";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function MetaAppPassword() {
  const dispatch = useDispatch<AppDispatch>();
  const { userId = "" } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormPayloadData>({
    resolver: yupResolver(credentialSchema) as any,
    defaultValues: {
      username: "",
      password: "",
      server: "",
    },
  });

  const generateUsername = () => {
    const username = `${Math.floor(
      1000000000 + Math.random() * 9000000000
    )}`;

    setValue("username", username, {
      shouldValidate: true,
    });
  };

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    let password = "";

    for (let i = 0; i < 10; i++) {
      password += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setValue("password", password, {
      shouldValidate: true,
    });
  };

  const onSubmit = async (data: FormPayloadData) => {
    try {
      await dispatch(
        saveCredentials({
          userId,
          data,
        })
      ).unwrap();

      toast.success("Credentials saved successfully");

      reset({
        username: "",
        password: "",
        server: "",
      });
      navigate(`/admin/user/${userId}`);
    } catch (error: any) {
      toast.error(error || "Failed to save credentials");
    }
  };
const isUserPage = !!userId?.trim();

return (
  <div className="container-fluid">
    <div
      className={`row g-4 mb-4 ${
        !isUserPage ? "justify-content-center" : ""
      }`}
    >
      {isUserPage && (
      <div className="col-lg-6">
        <div className="card shadow-sm h-100">
          <div className="card-header">
            <h5 className="mb-0">App Credentials</h5>
            
          </div>

          <div className="card-body">
            <p className="text-muted">You will need these details to log in to MetaTrader. If you forget your Metatrader password, you can change It at any time. </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Username</label>

                <div className="input-group">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    {...register("username")}
                  />

                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={generateUsername}
                  >
                    Generate
                  </button>
                </div>

                {errors.username && (
                  <div className="invalid-feedback d-block">
                    {errors.username.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>

                <div className="input-group">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password")}
                  />

                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={generatePassword}
                  >
                    Generate
                  </button>
                </div>

                {errors.password && (
                  <div className="invalid-feedback d-block">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Server</label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.server ? "is-invalid" : ""
                  }`}
                  {...register("server")}
                />

                {errors.server && (
                  <div className="invalid-feedback d-block">
                    {errors.server.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary"
              >
                Save Credentials
              </button>
            </form>
          </div>
        </div>
      </div>
      )}
      {/* Android App Card */}      
      <div className={isUserPage ? "col-lg-6" : "col-lg-8"}>
        <div className="card shadow-sm h-100">
          <div className="card-header">
            <h5 className="mb-0">Meta Android App</h5>
          </div>

          <div className="card-body text-center">
            <i className="fab fa-android fa-4x text-success mb-3"></i>

            <h6>Download Android Application</h6>

            <p className="text-muted">
              Install the Meta Android App on your device.
            </p>

            <a
              href="/default/meta-app.apk"
              className="btn btn-outline-success"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-download me-2"></i>
              Download App
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Videos */}
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-header">
            <h5 className="mb-0">Android</h5>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center" style={{ minHeight: "500px" }}>
            <video className="rounded" style={{ height: "450px", maxWidth: "100%", objectFit: "contain", }} controls>
              <source src="/default/android.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-header">
            <h5 className="mb-0">IOS</h5>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center" style={{ minHeight: "500px" }}>
            <video className="rounded" style={{ height: "450px", maxWidth: "100%", objectFit: "contain", }} controls>
              <source src="/default/trade-us.mp4" type="video/mp4" />
            </video>
          </div>         
        </div>
      </div>
    </div>
  </div>
);
}

export default MetaAppPassword;