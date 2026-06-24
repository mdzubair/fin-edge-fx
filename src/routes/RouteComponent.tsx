import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
const FrontLayout = lazy(() => import("../layouts/Frontlayout"));
const BackendLayout = lazy(() => import("../layouts/BackendLayout"));

// Frontend Pages
const Home = lazy(() => import("../(__frontend)/pages/home/Home"));
const ContactUs = lazy(() => import("../(__frontend)/pages/contact-us/ContactUs"));
const LegalDocuments = lazy(() => import("../(__frontend)/pages/legal-documents/LegalDocuments"));
const Regulation = lazy(() => import("../(__frontend)/pages/regulation/Regulation"));
const HelpCenter = lazy(() => import("../(__frontend)/pages/help-center/HelpCenter"));
const Withdrawal = lazy(() => import("../(__frontend)/pages/withdrawal/Wthdrawal"));
const Funding = lazy(() => import("../(__frontend)/pages/funding/Funding"));
const TradingHours = lazy(() => import("../(__frontend)/pages/trading-hours/TradingHours"));
const RangeOfProducts = lazy(() => import("../(__frontend)/pages/range-of-products/RangeOfProducts"));
const SpreadsCommissions = lazy(() => import("../(__frontend)/pages/spreads-commissions/SpreadsCommissions"));
const CybersecurityScams = lazy(() => import("../(__frontend)/pages/cybersecurity-scams/CybersecurityScams"));
const LaunchWebTrader = lazy(() => import("../(__frontend)/pages/launch-web-trader/LaunchWebTrader"));
const AccountsOverview = lazy(() => import("../(__frontend)/pages/accounts-overview/AccountsOverview"));
const OpenAcount = lazy(() => import("../(__frontend)/pages/open-account/OpenAccount"));
const Login = lazy(() => import("../(__frontend)/pages/login/Login"));
const Signup = lazy(() => import("../(__frontend)/pages/signup/Signup"));

// Backend Pages
const Dashboard = lazy(() => import("../(__backend)/pages/dashboard/Dashboard"));
const Profile = lazy(() => import("../(__backend)/pages/profile/Profile"));
const Settings = lazy(() => import("../(__backend)/pages/seetings/Setting"));
const Users = lazy(() => import("../(__backend)/pages/users/Users"));
const UserProfile = lazy(() => import("../(__backend)/pages/users/UserProfile"));
const ChnagePassword = lazy(() => import("../(__backend)/pages/profile/ChnagePassword"));
const MetaAppPassword = lazy(() => import("../(__backend)/pages/meta-app-password/MetaAppPassword"));
const DepositFunds = lazy(() => import("../(__backend)/pages/deposit-funds/DepositFunds"));
const TradeSettlements = lazy(() => import("../(__backend)/pages/trade-settlements/TradeSettlements"));
const BankManagement = lazy(() => import("../(__backend)/pages/bank-management/BankManagement"));
const Withdraw = lazy(() => import("../(__backend)/pages/withdraw/Withdraw"));
const Offer = lazy(() => import("../(__backend)/pages/offer/Offer"));
const Ticket = lazy(() => import("../(__backend)/pages/tickets/Ticket"));
const TicketReplyForm = lazy(() => import("../(__backend)/pages/tickets/TicketReplyForm"));

const Loader = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ height: "100vh" }}
  >
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function RouteComponent() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Frontend Routes */}
          <Route path="/" element={<FrontLayout />}>
            <Route index element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="legal-documents" element={<LegalDocuments />} />
            <Route path="regulation" element={<Regulation />} />
            <Route path="help-center" element={<HelpCenter />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="funding" element={<Funding />} />
            <Route path="trading-hours" element={<TradingHours />} />
            <Route path="range-of-products" element={<RangeOfProducts />} />
            <Route path="spreads-commissions" element={<SpreadsCommissions />} />
            <Route path="cybersecurity-scams" element={<CybersecurityScams />} />
            <Route path="launch-web-trader" element={<LaunchWebTrader />} />
            <Route path="accounts-overview" element={<AccountsOverview />} />
            <Route path="open-account" element={<OpenAcount />} />
            <Route path="login" element={<Login />} />
            <Route path="broker-login" element={<Login />} />
            <Route path="register" element={<Signup />} />
          </Route>

          {/* Backend Routes */}
          <Route path="/admin" element={<BackendLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile-settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
            <Route path="user/:userId" element={<UserProfile />} />
            <Route path="change-password" element={<ChnagePassword />} />
            <Route path="meta-app-password/:userId?" element={<MetaAppPassword />} />
            <Route path="deposit-funds/:userId?" element={<DepositFunds />} />
            <Route path="trade-settlements/:userId?" element={<TradeSettlements />} />
            <Route path="manage-bank" element={<BankManagement />} />
            <Route path="withdraw/:userId?" element={<Withdraw />} />
            <Route path="offer" element={<Offer />} />
            <Route path="help-and-support" element={<Ticket />} />
            <Route path="v-ticket/:tokenId" element={<TicketReplyForm />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RouteComponent;