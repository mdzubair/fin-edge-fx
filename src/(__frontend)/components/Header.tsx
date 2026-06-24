import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Images } from "../../constants-image";

const Header = () =>{
  const location = useLocation();
  const pathname = location.pathname;
  let title: React.ReactNode = <>Fin Edge FX Trade Smarter.</>;
  let description = "Institutional-grade trading tools built for serious traders. Powering Every Move You Make in the Market. Precision execution. Advanced charts. Zero compromise.";

  let button: React.ReactNode = (<Link to="/" className="btn hero-btn">Trade Now</Link>);

  let topTitle = "";
  let bannerImage =  Images.defaultBanner;

  if (pathname === "/contact-us") {
    bannerImage = Images.contactBanner;
    title = <>Contact Us</>;
    description = "Get in touch with our team. We're here to help 24/7.";
  } else if (pathname === "/legal-documents") {
    title = <>Legal Documents</>;
    topTitle = "Regulated & Transparent";
    description = "Important legal information and regulatory documents.";
    bannerImage = Images.legalDocumentsBanner;
  } else if (
    pathname === "/help-center"
  ) {
    title = <>Help Centre</>;

    topTitle = "24/7 Customer Support";

    description =
      "Find answers to common questions and get the support you need.";
    bannerImage = Images.helpCenterBanner;
  } else if (pathname === "/withdrawal") {
    title = <>Withdrawal</>;

    description =
      "Fast and secure withdrawals with no hidden fees.";

    topTitle = "🛡️ Trusted • Secure • Regulated";

    bannerImage =Images.withdrawBanner;
  } else if (pathname === "/funding") {
    title = <>Funding Your Account</>;

    description =
      "Fast, secure, and convenient deposit options. Fund your account instantly with zero fees.";

    topTitle = "⚡ Instant Funding • Zero Fees • Secure Payments";

    bannerImage =Images.fundingBanner;
  } else if (pathname === "/trading-hours") {
    title = <>Trading Hours</>;

    description =
      "Trade around the clock across multiple markets.";

    topTitle = "🛡️ Trusted • Secure • Regulated";

    bannerImage =Images.contactBanner;
  } else if (pathname === "/range-of-products") {
    title = <>Range of Products</>;

    description =
      "Trade over 2,000 instruments across multiple asset classes.";

    topTitle = "Range of Products";

    bannerImage =Images.legalDocumentsBanner;
  } else if (pathname === "/spreads-commissions") {
    title = <>Spreads and Commissions</>;

    description =
      "Transparent pricing with competitive spreads from 0.0 pips.";

    topTitle = "Raw Spread Advantage";
    
    bannerImage =Images.regulationBanner;
  } else if (pathname === "/cybersecurity-scams") {
    title = <>Cybersecurity and Scams</>;
    description = "Your security is our top priority. Learn how to protect yourself from fraud.";
    topTitle = "Cybersecurity and Scams";
    bannerImage = Images.cybersecurityScamsBanner;
  } else if (pathname === "/open-account") {
    title = <>Open an Account</>;

    description =
      "Start trading in 4 simple steps. Open your account today and access global markets within minutes.";

    topTitle = "⚡ Open an Account";
  } else if (pathname === "/accounts-overview") {
    title = <>Accounts Overview</>;

    description =
      "Choose the perfect trading account that matches your trading style and experience level. All accounts feature competitive spreads, fast execution, and access to over 2,000 instruments.";

    topTitle = "⚡ Accounts Overview";
  } else if (pathname === "/launch-web-trader") {
    title = <>Launch Web Trader</>;

    description =
      "Access powerful trading platforms from any device, anywhere. No download required for web platforms.";

    topTitle = "⚡ Launch Web Trader";
  } else if (pathname === "/regulation") {
    title = <>Regulation</>;

    topTitle = "🛡️ Trusted • Secure • Regulated";

    description =
      "Trade with confidence. FinEdgeFX is regulated by leading financial authorities.";

    bannerImage =Images.regulationBanner;
  }
    return (
      <>
        <Navbar /> 
        <Banner topTitle={topTitle} title={title} bannerImage={bannerImage} description={description} button={button} pathname={pathname}/>
      </>
  );
}

export default Header;