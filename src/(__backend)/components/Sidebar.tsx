import { Link, NavLink } from "react-router-dom";
import "../../assets/backend/sidebar.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
interface SidebarProps {
  sidebarOpen: boolean;
}
function Sidebar({sidebarOpen}:SidebarProps) {
  const auth = useSelector((state:RootState)=>state.auth)
  
  const menus = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: "fas fa-gauge-high",
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: "fas fa-users",
    },
    {
      title: "Trade Settlements",
      path: "/admin/trade-settlements",
      icon: "fas fa-arrow-right-arrow-left",
    },
    {
      title: "Deposit Funds",
      path: "/admin/deposit-funds",
      icon: "fas fa-money-bill-transfer",
    },
    {
      title: "Withdraw",
      path: "/admin/withdraw",
      icon: "fas fa-wallet",
    },
    {
      title: "Manage Bank",
      path: "/admin/manage-bank",
      icon: "fas fa-building-columns",
    },
    {
      title: "Offer",
      path: "/admin/offer",
      icon: "fas fa-gift",
    },
    {
      title: "Trading Platform",
      path: "/admin/meta-app-password",
      icon: "fas fa-chart-line",
    },
    {
      title: "Help & Support",
      path: "/admin/help-and-support",
      icon: "fas fa-headset",
    },
  ];

  return (
    <nav id="sidebar"  className={`sidebar ${sidebarOpen ? "show-sidebar" : "hide-sidebar"}`} >
      <div className="sidebar-content">
        <Link to="/admin" className="sidebar-brand text-center">
        </Link>
        <div className="py-4"></div>

        <ul className="sidebar-nav">
          <li className="sidebar-item text-center " style={{borderRadius:"50px"}}>
            <img src={"/favicon.png"} alt="logo" className="mb-3" style={{ width: "60px", background:"#fff", borderRadius:"10px" }} />
          </li>
          {menus
            .filter((menu) => {
              // Hide Users menu if userType is not 1
              if (menu.path === "/admin/users" || menu.path === "/admin/offer") {
                return auth?.user?.userType === 1;
              }
              return true;
            })
            .map((menu) => (
              <li key={menu.path} className="sidebar-item">
                <NavLink
                  to={menu.path}
                  end={menu.path === "/admin"}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? "activeLink" : ""}`
                  }
                >
                  <i className={`${menu.icon} me-2`} />
                  <span>{menu.title}</span>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;