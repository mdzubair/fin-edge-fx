
import { Images } from "../../constants-image";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const location = useLocation();

  // STICKY NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // SMOOTH SCROLL HASH
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <header
        className={`main-header ${
          sticky ? "sticky-header" : ""
        }`}
      >
        <div className="container nav-outer">
          <nav className="navbar navbar-expand-lg custom-navbar">
            {/* LOGO */}
            <Link
              className="navbar-brand brand-logo"
              to="/"
            >
              <img
                src={"/fin-edge-logo.png"}
                alt="logo"
                className="img-fluid brand-img"
               style={{background:"#fff"}}/>
            </Link>

            {/* TOGGLE */}
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* MENU */}
            <div
              className="collapse navbar-collapse menu-list"
              id="navbarTogglerDemo02"
            >
              {/* NAV LINKS */}
              <ul className="navbar-nav ms-auto align-items-lg-center menu">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/register?q=quickstart"
                  >
                    Quickstart
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login?q=trading"
                  >
                    Trading
                  </Link>
                </li>

                {/* SCROLL TO SECTION */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/#platforms"
                  >
                    Platforms
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active-btn"
                    to="/register"
                  >
                    Start Trading
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link broker-btn"
                    to="/broker-login?q=b"
                  >
                    Broker Login
                  </Link>
                </li>
              </ul>

              {/* RIGHT SIDE */}
              <div className="callus-box">
                <ul className="right-side mb-0">
                  <li className="icon-box">
                    <img
                      src={Images.contactImg}
                      alt="contact"
                      className="img-fluid callusimg"
                    />
                  </li>

                  <li className="contact-info">
                    <span>
                      Call us anytime
                    </span>

                    <a
                      href="tel:+6138376628"
                      className="contact-a"
                    >
                      +613 8376 628
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* CSS */}
      <style>
        {`
        html {
          scroll-behavior: smooth;
        }

        .main-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          padding: 18px 0;
          transition: 0.4s ease;
          background: transparent;
        }

        .sticky-header {
          background: rgba(2, 6, 23, 0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 10px 40px rgba(0,0,0,0.25);
          padding: 12px 0;
        }

        .custom-navbar {
          padding: 14px 24px;
          border-radius: 24px;
          background: rgba(11, 27, 59, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 15px 40px rgba(0,0,0,0.25),
            inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .brand-logo {
          margin-right: 25px;
        }

        .brand-img {
          max-height: 52px;
          object-fit: contain;
        }

        .menu {
          gap: 8px;
        }

        .nav-link {
          color: rgba(255,255,255,0.72) !important;
          font-size: 15px;
          font-weight: 500;
          padding: 12px 18px !important;
          border-radius: 14px;
          transition: 0.3s ease;
        }

        .nav-link:hover {
          color: #fff !important;
          background: rgba(255,255,255,0.06);
        }

        .active-btn {
          background: linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
          );
          color: #fff !important;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(37,99,235,0.35);
        }

        .active-btn:hover {
          transform: translateY(-2px);
        }

        .broker-btn {
          border: 1px solid rgba(255,255,255,0.12);
        }

        .callus-box {
          margin-left: 20px;
          padding-left: 20px;
          border-left: 1px solid rgba(255,255,255,0.08);
        }

        .right-side {
          display: flex;
          align-items: center;
          gap: 14px;
          list-style: none;
          padding: 0;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
          );
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(37,99,235,0.3);
        }

        .callusimg {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
        }

        .contact-info span {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }

        .contact-a {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .contact-a:hover {
          color: #93c5fd;
        }

        .custom-toggler {
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          padding: 0 12px;
          box-shadow: none !important;
        }

        .custom-toggler span {
          width: 100%;
          height: 2px;
          background: #fff;
          border-radius: 10px;
        }

        @media (max-width: 991px) {

          .main-header {
            padding: 12px 0;
          }

          .custom-navbar {
            padding: 16px;
          }

          .menu-list {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.08);
          }

          .menu {
            gap: 10px;
          }

          .nav-link {
            width: 100%;
            display: block;
          }

          .callus-box {
            margin-left: 0;
            margin-top: 20px;
            padding-left: 0;
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.08);
            padding-top: 20px;
          }

          .right-side {
            justify-content: flex-start;
          }
        }

        @media (max-width: 576px) {

          .custom-navbar {
            border-radius: 18px;
            padding: 14px;
          }

          .brand-img {
            max-height: 42px;
          }

          .nav-link {
            font-size: 14px;
            padding: 10px 14px !important;
          }

          .contact-a {
            font-size: 14px;
          }

          .icon-box {
            width: 42px;
            height: 42px;
          }
        }
        `}
      </style>
    </>
  );
};

export default Navbar;