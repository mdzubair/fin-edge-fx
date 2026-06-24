
import { Link, useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { registerSchema } from "../../../validators";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../../../redux/slice/user";
import toast from "react-hot-toast";
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.users);
  const { register, handleSubmit, reset, formState: { errors }, } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema) as any,
  });

  const onSubmit = async (data: RegisterFormData) => {
    const payload = { firstName: data.firstName, lastName: data.lastName, email: data.email, phone: data.phone, password: data.password,};
    const result = await dispatch(registerUser(payload));
    if (registerUser.fulfilled.match(result)) {
      toast.success("Registraterd successfully");
      reset();
      navigate("/login");
    } else {
      toast.error(result.payload as string);
    }
  };


  return (
    <section className="signup-wrapper">

      {/* BACKGROUND GLOW */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">

          {/* LEFT SIDE */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="login-banner position-relative h-100">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
                alt="signup"
                className="img-fluid login-image"
              />

              <div className="banner-overlay"></div>

              <div className="overlay-content">

                <div className="glass-badge">
                  🚀 Start Trading Today
                </div>

                <h2>
                  Join FinEdgeFX
                </h2>

                <p>
                  Create your account and unlock powerful
                  trading, investment, and financial tools.
                </p>

                <div className="hero-stats">

                  <div className="stat-box">
                    <h3>100K+</h3>
                    <span>Users</span>
                  </div>

                  <div className="stat-box">
                    <h3>24/7</h3>
                    <span>Support</span>
                  </div>

                </div>

                <Link
                  to="/"
                  className="btn modern-btn"
                >
                  Back To Home
                </Link>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7 d-flex align-items-center justify-content-center position-relative">

            <div className="signup-card">

              {/* HEADER */}
              <div className="text-center mb-4">

                <div className="logo-wrapper">
                  <div className="logo-circle">
                    <img src={"./public/favicon.png"} height={90}/>
                  </div>
                </div>


                <h2 className="title">
                  Create Account
                </h2>

                <p className="subtitle">
                  Start your journey with FinEdgeFX
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit(onSubmit)}>

                {/* NAME */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">First Name</label>                   
                     <input type="text" className={`form-control modern-input ${errors.firstName ? "is-invalid" : "" }`} {...register("firstName")} placeholder="Enter first name"/>
                     <div className="invalid-feedback">{errors.firstName?.message} </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label">Last Name</label>
                    <input type="text" placeholder="Enter last name" className={`form-control modern-input ${errors.lastName ? "is-invalid" : "" }`} {...register("lastName")} />
                    <div className="invalid-feedback">{errors.lastName?.message}</div>
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Email</label>
                    <input type="email" placeholder="Enter your email" className={`form-control modern-input ${errors.email ? "is-invalid" : "" }`} {...register("email")}/>
                    <div className="invalid-feedback">{errors.email?.message}</div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" placeholder="Enter phone number" className={`form-control modern-input ${errors.phone ? "is-invalid" : "" }`} {...register("phone")}/>
                    <div className="invalid-feedback">{errors.phone?.message}</div>
                  </div>
                </div>

                {/* PASSWORD */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Password</label>
                    <input type="password" placeholder="Enter password" className={`form-control modern-input ${errors.password ? "is-invalid" : "" }`} {...register("password")} />
                     <div className="invalid-feedback">{errors.password?.message}</div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label"> Confirm Password </label>
                    <input type="password" placeholder="Confirm password" className={`form-control modern-input ${errors.confirmPassword ? "is-invalid" : "" }`} {...register("confirmPassword")}  />
                    <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                  </div>
                </div>

                {/* TERMS */}
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">

                  <div className="form-check">
                    {/* <input className="form-check-input" type="checkbox" id="terms"/>
                    <label className="form-check-label" htmlFor="terms">
                      I agree to Terms & Conditions
                    </label> */}
                  </div>

                  <Link to="/login" className="forgot-link" > Already Registered? </Link>
                </div>

                {/* BUTTON */}
                <button type="submit" className="btn signup-btn w-100"  disabled={loading} >
                  {loading ? "Registering..." : "Register"}
                </button>

              </form>

              {/* FOOTER */}
              <div className="text-center mt-4">
                <p className="footer-text mb-0">
                  Already have an account?{" "}

                  <Link
                    to="/login"
                    className="signup-link"
                  >
                    Login Now
                  </Link>
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* CSS */}
      <style>
        {`
        .signup-wrapper {
          position: relative;
          overflow: hidden;
          background: #020617;
        }

        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.3;
          z-index: 0;
        }

        .glow-1 {
          width: 350px;
          height: 350px;
          background: #2563eb;
          top: -120px;
          left: -100px;
        }

        .glow-2 {
          width: 400px;
          height: 400px;
          background: #7c3aed;
          bottom: -150px;
          right: -100px;
        }

        .login-banner {
          height: 100vh;
          overflow: hidden;
        }

        .login-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.08);
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              135deg,
              rgba(2, 6, 23, 0.88),
              rgba(15, 23, 42, 0.75)
            );
        }

        .overlay-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 60px;
        }

        .glass-badge {
          padding: 12px 22px;
          border-radius: 50px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          margin-bottom: 25px;
          backdrop-filter: blur(10px);
          font-size: 14px;
        }

        .overlay-content h2 {
          font-weight: 900;
          line-height: 1.05;
          color: #fff;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .overlay-content p {
          color: rgba(255,255,255,0.72);
          line-height: 1.9;
          font-size: 17px;
          max-width: 500px;
          margin-bottom: 35px;
        }

        .hero-stats {
          display: flex;
          gap: 18px;
          justify-content: center;
          margin-bottom: 35px;
        }

        .stat-box {
          padding: 18px 25px;
          border-radius: 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
        }

        .stat-box h3 {
          color: #fff;
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .stat-box span {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
        }

        .modern-btn {
          font-size:16px;
          height: 45px;
          padding: 13px 34px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
          );
          border: none;
          color: #fff;
          font-weight: 700;
          transition: 0.3s ease;
          box-shadow: 0 15px 35px rgba(37,99,235,0.35);
        }

        .modern-btn:hover {
          transform: translateY(-3px);
          color: #fff;
        }

        .signup-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 760px;
          padding: 45px;
          border-radius: 32px;
          background: linear-gradient(
            135deg,
            rgba(11, 27, 59, 0.92),
            rgba(31, 60, 136, 0.88)
          );
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(25px);
          box-shadow:
            0 25px 70px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.06);
          margin: 25px;
        }

        .logo-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
        }
         .logo-circle {
            width: 65px;
            height: 65px;
            border-radius: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #2563eb, #7c3aed);
            color: #fff;
            font-size: 24px;
            font-weight: 900;
            box-shadow: 0 20px 40px rgba(37, 99, 235, 0.35);
        }

        .title {
          color: #fff;
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .subtitle {
          color: rgba(255,255,255,0.65);
          font-size: 15px;
        }

        .form-label {
          color: rgba(255,255,255,0.85);
          margin-bottom: 10px;
          font-weight: 500;
        }

        .modern-input {
          height: 45px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.06);
          color: #fff;
          padding-left: 52px;
          font-size: 15px;
          transition: 0.3s ease;
        }

        .modern-input::placeholder {
          color: rgba(255,255,255,0.4);
        }

        .modern-input:focus {
          background: rgba(255,255,255,0.1);
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59,130,246,0.15);
          color: #fff;
        }

        .form-check-label {
          color: rgba(255,255,255,0.72);
        }

        .form-check-input {
          background-color: transparent;
          border: 1px solid rgba(255,255,255,0.3);
        }

        .form-check-input:checked {
          background-color: #2563eb;
          border-color: #2563eb;
        }

        .forgot-link,
        .signup-link {
          color: #93c5fd;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .forgot-link:hover,
        .signup-link:hover {
          color: #fff;
        }

        .signup-btn {
          height: 45px;
          border: none;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
          );
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          transition: 0.4s ease;
          box-shadow: 0 18px 40px rgba(59,130,246,0.3);
        }

        .signup-btn:hover {
          transform: translateY(-3px);
          color: #fff;
        }

        .footer-text {
          color: rgba(255,255,255,0.65);
        }

        @media (max-width: 991px) {
          .signup-card {
            padding: 30px 20px;
            margin: 15px;
          }
        }

        @media (max-width: 576px) {
          .title {
            font-size: 28px;
          }

          .hero-stats {
            flex-direction: column;
          }

          .overlay-content h1 {
            font-size: 42px;
          }
        }
        `}
      </style>

    </section>
  );
};

export default Signup;