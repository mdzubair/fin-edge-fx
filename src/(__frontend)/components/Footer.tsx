import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="container py-5">

        <div className="row">

          {/* ================= LOGO & CONTACT ================= */}
          <div className="col-lg-4 col-md-6 mb-4">
            <img src={"/fin-edge-logo.png"} alt="logo" className="mb-3" style={{ maxWidth: "180px", background:"#fff" }} />
            <ul className="footer-links list-unstyled">
              <li>
                <a href="#">
                  FinEdgeFx mission is to create the best trading experience for retail and institutional clients alike, allowing traders to focus more on their trading. Built by traders for traders FinEdgeFx is dedicated to offering superior spreads, execution and service.
                </a>
              </li>
            </ul>
          </div>

          {/* ================= LINKS 1 ================= */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-title">Forex Trading</h6>
            <ul className="footer-links list-unstyled">
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/accounts-overview">Accounts Overview</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/open-account">Open An Account</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/launch-web-trader">Launch Web Trader</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/cybersecurity-scams">Cybersecurity and Scams</Link></li>
            </ul>
          </div>

          {/* ================= LINKS 2 ================= */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-title">Trading Specifications</h6>
            <ul className="footer-links list-unstyled">
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/spreads-commissions">Spreads and Commissions</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/range-of-products">Range of Products</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/trading-hours">Trading Hours</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/funding">Funding</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/withdrawal">Withdrawal</Link></li>
            </ul>
          </div>

          {/* ================= LINKS 3 ================= */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-title">About FinEdge</h6>
            <ul className="footer-links list-unstyled">
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/help-center">Help Center</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/">Why FinEdgeFx</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/regulation">Regulation</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/legal-documents">Legal Documents</Link></li>
              <li><Link onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="footer-bottom text-center mt-4 pt-3">
          <p className="mb-0">
            © 2026 FinEdgeFx. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .footer-modern {
          background: linear-gradient(135deg, #0b1b3b, #1f3c88);
          color: #fff;
        }

        .footer-title {
          font-weight: 600;
          margin-bottom: 15px;
          font-size: 16px;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links a {
          color: #ccc;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #28c785;
          padding-left: 5px;
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          gap: 10px;
        }

        .footer-contact i {
          color: #28c785;
          width: 20px;
        }

        .footer-contact a {
          color: #ccc;
          text-decoration: none;
        }

        .footer-contact a:hover {
          color: #fff;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 13px;
          color: #bbb;
        }
      `}</style>
    </footer>
  );
};

export default Footer;