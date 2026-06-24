import { Link } from "react-router-dom";

const cardStyle = {
  backgroundColor: "#222e3c",
  border: "none",
};
function FooterNews() {
    return(
        <div className="row">
            <div className="col-12 d-flex">
                <div className="card flex-fill" style={cardStyle}>
                    <div className="card-body">
                    
                    <div className="d-flex flex-wrap gap-2">
                        <span className="text-muted">
                        Vanvest Limited is registered and regulated by the Financial Services Commission of the Republic of Vanuatu under registration number 700276 and has its registered office at Law Partners House, Kumul Highway, Port Vila, Vanuatu. <br /> <br />
                        This website is operated by Vanvest Limited.<br />  <br />
                        The entity above is duly authorized to operate under the Exness brand and trademarks <br /> <br />
                        Risk Warning: Online Forex/CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Under no circumstances shall Exness have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any financial activity. <Link to={"https://www.exness.vu/cdn/media/vanvest/vanvest_risk_disclosure.pdf?_gl=1*18inycx*_gcl_au*MTI3NTkyNjYyLjE3ODA4MjIyMTMuMTI2OTk1ODA4Ny4xNzgwODUwNTcyLjE3ODA4NTA1NzI.*FPAU*MTI3NTkyNjYyLjE3ODA4MjIyMTM.*_ga*MTU3NzQ5MDAxNy4xNzU0MzI0Mzcy*_ga_M71C3QBXSG*czE3ODA4NTA1NjkkbzExJGcxJHQxNzgwODUwNjEzJGoxNiRsMSRoMTIyOTM1NjA5Mw.."}  target="_blank">Learn more</Link> <br /> <br />

                        The information on this website may only be copied with the express written permission of Exness. <br /> <br />

                        Exness complies with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your security and privacy. We conduct regular vulnerability scans and penetration tests in accordance with the PCI DSS requirements for our business model.
                        </span>
                        
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterNews;