import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginSchema } from "../../../validators/index";
import { loginUser } from "../../../redux/slice/auth";
import type { AppDispatch, RootState,} from "../../../redux/store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}


const Login = () => {
const dispatch = useDispatch<AppDispatch>();
const navigate = useNavigate();
const { loading } = useSelector((state: RootState) => state.auth );
const { register, handleSubmit, formState: { errors },} = useForm<LoginFormData>({
  resolver: yupResolver(loginSchema),
});

const onSubmit = async ( data: LoginFormData ) => {
    const result = await dispatch(loginUser(data));
      if (loginUser.fulfilled.match(result)) {
        toast.success("Login Successful");
        navigate("/admin");
      } else {
        toast.error(result.payload as string);
      }
    };
  return (
    <section className="login-wrapper">

      {/* BACKGROUND GLOW */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">

          {/* LEFT SIDE */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="login-banner position-relative h-100">

              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="login"
                className="img-fluid login-image"
              />

              <div className="banner-overlay"></div>

              <div className="overlay-content">

                <div className="glass-badge">
                  🚀 Secure Trading Platform
                </div>

                <h2>
                  Welcome Back <br />
                  FinEdgeFX
                </h2>

                <p>
                  Access your dashboard, manage investments,
                  and continue your financial journey with confidence.
                </p>

                <div className="hero-stats">

                  <div className="stat-box">
                    <h3>100K+</h3>
                    <span>Active Users</span>
                  </div>

                  <div className="stat-box">
                    <h3>24/7</h3>
                    <span>Support</span>
                  </div>

                  <div className="stat-box">
                    <h3>99.9%</h3>
                    <span>Secure</span>
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
          <div className="col-lg-6 d-flex align-items-center justify-content-center position-relative">

            <div className="login-card">

              {/* HEADER */}
              <div className="text-center mb-5">

                 <div className="logo-wrapper">
                  <div className="logo-circle">
                    {/* FX */}
                    <img src={"./public/favicon.png"} height={90}/>
                  </div>
                </div>

                <h2 className="title">
                  Login Account
                </h2>

                <p className="subtitle">
                  Sign in to continue trading
                </p>

              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit(onSubmit)}>

                {/* EMAIL */}
                <div className="mb-4">
                  <label className="form-label"> Email Address</label>
                  <div className="input-group-modern">
                    <span className="input-icon"> ✉</span>
                    <input type="email" placeholder="Enter your email" className={`form-control modern-input ${ errors.email ? "is-invalid" : "" }`} {...register("email")}/>
                  </div>
                  <div className="invalid-feedback">{errors.email?.message}</div>
                </div>

                {/* PASSWORD */}
                <div className="mb-3">
                  <label className="form-label"> Password </label>
                  <div className="input-group-modern">
                    <span className="input-icon"> 🔒</span>
                    <input type="password" placeholder="Enter your password" className={`form-control modern-input ${ errors.password ? "is-invalid" : "" }`} {...register("password")}/>
                  </div>
                  <div className="invalid-feedback">{errors.password?.message}</div>
                </div>

                {/* REMEMBER */}
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">

                  <div className="form-check">

                    {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="remember"
                    >
                      Remember me
                    </label> */}

                  </div>

                  {/* <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link> */}

                </div>

                {/* BUTTON */}
                <button type="submit" className="btn login-btn w-100"  disabled={loading} >
                  Login Now
                </button>

              </form>


              {/* FOOTER */}
              <div className="text-center mt-4">

                <p className="footer-text mb-0">
                  Don&apos;t have an account?{" "}

                  <Link
                    to="/register"
                    className="signup-link"
                  >
                    Register Now
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
        .login-wrapper {
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
          top: -100px;
          left: -100px;
        }

        .glow-2 {
          width: 400px;
          height: 400px;
          background: #7c3aed;
          bottom: -120px;
          right: -120px;
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
              rgba(2, 6, 23, 0.9),
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
          padding: 70px;
        }

        .glass-badge {
          padding: 12px 22px;
          border-radius: 50px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 14px;
          margin-bottom: 28px;
        }

        .overlay-content h2 {
          font-weight: 900;
          line-height: 1.05;
          color: #fff;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .overlay-content p {
          max-width: 550px;
          color: rgba(255,255,255,0.72);
          line-height: 1.9;
          font-size: 17px;
          margin-bottom: 40px;
        }

        .hero-stats {
          display: flex;
          gap: 18px;
          justify-content: center;
          margin-bottom: 35px;
          flex-wrap: wrap;
        }

        .stat-box {
          padding: 18px 24px;
          border-radius: 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          min-width: 130px;
        }

        .stat-box h3 {
          color: #fff;
          font-size: 28px;
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

        .login-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 500px;
          padding: 45px;
          border-radius: 32px;
          background: linear-gradient(
            135deg,
            rgba(11, 27, 59, 0.95),
            rgba(31, 60, 136, 0.88)
          );
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(25px);
          box-shadow:
            0 25px 70px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.06);
          margin: 20px;
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

        .input-group-modern {
          position: relative;
        }

        .input-icon {
          position: absolute;
          top: 50%;
          left: 18px;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.55);
          z-index: 2;
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

        .login-btn {
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

        .login-btn:hover {
          transform: translateY(-3px);
          color: #fff;
        }

        .divider {
          position: relative;
          text-align: center;
          margin: 30px 0;
        }

        .divider::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        .divider span {
          position: relative;
          z-index: 2;
          background: rgba(16,32,74,1);
          padding: 0 14px;
          color: rgba(255,255,255,0.45);
          font-size: 13px;
        }

        .social-login {
          display: flex;
          gap: 15px;
        }

        .social-btn {
          flex: 1;
          height: 55px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.05);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: 0.3s ease;
        }

        .social-btn img {
          width: 20px;
          height: 20px;
        }

        .social-btn:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .footer-text {
          color: rgba(255,255,255,0.65);
        }

        @media (max-width: 991px) {
          .login-card {
            padding: 35px 25px;
            margin: 15px;
          }
        }

        @media (max-width: 576px) {

          .title {
            font-size: 28px;
          }

          .social-login {
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

export default Login;