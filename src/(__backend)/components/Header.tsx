import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { logoutUser } from "../../redux/slice/auth";
import { updateUsdPrice } from "../../redux/slice/currency";
interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Header({sidebarOpen, setSidebarOpen }: HeaderProps) {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state:RootState)=>state.auth);
  const handleLogout = async () => {
    await dispatch(logoutUser() as any).unwrap();
    navigate("/login", {replace: true});
  };

useEffect(() => {
  const scheduleNextRun = () => {
    const now = new Date();
    const nextRun = new Date();
    nextRun.setHours(0, 0, 0, 100);
    if (now >= nextRun) {
      nextRun.setDate(nextRun.getDate() + 1);
    }

    const delay = nextRun.getTime() - now.getTime();

    const timer = setTimeout(() => {
      dispatch(updateUsdPrice());
      scheduleNextRun();
    }, delay);

    return timer;
  };

  const timer = scheduleNextRun();
  return () => clearTimeout(timer);
}, [dispatch]);



  return (
    <nav className="navbar navbar-expand navbar-bg">
      {/* Sidebar Toggle */}
      <NavLink
        to="#"
        className="sidebar-toggle"
         style={{
          marginLeft: window.innerWidth <= 768
            ? (sidebarOpen ? "16rem" : "1rem")
            : "",
          transition: "margin-left 0.1s ease",
          zIndex: 1050,
  }}
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <i className="hamburger align-self-center"></i>
      </NavLink>


      <div className="navbar-collapse collapse">
        
        <ul className="navbar-nav navbar-align">
          {/* Wallet Balance */}
          {auth?.user?.userType==0 && (
             <li className="nav-item me-3">
              <div className="d-flex align-items-center bg-light px-3 py-2 rounded shadow-sm">
                <i className="fas fa-wallet text-success me-2"></i>
                <span className="fw-semibold">
                  ${auth?.user?.wallet ?? 0}
                </span>
              </div>
            </li>
          )}
         
          <li className="nav-item dropdown">
            <Link
              className="nav-icon dropdown-toggle d-inline-block d-sm-none"
              to={""}
              data-bs-toggle="dropdown"
            >
              <i className="fas fa-cog"></i>
            </Link>

            <Link
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              to={""}
              data-bs-toggle="dropdown"
            >
              <img
                src={`${API_URL}/public/profile/${auth?.user?.profile}`}
                className="avatar img-fluid rounded me-1"
                alt="Admin"
              />
              <span className="text-dark">{auth && auth?.user?.firstName} {auth && auth?.user?.lastName}</span>
            </Link>

            <div className="dropdown-menu dropdown-menu-end">
              <Link
                className="dropdown-item"
                to="/admin/profile"
              >
                <i className="fas fa-user me-2"></i>
                Profile
              </Link>

              <div className="dropdown-divider"></div>

              <Link
                className="dropdown-item"
                to="/admin/change-password"
              >
                <i className="fas fa-key me-2"></i>
                Change Password
              </Link>

              <div className="dropdown-divider"></div>

              <button
                type="button"
                className="dropdown-item"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt me-2"></i>
                Logout
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;