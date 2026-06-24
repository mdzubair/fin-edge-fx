function Footer() {
    return(
        <footer className="footer">
            <div className="container-fluid">
                <div className="row text-muted">
                <div className="col-6 text-start">
                    <p className="mb-0">
                    <a className="text-muted" href="https://www.linkedin.com/in/mohammad-zubair-017076117/" target="_blank">
                        <strong>Mohammad Zubair</strong>
                    </a>{" "}
                    ©
                    </p>
                </div>
                <div className="col-6 text-end">
                    <ul className="list-inline">
                    <li className="list-inline-item">
                        <a className="text-muted" href="#">
                        Support
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="text-muted" href="#">
                        Help Center
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="text-muted" href="#">
                        Privacy
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="text-muted" href="#">
                        Terms
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </footer>
    )
}
export default Footer;