import { useEffect } from "react";
import { getUsdPrice } from "../../../redux/slice/currency";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";

function Dashboard() {
 const dispatch = useDispatch<AppDispatch>();
useEffect(()=>{
  dispatch(getUsdPrice())
},[dispatch])



    return (
      <div className="container-fluid p-0">
        <div className="row mb-2 mb-xl-3">
          <div className="col-auto d-none d-sm-block">
            <h3>
              <strong>Crypto</strong> Dashboard
            </h3>
          </div>
          <div className="col-auto ms-auto text-end mt-n1">
            <a href="#" className="btn btn-light bg-white me-2">
              Invite a Friend
            </a>
            <a href="#" className="btn btn-primary">
              New Project
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-xxl d-flex">
            <div className="card flex-fill" style={{backgroundColor:"#222e3c"}}>
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Total balance</h5>
                  </div>
                  <div className="col-auto">
                    <div className="stat" style={{}}>
                      <i className="fa-solid fa-dollar-sign align-middle" />
                    </div>
                  </div>
                </div>
                <h4 className="mt-0 mb-1">
                  $53,252 <span className="text-muted">2.30 BTC</span>
                </h4>
                <div className="mb-0">
                  <span className="badge badge-success-light">+6.15%</span>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">USD/BTC</h5>
                  </div>
                  <div className="col-auto">
                    <div
                      className="stat"
                      style={{ background: "#F7931A", color: "white" }}
                    >
                      <i className="fa-solid fa-bitcoin-sign align-middle" />
                    </div>
                  </div>
                </div>
                <h4 className="mt-0 mb-1">
                  $23.077,05 <span className="text-muted">€22.617,47</span>
                </h4>
                <div className="mb-0">
                  <span className="text-muted">Volume: 132,691 BTC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">LTC/BTC</h5>
                  </div>
                  <div className="col-auto">
                    <div
                      className="stat"
                      style={{ background: "#345D9D", color: "white" }}
                    >
                      <i className="fa-solid fa-litecoin-sign align-middle" />
                    </div>
                  </div>
                </div>
                <h4 className="mt-0 mb-1">
                  0.00256 <span className="text-muted">$59.02</span>
                </h4>
                <div className="mb-0">
                  <span className="text-muted">Volume: 31,268 BTC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">ETH/BTC</h5>
                  </div>
                  <div className="col-auto">
                    <div
                      className="stat"
                      style={{ background: "#627EEA", color: "white" }}
                    >
                      <i className="fa-brands fa-ethereum align-middle" />
                    </div>
                  </div>
                </div>
                <h4 className="mt-0 mb-1">
                  0.07334 <span className="text-muted">$1,691.76</span>
                </h4>
                <div className="mb-0">
                  <span className="text-muted">Volume: 32,982 BTC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl d-flex d-none d-xxl-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">XMR/BTC</h5>
                  </div>
                  <div className="col-auto">
                    <div
                      className="stat"
                      style={{ background: "#FF6600", color: "white" }}
                    >
                      <i className="fa-brands fa-monero align-middle" />
                    </div>
                  </div>
                </div>
                <h4 className="mt-0 mb-1">
                  0.006854 <span className="text-muted">$157.68</span>
                </h4>
                <div className="mb-0">
                  <span className="text-muted">Volume: 28,567 BTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-7 col-xxl-8 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="card-actions float-end">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="1m"
                    autoComplete="off"
                  />
                  <label className="btn btn-sm btn-light" htmlFor="1m">
                    1m
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="5m"
                    autoComplete="off"
                    defaultChecked={false}
                  />
                  <label className="btn btn-sm btn-primary" htmlFor="5m">
                    5m
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="30m"
                    autoComplete="off"
                  />
                  <label className="btn btn-sm btn-light" htmlFor="30m">
                    30m
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="1h"
                    autoComplete="off"
                  />
                  <label className="btn btn-sm btn-light" htmlFor="1h">
                    1h
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="1d"
                    autoComplete="off"
                  />
                  <label className="btn btn-sm btn-light" htmlFor="1d">
                    1d
                  </label>
                </div>
                <h5 className="card-title mb-0">LTC/BTC</h5>
              </div>
              <div className="card-body">
                <div className="chart w-100">
                  <div
                    id="apexcharts-dashboard-candlestick"
                    style={{ minHeight: 465 }}
                  >
                    <div
                      id="apexcharts9fgw67ly"
                      className="apexcharts-canvas apexcharts9fgw67ly apexcharts-theme-light"
                      style={{ width: 528, height: 450 }}
                    >
                      <svg
                        id="SvgjsSvg1230"
                        width={528}
                        height={450}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        data-xmlns:svgjs="http://svgjs.dev"
                        className="apexcharts-svg apexcharts-zoomable"
                        data-xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style={{ background: "transparent" }}
                      >
                        <foreignObject x={0} y={0} width={528} height={450}>
                          <div
                            className="apexcharts-legend"
                            data-xmlns="http://www.w3.org/1999/xhtml"
                            style={{ maxHeight: 225 }}
                          />
                        </foreignObject>
                        <rect
                          id="SvgjsRect1236"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                        />
                        <g
                          id="SvgjsG1320"
                          className="apexcharts-yaxis"
                          data-rel={0}
                          transform="translate(24.53125, 0)"
                        >
                          <g id="SvgjsG1321" className="apexcharts-yaxis-texts-g">
                            <text
                              id="SvgjsText1323"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="31.4"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#a7abb1"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1324">65.00</tspan>
                              <title>65.00</title>
                            </text>
                            <text
                              id="SvgjsText1326"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="128.45"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#a7abb1"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1327">60.00</tspan>
                              <title>60.00</title>
                            </text>
                            <text
                              id="SvgjsText1329"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="225.5"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#a7abb1"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1330">55.00</tspan>
                              <title>55.00</title>
                            </text>
                            <text
                              id="SvgjsText1332"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="322.54999999999995"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#a7abb1"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1333">50.00</tspan>
                              <title>50.00</title>
                            </text>
                            <text
                              id="SvgjsText1335"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="419.59999999999997"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#a7abb1"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1336">45.00</tspan>
                              <title>45.00</title>
                            </text>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1232"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(69.38810847840102, 30)"
                        >
                          <defs id="SvgjsDefs1231">
                            <clipPath id="gridRectMask9fgw67ly">
                              <rect
                                id="SvgjsRect1244"
                                width="468.75503304319795"
                                height="389.2"
                                x="-14.5"
                                y="-0.5"
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="forecastMask9fgw67ly" />
                            <clipPath id="nonForecastMask9fgw67ly" />
                            <clipPath id="gridRectMarkerMask9fgw67ly">
                              <rect
                                id="SvgjsRect1245"
                                width="445.75503304319795"
                                height="392.2"
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                          </defs>
                          <line
                            id="SvgjsLine1237"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2="388.2"
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            strokeLinecap="butt"
                            className="apexcharts-xcrosshairs"
                            x={0}
                            y={0}
                            width={1}
                            height="388.2"
                            fill="#b1b9c4"
                            filter="none"
                            fillOpacity="0.9"
                            strokeWidth={1}
                          />
                          <line
                            id="SvgjsLine1288"
                            x1="64.93884431582794"
                            y1="389.2"
                            x2="64.93884431582794"
                            y2="395.2"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1289"
                            x1="143.54902427709337"
                            y1="389.2"
                            x2="143.54902427709337"
                            y2="395.2"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1290"
                            x1="220.87751652159903"
                            y1="389.2"
                            x2="220.87751652159903"
                            y2="395.2"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1291"
                            x1="299.4876964828644"
                            y1="389.2"
                            x2="299.4876964828644"
                            y2="395.2"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1292"
                            x1="376.81618872737"
                            y1="389.2"
                            x2="376.81618872737"
                            y2="395.2"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <g id="SvgjsG1284" className="apexcharts-grid">
                            <g
                              id="SvgjsG1285"
                              className="apexcharts-gridlines-horizontal"
                            >
                              <line
                                id="SvgjsLine1294"
                                x1="-10.85685847840103"
                                y1="97.05"
                                x2="452.611891521599"
                                y2="97.05"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1295"
                                x1="-10.85685847840103"
                                y1="194.1"
                                x2="452.611891521599"
                                y2="194.1"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1296"
                                x1="-10.85685847840103"
                                y1="291.15"
                                x2="452.611891521599"
                                y2="291.15"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                            </g>
                            <g
                              id="SvgjsG1286"
                              className="apexcharts-gridlines-vertical"
                            />
                            <line
                              id="SvgjsLine1299"
                              x1={0}
                              y1="388.2"
                              x2="441.75503304319795"
                              y2="388.2"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                            <line
                              id="SvgjsLine1298"
                              x1={0}
                              y1={1}
                              x2={0}
                              y2="388.2"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                          </g>
                          <g
                            id="SvgjsG1246"
                            className="apexcharts-candlestick-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG1247"
                              className="apexcharts-series"
                              data-seriesname="series-1"
                              data-rel={1}
                              data-real data-index={0}
                            >
                              <path
                                id="SvgjsPath1249"
                                d="M -4.186846541415222 216.42149999999992 L 0 216.42149999999992 L 0 169.0610999999999 L 0 216.42149999999992 L 4.186846541415222 216.42149999999992 L 4.186846541415222 252.71820000000002 L 0 252.71820000000002 L 0 260.2880999999999 L 0 252.71820000000002 L -4.186846541415222 252.71820000000002 L -4.186846541415222 215.92149999999992"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M -4.186846541415222 216.42149999999992 L 0 216.42149999999992 L 0 169.0610999999999 L 0 216.42149999999992 L 4.186846541415222 216.42149999999992 L 4.186846541415222 252.71820000000002 L 0 252.71820000000002 L 0 260.2880999999999 L 0 252.71820000000002 L -4.186846541415222 252.71820000000002 L -4.186846541415222 215.92149999999992"
                                data-pathfrom="M 0 252.71820000000002M -4.186846541415222 252.71820000000002"
                                cy="216.42149999999992"
                                cx="3.686846541415222"
                                data-j={0}
                                data-val="53.85"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1250"
                                d="M 8.202801387262475 220.10940000000005 L 12.389647928677697 220.10940000000005 L 12.389647928677697 194.29409999999984 L 12.389647928677697 220.10940000000005 L 16.576494470092918 220.10940000000005 L 16.576494470092918 233.89049999999997 L 12.389647928677697 233.89049999999997 L 12.389647928677697 264.9464999999999 L 12.389647928677697 233.89049999999997 L 8.202801387262475 233.89049999999997 L 8.202801387262475 219.60940000000005"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 8.202801387262475 220.10940000000005 L 12.389647928677697 220.10940000000005 L 12.389647928677697 194.29409999999984 L 12.389647928677697 220.10940000000005 L 16.576494470092918 220.10940000000005 L 16.576494470092918 233.89049999999997 L 12.389647928677697 233.89049999999997 L 12.389647928677697 264.9464999999999 L 12.389647928677697 233.89049999999997 L 8.202801387262475 233.89049999999997 L 8.202801387262475 219.60940000000005"
                                data-pathfrom="M 12.389647928677697 233.89049999999997M 8.202801387262475 233.89049999999997"
                                cy="220.10940000000005"
                                cx="16.076494470092918"
                                data-j={1}
                                data-val="52.95"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1251"
                                d="M 21.446907793780017 233.6963999999998 L 25.63375433519524 233.6963999999998 L 25.63375433519524 217.78019999999992 L 25.63375433519524 233.6963999999998 L 29.820600876610463 233.6963999999998 L 29.820600876610463 243.01319999999998 L 25.63375433519524 243.01319999999998 L 25.63375433519524 261.2586 L 25.63375433519524 243.01319999999998 L 21.446907793780017 243.01319999999998 L 21.446907793780017 233.1963999999998"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 21.446907793780017 233.6963999999998 L 25.63375433519524 233.6963999999998 L 25.63375433519524 217.78019999999992 L 25.63375433519524 233.6963999999998 L 29.820600876610463 233.6963999999998 L 29.820600876610463 243.01319999999998 L 25.63375433519524 243.01319999999998 L 25.63375433519524 261.2586 L 25.63375433519524 243.01319999999998 L 21.446907793780017 243.01319999999998 L 21.446907793780017 233.1963999999998"
                                data-pathfrom="M 25.63375433519524 243.01319999999998M 21.446907793780017 243.01319999999998"
                                cy="233.6963999999998"
                                cx="29.320600876610463"
                                data-j={2}
                                data-val="52.48"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1252"
                                d="M 34.26378496137764 241.84859999999992 L 38.45063150279286 241.84859999999992 L 38.45063150279286 236.99610000000007 L 38.45063150279286 241.84859999999992 L 42.63747804420808 241.84859999999992 L 42.63747804420808 305.9015999999999 L 38.45063150279286 305.9015999999999 L 38.45063150279286 332.2991999999999 L 38.45063150279286 305.9015999999999 L 34.26378496137764 305.9015999999999 L 34.26378496137764 241.34859999999992"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 34.26378496137764 241.84859999999992 L 38.45063150279286 241.84859999999992 L 38.45063150279286 236.99610000000007 L 38.45063150279286 241.84859999999992 L 42.63747804420808 241.84859999999992 L 42.63747804420808 305.9015999999999 L 38.45063150279286 305.9015999999999 L 38.45063150279286 332.2991999999999 L 38.45063150279286 305.9015999999999 L 34.26378496137764 305.9015999999999 L 34.26378496137764 241.34859999999992"
                                data-pathfrom="M 38.45063150279286 305.9015999999999M 34.26378496137764 305.9015999999999"
                                cy="241.84859999999992"
                                cx="42.13747804420808"
                                data-j={3}
                                data-val="49.24"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1253"
                                d="M 47.507891367895176 237.1902 L 51.6947379093104 237.1902 L 51.6947379093104 235.63739999999984 L 51.6947379093104 237.1902 L 55.88158445072562 237.1902 L 55.88158445072562 308.6189999999999 L 51.6947379093104 308.6189999999999 L 51.6947379093104 335.7929999999999 L 51.6947379093104 308.6189999999999 L 47.507891367895176 308.6189999999999 L 47.507891367895176 236.6902"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 47.507891367895176 237.1902 L 51.6947379093104 237.1902 L 51.6947379093104 235.63739999999984 L 51.6947379093104 237.1902 L 55.88158445072562 237.1902 L 55.88158445072562 308.6189999999999 L 51.6947379093104 308.6189999999999 L 51.6947379093104 335.7929999999999 L 51.6947379093104 308.6189999999999 L 47.507891367895176 308.6189999999999 L 47.507891367895176 236.6902"
                                data-pathfrom="M 51.6947379093104 308.6189999999999M 47.507891367895176 308.6189999999999"
                                cy="237.1902"
                                cx="55.38158445072562"
                                data-j={4}
                                data-val="52.78"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1254"
                                d="M 60.324768535492794 236.21969999999988 L 64.51161507690801 236.21969999999988 L 64.51161507690801 223.60320000000002 L 64.51161507690801 236.21969999999988 L 68.69846161832324 236.21969999999988 L 68.69846161832324 246.7011 L 64.51161507690801 246.7011 L 64.51161507690801 284.9387999999999 L 64.51161507690801 246.7011 L 60.324768535492794 246.7011 L 60.324768535492794 235.71969999999988"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 60.324768535492794 236.21969999999988 L 64.51161507690801 236.21969999999988 L 64.51161507690801 223.60320000000002 L 64.51161507690801 236.21969999999988 L 68.69846161832324 236.21969999999988 L 68.69846161832324 246.7011 L 64.51161507690801 246.7011 L 64.51161507690801 284.9387999999999 L 64.51161507690801 246.7011 L 60.324768535492794 246.7011 L 60.324768535492794 235.71969999999988"
                                data-pathfrom="M 64.51161507690801 246.7011M 60.324768535492794 246.7011"
                                cy="236.21969999999988"
                                cx="68.19846161832324"
                                data-j={5}
                                data-val="52.29"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1255"
                                d="M 73.56887494201034 241.07219999999995 L 77.75572148342556 241.07219999999995 L 77.75572148342556 204.19319999999993 L 77.75572148342556 241.07219999999995 L 81.94256802484078 241.07219999999995 L 81.94256802484078 248.44799999999987 L 77.75572148342556 248.44799999999987 L 77.75572148342556 259.31759999999997 L 77.75572148342556 248.44799999999987 L 73.56887494201034 248.44799999999987 L 73.56887494201034 240.57219999999995"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 73.56887494201034 241.07219999999995 L 77.75572148342556 241.07219999999995 L 77.75572148342556 204.19319999999993 L 77.75572148342556 241.07219999999995 L 81.94256802484078 241.07219999999995 L 81.94256802484078 248.44799999999987 L 77.75572148342556 248.44799999999987 L 77.75572148342556 259.31759999999997 L 77.75572148342556 248.44799999999987 L 73.56887494201034 248.44799999999987 L 73.56887494201034 240.57219999999995"
                                data-pathfrom="M 77.75572148342556 248.44799999999987M 73.56887494201034 248.44799999999987"
                                cy="241.07219999999995"
                                cx="81.44256802484078"
                                data-j={6}
                                data-val="52.58"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1256"
                                d="M 86.81298134852788 154.69769999999994 L 90.9998278899431 154.69769999999994 L 90.9998278899431 148.48649999999998 L 90.9998278899431 154.69769999999994 L 95.18667443135833 154.69769999999994 L 95.18667443135833 237.57839999999987 L 90.9998278899431 237.57839999999987 L 90.9998278899431 249.4185 L 90.9998278899431 237.57839999999987 L 86.81298134852788 237.57839999999987 L 86.81298134852788 154.19769999999994"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 86.81298134852788 154.69769999999994 L 90.9998278899431 154.69769999999994 L 90.9998278899431 148.48649999999998 L 90.9998278899431 154.69769999999994 L 95.18667443135833 154.69769999999994 L 95.18667443135833 237.57839999999987 L 90.9998278899431 237.57839999999987 L 90.9998278899431 249.4185 L 90.9998278899431 237.57839999999987 L 86.81298134852788 237.57839999999987 L 86.81298134852788 154.19769999999994"
                                data-pathfrom="M 90.9998278899431 237.57839999999987M 86.81298134852788 237.57839999999987"
                                cy="154.69769999999994"
                                cx="94.68667443135833"
                                data-j={7}
                                data-val="57.03"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1257"
                                d="M 99.6298585161255 154.5036 L 103.81670505754072 154.5036 L 103.81670505754072 132.95849999999996 L 103.81670505754072 154.5036 L 108.00355159895594 154.5036 L 108.00355159895594 171.00209999999993 L 103.81670505754072 171.00209999999993 L 103.81670505754072 312.88919999999985 L 103.81670505754072 171.00209999999993 L 99.6298585161255 171.00209999999993 L 99.6298585161255 154.0036"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 99.6298585161255 154.5036 L 103.81670505754072 154.5036 L 103.81670505754072 132.95849999999996 L 103.81670505754072 154.5036 L 108.00355159895594 154.5036 L 108.00355159895594 171.00209999999993 L 103.81670505754072 171.00209999999993 L 103.81670505754072 312.88919999999985 L 103.81670505754072 171.00209999999993 L 99.6298585161255 171.00209999999993 L 99.6298585161255 154.0036"
                                data-pathfrom="M 103.81670505754072 171.00209999999993M 99.6298585161255 171.00209999999993"
                                cy="154.5036"
                                cx="107.50355159895594"
                                data-j={8}
                                data-val="56.19"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1258"
                                d="M 112.87396492264304 120.53610000000003 L 117.06081146405826 120.53610000000003 L 117.06081146405826 119.37149999999997 L 117.06081146405826 120.53610000000003 L 121.24765800547348 120.53610000000003 L 121.24765800547348 172.94309999999996 L 117.06081146405826 172.94309999999996 L 117.06081146405826 184.78320000000008 L 117.06081146405826 172.94309999999996 L 112.87396492264304 172.94309999999996 L 112.87396492264304 120.03610000000003"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 112.87396492264304 120.53610000000003 L 117.06081146405826 120.53610000000003 L 117.06081146405826 119.37149999999997 L 117.06081146405826 120.53610000000003 L 121.24765800547348 120.53610000000003 L 121.24765800547348 172.94309999999996 L 117.06081146405826 172.94309999999996 L 117.06081146405826 184.78320000000008 L 117.06081146405826 172.94309999999996 L 112.87396492264304 172.94309999999996 L 112.87396492264304 120.03610000000003"
                                data-pathfrom="M 117.06081146405826 172.94309999999996M 112.87396492264304 172.94309999999996"
                                cy="120.53610000000003"
                                cx="120.74765800547348"
                                data-j={9}
                                data-val="58.79"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1259"
                                d="M 125.69084209024065 115.48949999999991 L 129.87768863165587 115.48949999999991 L 129.87768863165587 103.84349999999995 L 129.87768863165587 115.48949999999991 L 134.0645351730711 115.48949999999991 L 134.0645351730711 120.73019999999997 L 129.87768863165587 120.73019999999997 L 129.87768863165587 131.40570000000002 L 129.87768863165587 120.73019999999997 L 125.69084209024065 120.73019999999997 L 125.69084209024065 114.98949999999991"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 125.69084209024065 115.48949999999991 L 129.87768863165587 115.48949999999991 L 129.87768863165587 103.84349999999995 L 129.87768863165587 115.48949999999991 L 134.0645351730711 115.48949999999991 L 134.0645351730711 120.73019999999997 L 129.87768863165587 120.73019999999997 L 129.87768863165587 131.40570000000002 L 129.87768863165587 120.73019999999997 L 125.69084209024065 120.73019999999997 L 125.69084209024065 114.98949999999991"
                                data-pathfrom="M 129.87768863165587 120.73019999999997M 125.69084209024065 120.73019999999997"
                                cy="115.48949999999991"
                                cx="133.5645351730711"
                                data-j={10}
                                data-val="59.05"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1260"
                                d="M 138.93494849675818 90.4505999999999 L 143.12179503817342 90.4505999999999 L 143.12179503817342 75.5048999999999 L 143.12179503817342 90.4505999999999 L 147.30864157958862 90.4505999999999 L 147.30864157958862 109.27829999999994 L 143.12179503817342 109.27829999999994 L 143.12179503817342 109.66649999999981 L 143.12179503817342 109.27829999999994 L 138.93494849675818 109.27829999999994 L 138.93494849675818 89.9505999999999"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 138.93494849675818 90.4505999999999 L 143.12179503817342 90.4505999999999 L 143.12179503817342 75.5048999999999 L 143.12179503817342 90.4505999999999 L 147.30864157958862 90.4505999999999 L 147.30864157958862 109.27829999999994 L 143.12179503817342 109.27829999999994 L 143.12179503817342 109.66649999999981 L 143.12179503817342 109.27829999999994 L 138.93494849675818 109.27829999999994 L 138.93494849675818 89.9505999999999"
                                data-pathfrom="M 143.12179503817342 109.27829999999994M 138.93494849675818 109.27829999999994"
                                cy="90.4505999999999"
                                cx="146.80864157958862"
                                data-j={11}
                                data-val="60.34"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1261"
                                d="M 152.17905490327573 89.28600000000006 L 156.36590144469096 89.28600000000006 L 156.36590144469096 86.95679999999993 L 156.36590144469096 89.28600000000006 L 160.55274798610617 89.28600000000006 L 160.55274798610617 156.63869999999997 L 156.36590144469096 156.63869999999997 L 156.36590144469096 160.9088999999999 L 156.36590144469096 156.63869999999997 L 152.17905490327573 156.63869999999997 L 152.17905490327573 88.78600000000006"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 152.17905490327573 89.28600000000006 L 156.36590144469096 89.28600000000006 L 156.36590144469096 86.95679999999993 L 156.36590144469096 89.28600000000006 L 160.55274798610617 89.28600000000006 L 160.55274798610617 156.63869999999997 L 156.36590144469096 156.63869999999997 L 156.36590144469096 160.9088999999999 L 156.36590144469096 156.63869999999997 L 152.17905490327573 156.63869999999997 L 152.17905490327573 88.78600000000006"
                                data-pathfrom="M 156.36590144469096 156.63869999999997M 152.17905490327573 156.63869999999997"
                                cy="89.28600000000006"
                                cx="160.05274798610617"
                                data-j={12}
                                data-val="56.93"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1262"
                                d="M 164.1414735930335 154.89179999999988 L 168.32832013444875 154.89179999999988 L 168.32832013444875 102.67889999999989 L 168.32832013444875 154.89179999999988 L 172.51516667586395 154.89179999999988 L 172.51516667586395 158.77379999999994 L 168.32832013444875 158.77379999999994 L 168.32832013444875 173.91359999999986 L 168.32832013444875 158.77379999999994 L 164.1414735930335 158.77379999999994 L 164.1414735930335 154.39179999999988"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 164.1414735930335 154.89179999999988 L 168.32832013444875 154.89179999999988 L 168.32832013444875 102.67889999999989 L 168.32832013444875 154.89179999999988 L 172.51516667586395 154.89179999999988 L 172.51516667586395 158.77379999999994 L 168.32832013444875 158.77379999999994 L 168.32832013444875 173.91359999999986 L 168.32832013444875 158.77379999999994 L 164.1414735930335 158.77379999999994 L 164.1414735930335 154.39179999999988"
                                data-pathfrom="M 168.32832013444875 158.77379999999994M 164.1414735930335 158.77379999999994"
                                cy="154.89179999999988"
                                cx="172.01516667586395"
                                data-j={13}
                                data-val="56.82"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1263"
                                d="M 177.38557999955106 110.63699999999994 L 181.5724265409663 110.63699999999994 L 181.5724265409663 104.42579999999998 L 181.5724265409663 110.63699999999994 L 185.7592730823815 110.63699999999994 L 185.7592730823815 155.8623 L 181.5724265409663 155.8623 L 181.5724265409663 198.56429999999978 L 181.5724265409663 155.8623 L 177.38557999955106 155.8623 L 177.38557999955106 110.13699999999994"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 177.38557999955106 110.63699999999994 L 181.5724265409663 110.63699999999994 L 181.5724265409663 104.42579999999998 L 181.5724265409663 110.63699999999994 L 185.7592730823815 110.63699999999994 L 185.7592730823815 155.8623 L 181.5724265409663 155.8623 L 181.5724265409663 198.56429999999978 L 181.5724265409663 155.8623 L 177.38557999955106 155.8623 L 177.38557999955106 110.13699999999994"
                                data-pathfrom="M 181.5724265409663 155.8623M 177.38557999955106 155.8623"
                                cy="110.63699999999994"
                                cx="185.2592730823815"
                                data-j={14}
                                data-val="59.3"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1264"
                                d="M 190.20245716714865 99.96149999999989 L 194.3893037085639 99.96149999999989 L 194.3893037085639 52.60109999999986 L 194.3893037085639 99.96149999999989 L 198.5761502499791 99.96149999999989 L 198.5761502499791 114.32490000000007 L 194.3893037085639 114.32490000000007 L 194.3893037085639 114.519 L 194.3893037085639 114.32490000000007 L 190.20245716714865 114.32490000000007 L 190.20245716714865 99.46149999999989"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 190.20245716714865 99.96149999999989 L 194.3893037085639 99.96149999999989 L 194.3893037085639 52.60109999999986 L 194.3893037085639 99.96149999999989 L 198.5761502499791 99.96149999999989 L 198.5761502499791 114.32490000000007 L 194.3893037085639 114.32490000000007 L 194.3893037085639 114.519 L 194.3893037085639 114.32490000000007 L 190.20245716714865 114.32490000000007 L 190.20245716714865 99.46149999999989"
                                data-pathfrom="M 194.3893037085639 114.32490000000007M 190.20245716714865 114.32490000000007"
                                cy="99.96149999999989"
                                cx="198.0761502499791"
                                data-j={15}
                                data-val="59.85"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1265"
                                d="M 203.4465635736662 97.63229999999999 L 207.63341011508143 97.63229999999999 L 207.63341011508143 94.91489999999999 L 207.63341011508143 97.63229999999999 L 211.82025665649664 97.63229999999999 L 211.82025665649664 127.7177999999999 L 207.63341011508143 127.7177999999999 L 207.63341011508143 181.28940000000011 L 207.63341011508143 127.7177999999999 L 203.4465635736662 127.7177999999999 L 203.4465635736662 97.13229999999999"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 203.4465635736662 97.63229999999999 L 207.63341011508143 97.63229999999999 L 207.63341011508143 94.91489999999999 L 207.63341011508143 97.63229999999999 L 211.82025665649664 97.63229999999999 L 211.82025665649664 127.7177999999999 L 207.63341011508143 127.7177999999999 L 207.63341011508143 181.28940000000011 L 207.63341011508143 127.7177999999999 L 203.4465635736662 127.7177999999999 L 203.4465635736662 97.13229999999999"
                                data-pathfrom="M 207.63341011508143 127.7177999999999M 203.4465635736662 127.7177999999999"
                                cy="97.63229999999999"
                                cx="211.32025665649664"
                                data-j={16}
                                data-val="58.42"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1266"
                                d="M 216.26344074126382 129.27059999999983 L 220.45028728267906 129.27059999999983 L 220.45028728267906 78.99869999999987 L 220.45028728267906 129.27059999999983 L 224.63713382409426 129.27059999999983 L 224.63713382409426 147.12779999999998 L 220.45028728267906 147.12779999999998 L 220.45028728267906 160.13249999999994 L 220.45028728267906 147.12779999999998 L 216.26344074126382 147.12779999999998 L 216.26344074126382 128.77059999999983"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 216.26344074126382 129.27059999999983 L 220.45028728267906 129.27059999999983 L 220.45028728267906 78.99869999999987 L 220.45028728267906 129.27059999999983 L 224.63713382409426 129.27059999999983 L 224.63713382409426 147.12779999999998 L 220.45028728267906 147.12779999999998 L 220.45028728267906 160.13249999999994 L 220.45028728267906 147.12779999999998 L 216.26344074126382 147.12779999999998 L 216.26344074126382 128.77059999999983"
                                data-pathfrom="M 220.45028728267906 147.12779999999998M 216.26344074126382 147.12779999999998"
                                cy="129.27059999999983"
                                cx="224.13713382409426"
                                data-j={17}
                                data-val="57.42"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1267"
                                d="M 229.50754714778137 140.52839999999992 L 233.6943936891966 140.52839999999992 L 233.6943936891966 134.31719999999996 L 233.6943936891966 140.52839999999992 L 237.8812402306118 140.52839999999992 L 237.8812402306118 199.72889999999984 L 233.6943936891966 199.72889999999984 L 233.6943936891966 229.42619999999988 L 233.6943936891966 199.72889999999984 L 229.50754714778137 199.72889999999984 L 229.50754714778137 140.02839999999992"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 229.50754714778137 140.52839999999992 L 233.6943936891966 140.52839999999992 L 233.6943936891966 134.31719999999996 L 233.6943936891966 140.52839999999992 L 237.8812402306118 140.52839999999992 L 237.8812402306118 199.72889999999984 L 233.6943936891966 199.72889999999984 L 233.6943936891966 229.42619999999988 L 233.6943936891966 199.72889999999984 L 229.50754714778137 199.72889999999984 L 229.50754714778137 140.02839999999992"
                                data-pathfrom="M 233.6943936891966 199.72889999999984M 229.50754714778137 199.72889999999984"
                                cy="140.52839999999992"
                                cx="237.3812402306118"
                                data-j={18}
                                data-val="54.71"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1268"
                                d="M 242.7516535542989 148.48649999999998 L 246.93850009571415 148.48649999999998 L 246.93850009571415 69.48779999999988 L 246.93850009571415 148.48649999999998 L 251.12534663712935 148.48649999999998 L 251.12534663712935 197.98199999999997 L 246.93850009571415 197.98199999999997 L 246.93850009571415 221.66219999999998 L 246.93850009571415 197.98199999999997 L 242.7516535542989 197.98199999999997 L 242.7516535542989 147.98649999999998"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 242.7516535542989 148.48649999999998 L 246.93850009571415 148.48649999999998 L 246.93850009571415 69.48779999999988 L 246.93850009571415 148.48649999999998 L 251.12534663712935 148.48649999999998 L 251.12534663712935 197.98199999999997 L 246.93850009571415 197.98199999999997 L 246.93850009571415 221.66219999999998 L 246.93850009571415 197.98199999999997 L 242.7516535542989 197.98199999999997 L 242.7516535542989 147.98649999999998"
                                data-pathfrom="M 246.93850009571415 197.98199999999997M 242.7516535542989 197.98199999999997"
                                cy="148.48649999999998"
                                cx="250.62534663712935"
                                data-j={19}
                                data-val="57.35"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1269"
                                d="M 255.5685307218965 39.01409999999987 L 259.75537726331174 39.01409999999987 L 259.75537726331174 37.07309999999984 L 259.75537726331174 39.01409999999987 L 263.94222380472695 39.01409999999987 L 263.94222380472695 144.41039999999998 L 259.75537726331174 144.41039999999998 L 259.75537726331174 155.27999999999997 L 259.75537726331174 144.41039999999998 L 255.5685307218965 144.41039999999998 L 255.5685307218965 38.51409999999987"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 255.5685307218965 39.01409999999987 L 259.75537726331174 39.01409999999987 L 259.75537726331174 37.07309999999984 L 259.75537726331174 39.01409999999987 L 263.94222380472695 39.01409999999987 L 263.94222380472695 144.41039999999998 L 259.75537726331174 144.41039999999998 L 259.75537726331174 155.27999999999997 L 259.75537726331174 144.41039999999998 L 255.5685307218965 144.41039999999998 L 255.5685307218965 38.51409999999987"
                                data-pathfrom="M 259.75537726331174 144.41039999999998M 255.5685307218965 144.41039999999998"
                                cy="39.01409999999987"
                                cx="263.44222380472695"
                                data-j={20}
                                data-val="62.99"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1270"
                                d="M 268.8126371284141 40.9550999999999 L 272.9994836698293 40.9550999999999 L 272.9994836698293 30.667799999999943 L 272.9994836698293 40.9550999999999 L 277.1863302112446 40.9550999999999 L 277.1863302112446 62.88840000000005 L 272.9994836698293 62.88840000000005 L 272.9994836698293 102.48479999999995 L 272.9994836698293 62.88840000000005 L 268.8126371284141 62.88840000000005 L 268.8126371284141 40.4550999999999"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 268.8126371284141 40.9550999999999 L 272.9994836698293 40.9550999999999 L 272.9994836698293 30.667799999999943 L 272.9994836698293 40.9550999999999 L 277.1863302112446 40.9550999999999 L 277.1863302112446 62.88840000000005 L 272.9994836698293 62.88840000000005 L 272.9994836698293 102.48479999999995 L 272.9994836698293 62.88840000000005 L 268.8126371284141 62.88840000000005 L 268.8126371284141 40.4550999999999"
                                data-pathfrom="M 272.9994836698293 62.88840000000005M 268.8126371284141 62.88840000000005"
                                cy="40.9550999999999"
                                cx="276.6863302112446"
                                data-j={21}
                                data-val="61.76"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1271"
                                d="M 281.62951429601173 38.04359999999997 L 285.81636083742694 38.04359999999997 L 285.81636083742694 16.498499999999922 L 285.81636083742694 38.04359999999997 L 290.0032073788422 38.04359999999997 L 290.0032073788422 63.85889999999995 L 285.81636083742694 63.85889999999995 L 285.81636083742694 72.01109999999994 L 285.81636083742694 63.85889999999995 L 281.62951429601173 63.85889999999995 L 281.62951429601173 37.54359999999997"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 281.62951429601173 38.04359999999997 L 285.81636083742694 38.04359999999997 L 285.81636083742694 16.498499999999922 L 285.81636083742694 38.04359999999997 L 290.0032073788422 38.04359999999997 L 290.0032073788422 63.85889999999995 L 285.81636083742694 63.85889999999995 L 285.81636083742694 72.01109999999994 L 285.81636083742694 63.85889999999995 L 281.62951429601173 63.85889999999995 L 281.62951429601173 37.54359999999997"
                                data-pathfrom="M 285.81636083742694 63.85889999999995M 281.62951429601173 63.85889999999995"
                                cy="38.04359999999997"
                                cx="289.5032073788422"
                                data-j={22}
                                data-val="63.04"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1272"
                                d="M 294.87362070252925 90.4505999999999 L 299.06046724394446 90.4505999999999 L 299.06046724394446 75.5048999999999 L 299.06046724394446 90.4505999999999 L 303.2473137853597 90.4505999999999 L 303.2473137853597 109.27829999999994 L 299.06046724394446 109.27829999999994 L 299.06046724394446 109.66649999999981 L 299.06046724394446 109.27829999999994 L 294.87362070252925 109.27829999999994 L 294.87362070252925 89.9505999999999"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 294.87362070252925 90.4505999999999 L 299.06046724394446 90.4505999999999 L 299.06046724394446 75.5048999999999 L 299.06046724394446 90.4505999999999 L 303.2473137853597 90.4505999999999 L 303.2473137853597 109.27829999999994 L 299.06046724394446 109.27829999999994 L 299.06046724394446 109.66649999999981 L 299.06046724394446 109.27829999999994 L 294.87362070252925 109.27829999999994 L 294.87362070252925 89.9505999999999"
                                data-pathfrom="M 299.06046724394446 109.27829999999994M 294.87362070252925 109.27829999999994"
                                cy="90.4505999999999"
                                cx="302.7473137853597"
                                data-j={23}
                                data-val="60.34"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1273"
                                d="M 308.11772710904677 89.28600000000006 L 312.304573650462 89.28600000000006 L 312.304573650462 86.95679999999993 L 312.304573650462 89.28600000000006 L 316.49142019187724 89.28600000000006 L 316.49142019187724 156.63869999999997 L 312.304573650462 156.63869999999997 L 312.304573650462 160.9088999999999 L 312.304573650462 156.63869999999997 L 308.11772710904677 156.63869999999997 L 308.11772710904677 88.78600000000006"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 308.11772710904677 89.28600000000006 L 312.304573650462 89.28600000000006 L 312.304573650462 86.95679999999993 L 312.304573650462 89.28600000000006 L 316.49142019187724 89.28600000000006 L 316.49142019187724 156.63869999999997 L 312.304573650462 156.63869999999997 L 312.304573650462 160.9088999999999 L 312.304573650462 156.63869999999997 L 308.11772710904677 156.63869999999997 L 308.11772710904677 88.78600000000006"
                                data-pathfrom="M 312.304573650462 156.63869999999997M 308.11772710904677 156.63869999999997"
                                cy="89.28600000000006"
                                cx="315.99142019187724"
                                data-j={24}
                                data-val="56.93"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1274"
                                d="M 320.08014579880455 154.89179999999988 L 324.26699234021976 154.89179999999988 L 324.26699234021976 102.67889999999989 L 324.26699234021976 154.89179999999988 L 328.453838881635 154.89179999999988 L 328.453838881635 158.77379999999994 L 324.26699234021976 158.77379999999994 L 324.26699234021976 173.91359999999986 L 324.26699234021976 158.77379999999994 L 320.08014579880455 158.77379999999994 L 320.08014579880455 154.39179999999988"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 320.08014579880455 154.89179999999988 L 324.26699234021976 154.89179999999988 L 324.26699234021976 102.67889999999989 L 324.26699234021976 154.89179999999988 L 328.453838881635 154.89179999999988 L 328.453838881635 158.77379999999994 L 324.26699234021976 158.77379999999994 L 324.26699234021976 173.91359999999986 L 324.26699234021976 158.77379999999994 L 320.08014579880455 158.77379999999994 L 320.08014579880455 154.39179999999988"
                                data-pathfrom="M 324.26699234021976 158.77379999999994M 320.08014579880455 158.77379999999994"
                                cy="154.89179999999988"
                                cx="327.953838881635"
                                data-j={25}
                                data-val="56.82"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1275"
                                d="M 333.3242522053221 110.63699999999994 L 337.51109874673733 110.63699999999994 L 337.51109874673733 104.42579999999998 L 337.51109874673733 110.63699999999994 L 341.6979452881526 110.63699999999994 L 341.6979452881526 155.8623 L 337.51109874673733 155.8623 L 337.51109874673733 198.56429999999978 L 337.51109874673733 155.8623 L 333.3242522053221 155.8623 L 333.3242522053221 110.13699999999994"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 333.3242522053221 110.63699999999994 L 337.51109874673733 110.63699999999994 L 337.51109874673733 104.42579999999998 L 337.51109874673733 110.63699999999994 L 341.6979452881526 110.63699999999994 L 341.6979452881526 155.8623 L 337.51109874673733 155.8623 L 337.51109874673733 198.56429999999978 L 337.51109874673733 155.8623 L 333.3242522053221 155.8623 L 333.3242522053221 110.13699999999994"
                                data-pathfrom="M 337.51109874673733 155.8623M 333.3242522053221 155.8623"
                                cy="110.63699999999994"
                                cx="341.1979452881526"
                                data-j={26}
                                data-val="59.3"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1276"
                                d="M 346.14112937291975 99.96149999999989 L 350.32797591433496 99.96149999999989 L 350.32797591433496 52.60109999999986 L 350.32797591433496 99.96149999999989 L 354.5148224557502 99.96149999999989 L 354.5148224557502 114.32490000000007 L 350.32797591433496 114.32490000000007 L 350.32797591433496 114.519 L 350.32797591433496 114.32490000000007 L 346.14112937291975 114.32490000000007 L 346.14112937291975 99.46149999999989"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 346.14112937291975 99.96149999999989 L 350.32797591433496 99.96149999999989 L 350.32797591433496 52.60109999999986 L 350.32797591433496 99.96149999999989 L 354.5148224557502 99.96149999999989 L 354.5148224557502 114.32490000000007 L 350.32797591433496 114.32490000000007 L 350.32797591433496 114.519 L 350.32797591433496 114.32490000000007 L 346.14112937291975 114.32490000000007 L 346.14112937291975 99.46149999999989"
                                data-pathfrom="M 350.32797591433496 114.32490000000007M 346.14112937291975 114.32490000000007"
                                cy="99.96149999999989"
                                cx="354.0148224557502"
                                data-j={27}
                                data-val="59.85"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1277"
                                d="M 359.38523577943727 97.63229999999999 L 363.5720823208525 97.63229999999999 L 363.5720823208525 94.91489999999999 L 363.5720823208525 97.63229999999999 L 367.75892886226774 97.63229999999999 L 367.75892886226774 127.7177999999999 L 363.5720823208525 127.7177999999999 L 363.5720823208525 181.28940000000011 L 363.5720823208525 127.7177999999999 L 359.38523577943727 127.7177999999999 L 359.38523577943727 97.13229999999999"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 359.38523577943727 97.63229999999999 L 363.5720823208525 97.63229999999999 L 363.5720823208525 94.91489999999999 L 363.5720823208525 97.63229999999999 L 367.75892886226774 97.63229999999999 L 367.75892886226774 127.7177999999999 L 363.5720823208525 127.7177999999999 L 363.5720823208525 181.28940000000011 L 363.5720823208525 127.7177999999999 L 359.38523577943727 127.7177999999999 L 359.38523577943727 97.13229999999999"
                                data-pathfrom="M 363.5720823208525 127.7177999999999M 359.38523577943727 127.7177999999999"
                                cy="97.63229999999999"
                                cx="367.25892886226774"
                                data-j={28}
                                data-val="58.42"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1278"
                                d="M 372.2021129470349 129.27059999999983 L 376.3889594884501 129.27059999999983 L 376.3889594884501 78.99869999999987 L 376.3889594884501 129.27059999999983 L 380.57580602986536 129.27059999999983 L 380.57580602986536 147.12779999999998 L 376.3889594884501 147.12779999999998 L 376.3889594884501 160.13249999999994 L 376.3889594884501 147.12779999999998 L 372.2021129470349 147.12779999999998 L 372.2021129470349 128.77059999999983"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 372.2021129470349 129.27059999999983 L 376.3889594884501 129.27059999999983 L 376.3889594884501 78.99869999999987 L 376.3889594884501 129.27059999999983 L 380.57580602986536 129.27059999999983 L 380.57580602986536 147.12779999999998 L 376.3889594884501 147.12779999999998 L 376.3889594884501 160.13249999999994 L 376.3889594884501 147.12779999999998 L 372.2021129470349 147.12779999999998 L 372.2021129470349 128.77059999999983"
                                data-pathfrom="M 376.3889594884501 147.12779999999998M 372.2021129470349 147.12779999999998"
                                cy="129.27059999999983"
                                cx="380.07580602986536"
                                data-j={29}
                                data-val="57.42"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1279"
                                d="M 385.4462193535524 140.52839999999992 L 389.6330658949676 140.52839999999992 L 389.6330658949676 134.31719999999996 L 389.6330658949676 140.52839999999992 L 393.8199124363829 140.52839999999992 L 393.8199124363829 199.72889999999984 L 389.6330658949676 199.72889999999984 L 389.6330658949676 268.24619999999993 L 389.6330658949676 199.72889999999984 L 385.4462193535524 199.72889999999984 L 385.4462193535524 140.02839999999992"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 385.4462193535524 140.52839999999992 L 389.6330658949676 140.52839999999992 L 389.6330658949676 134.31719999999996 L 389.6330658949676 140.52839999999992 L 393.8199124363829 140.52839999999992 L 393.8199124363829 199.72889999999984 L 389.6330658949676 199.72889999999984 L 389.6330658949676 268.24619999999993 L 389.6330658949676 199.72889999999984 L 385.4462193535524 199.72889999999984 L 385.4462193535524 140.02839999999992"
                                data-pathfrom="M 389.6330658949676 199.72889999999984M 385.4462193535524 199.72889999999984"
                                cy="140.52839999999992"
                                cx="393.3199124363829"
                                data-j={30}
                                data-val="54.71"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1280"
                                d="M 398.69032576007 148.48649999999998 L 402.8771723014852 148.48649999999998 L 402.8771723014852 69.48779999999988 L 402.8771723014852 148.48649999999998 L 407.06401884290045 148.48649999999998 L 407.06401884290045 197.98199999999997 L 402.8771723014852 197.98199999999997 L 402.8771723014852 229.42619999999988 L 402.8771723014852 197.98199999999997 L 398.69032576007 197.98199999999997 L 398.69032576007 147.98649999999998"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 398.69032576007 148.48649999999998 L 402.8771723014852 148.48649999999998 L 402.8771723014852 69.48779999999988 L 402.8771723014852 148.48649999999998 L 407.06401884290045 148.48649999999998 L 407.06401884290045 197.98199999999997 L 402.8771723014852 197.98199999999997 L 402.8771723014852 229.42619999999988 L 402.8771723014852 197.98199999999997 L 398.69032576007 197.98199999999997 L 398.69032576007 147.98649999999998"
                                data-pathfrom="M 402.8771723014852 197.98199999999997M 398.69032576007 197.98199999999997"
                                cy="148.48649999999998"
                                cx="406.56401884290045"
                                data-j={31}
                                data-val="57.35"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1281"
                                d="M 411.5072029276676 58.42409999999995 L 415.6940494690828 58.42409999999995 L 415.6940494690828 56.48309999999992 L 415.6940494690828 58.42409999999995 L 419.8808960104981 58.42409999999995 L 419.8808960104981 144.41039999999998 L 415.6940494690828 144.41039999999998 L 415.6940494690828 155.27999999999997 L 415.6940494690828 144.41039999999998 L 411.5072029276676 144.41039999999998 L 411.5072029276676 57.92409999999995"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 411.5072029276676 58.42409999999995 L 415.6940494690828 58.42409999999995 L 415.6940494690828 56.48309999999992 L 415.6940494690828 58.42409999999995 L 419.8808960104981 58.42409999999995 L 419.8808960104981 144.41039999999998 L 415.6940494690828 144.41039999999998 L 415.6940494690828 155.27999999999997 L 415.6940494690828 144.41039999999998 L 411.5072029276676 144.41039999999998 L 411.5072029276676 57.92409999999995"
                                data-pathfrom="M 415.6940494690828 144.41039999999998M 411.5072029276676 144.41039999999998"
                                cy="58.42409999999995"
                                cx="419.3808960104981"
                                data-j={32}
                                data-val="61.99"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1282"
                                d="M 424.7513093341851 40.9550999999999 L 428.93815587560033 40.9550999999999 L 428.93815587560033 30.667799999999943 L 428.93815587560033 40.9550999999999 L 433.1250024170156 40.9550999999999 L 433.1250024170156 62.88840000000005 L 428.93815587560033 62.88840000000005 L 428.93815587560033 102.48479999999995 L 428.93815587560033 62.88840000000005 L 424.7513093341851 62.88840000000005 L 424.7513093341851 40.4550999999999"
                                fill="rgba(239,64,60,1)"
                                fillOpacity={1}
                                stroke="#ef403c"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 424.7513093341851 40.9550999999999 L 428.93815587560033 40.9550999999999 L 428.93815587560033 30.667799999999943 L 428.93815587560033 40.9550999999999 L 433.1250024170156 40.9550999999999 L 433.1250024170156 62.88840000000005 L 428.93815587560033 62.88840000000005 L 428.93815587560033 102.48479999999995 L 428.93815587560033 62.88840000000005 L 424.7513093341851 62.88840000000005 L 424.7513093341851 40.4550999999999"
                                data-pathfrom="M 428.93815587560033 62.88840000000005M 424.7513093341851 62.88840000000005"
                                cy="40.9550999999999"
                                cx="432.6250024170156"
                                data-j={33}
                                data-val="61.76"
                                data-barwidth="8.373693082830444"
                              />
                              <path
                                id="SvgjsPath1283"
                                d="M 437.56818650178275 38.04359999999997 L 441.75503304319795 38.04359999999997 L 441.75503304319795 16.498499999999922 L 441.75503304319795 38.04359999999997 L 445.9418795846132 38.04359999999997 L 445.9418795846132 63.85889999999995 L 441.75503304319795 63.85889999999995 L 441.75503304319795 72.01109999999994 L 441.75503304319795 63.85889999999995 L 437.56818650178275 63.85889999999995 L 437.56818650178275 37.54359999999997"
                                fill="rgba(0,183,70,1)"
                                fillOpacity={1}
                                stroke="#00b746"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={1}
                                strokeDasharray={0}
                                className="apexcharts-candlestick-area"
                                data-index={0}
                                clipPath="url(#gridRectMask9fgw67ly)"
                                data-pathto="M 437.56818650178275 38.04359999999997 L 441.75503304319795 38.04359999999997 L 441.75503304319795 16.498499999999922 L 441.75503304319795 38.04359999999997 L 445.9418795846132 38.04359999999997 L 445.9418795846132 63.85889999999995 L 441.75503304319795 63.85889999999995 L 441.75503304319795 72.01109999999994 L 441.75503304319795 63.85889999999995 L 437.56818650178275 63.85889999999995 L 437.56818650178275 37.54359999999997"
                                data-pathfrom="M 441.75503304319795 63.85889999999995M 437.56818650178275 63.85889999999995"
                                cy="38.04359999999997"
                                cx="445.4418795846132"
                                data-j={34}
                                data-val="63.04"
                                data-barwidth="8.373693082830444"
                              />
                            </g>
                            <g
                              id="SvgjsG1248"
                              className="apexcharts-datalabels"
                              data-real data-index={0}
                            />
                          </g>
                          <g id="SvgjsG1287" className="apexcharts-grid-borders">
                            <line
                              id="SvgjsLine1293"
                              x1="-10.85685847840103"
                              y1={0}
                              x2="452.611891521599"
                              y2={0}
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1297"
                              x1="-10.85685847840103"
                              y1="388.2"
                              x2="452.611891521599"
                              y2="388.2"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1319"
                              x1="-10.85685847840103"
                              y1="389.2"
                              x2="452.611891521599"
                              y2="389.2"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeWidth={1}
                              strokeLinecap="butt"
                            />
                          </g>
                          <line
                            id="SvgjsLine1300"
                            x1="-10.85685847840103"
                            y1={0}
                            x2="452.611891521599"
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            id="SvgjsLine1301"
                            x1="-10.85685847840103"
                            y1={0}
                            x2="452.611891521599"
                            y2={0}
                            strokeDasharray={0}
                            strokeWidth={0}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            id="SvgjsG1302"
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG1303"
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            >
                              <text
                                id="SvgjsText1305"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="64.93884431582794"
                                y="417.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#a7abb1"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1306">Jul '16</tspan>
                                <title>Jul '16</title>
                              </text>
                              <text
                                id="SvgjsText1308"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="143.54902427709337"
                                y="417.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={600}
                                fill="#a7abb1"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1309">2017</tspan>
                                <title>2017</title>
                              </text>
                              <text
                                id="SvgjsText1311"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="220.87751652159903"
                                y="417.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#a7abb1"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1312">Jul '17</tspan>
                                <title>Jul '17</title>
                              </text>
                              <text
                                id="SvgjsText1314"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="299.4876964828644"
                                y="417.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={600}
                                fill="#a7abb1"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1315">2018</tspan>
                                <title>2018</title>
                              </text>
                              <text
                                id="SvgjsText1317"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="376.81618872737"
                                y="417.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#a7abb1"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1318">Jul '18</tspan>
                                <title>Jul '18</title>
                              </text>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1337"
                            className="apexcharts-yaxis-annotations"
                          />
                          <g
                            id="SvgjsG1338"
                            className="apexcharts-xaxis-annotations"
                          />
                          <g
                            id="SvgjsG1339"
                            className="apexcharts-point-annotations"
                          />
                          <rect
                            id="SvgjsRect1340"
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fefefe"
                            className="apexcharts-zoom-rect"
                          />
                          <rect
                            id="SvgjsRect1341"
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fefefe"
                            className="apexcharts-selection-rect"
                          />
                        </g>
                      </svg>
                      <div className="apexcharts-tooltip apexcharts-theme-light">
                        <div
                          className="apexcharts-tooltip-title"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-series-group"
                          style={{ order: 1 }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(59, 125, 221)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label" />
                              <span className="apexcharts-tooltip-text-y-value" />
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                        <div
                          className="apexcharts-xaxistooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                      </div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                      <div
                        className="apexcharts-toolbar"
                        style={{ top: 0, right: 3 }}
                      >
                        <div className="apexcharts-zoomin-icon" title="Zoom In">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          </svg>
                        </div>
                        <div className="apexcharts-zoomout-icon" title="Zoom Out">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          </svg>
                        </div>
                        <div
                          className="apexcharts-zoom-icon apexcharts-selected"
                          title="Selection Zoom"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                          >
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                          </svg>
                        </div>
                        <div className="apexcharts-pan-icon" title="Panning">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            fill="#000000"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                          >
                            <defs>
                              <path d="M0 0h24v24H0z" id="a" />
                            </defs>
                            <clipPath id="b">
                              <use overflow="visible" xlinkHref="#a" />
                            </clipPath>
                            <path
                              clipPath="url(#b)"
                              d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"
                            />
                          </svg>
                        </div>
                        <div className="apexcharts-reset-icon" title="Reset Zoom">
                          <svg
                            fill="#000000"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                        </div>
                        <div className="apexcharts-menu-icon" title="Menu">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                          </svg>
                        </div>
                        <div className="apexcharts-menu">
                          <div
                            className="apexcharts-menu-item exportSVG"
                            title="Download SVG"
                          >
                            Download SVG
                          </div>
                          <div
                            className="apexcharts-menu-item exportPNG"
                            title="Download PNG"
                          >
                            Download PNG
                          </div>
                          <div
                            className="apexcharts-menu-item exportCSV"
                            title="Download CSV"
                          >
                            Download CSV
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="card-actions float-end">
                  <div className="dropdown position-relative">
                    <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-more-horizontal align-middle"
                      >
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={19} cy={12} r={1} />
                        <circle cx={5} cy={12} r={1} />
                      </svg>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="card-title mb-0">Markets</h5>
              </div>
              <table className="table table-sm table-striped my-0">
                <thead>
                  <tr>
                    <th>
                      <i className="fas fa-star fa-sm cursor-pointer" />
                    </th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th className="d-none d-xl-table-cell">Volume</th>
                    <th className="d-none d-xl-table-cell">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i className="fas fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>ETH</td>
                    <td className="text-end">0.02309756</td>
                    <td className="d-none d-xl-table-cell text-end">427.563</td>
                    <td className="d-none d-xl-table-cell text-end text-success">
                      +1.91
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>XRP</td>
                    <td className="text-end">0.00002205</td>
                    <td className="d-none d-xl-table-cell text-end">132.691</td>
                    <td className="d-none d-xl-table-cell text-end text-success">
                      +0.64
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>ETC</td>
                    <td className="text-end">0.00077779</td>
                    <td className="d-none d-xl-table-cell text-end">32.982</td>
                    <td className="d-none d-xl-table-cell text-end text-danger">
                      -6.71
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>LTC</td>
                    <td className="text-end">0.00485685</td>
                    <td className="d-none d-xl-table-cell text-end">31.268</td>
                    <td className="d-none d-xl-table-cell text-end text-success">
                      +1.88
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>XMR</td>
                    <td className="text-end">0.00700518</td>
                    <td className="d-none d-xl-table-cell text-end">28.567</td>
                    <td className="d-none d-xl-table-cell text-end text-danger">
                      -1.26
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>BSC</td>
                    <td className="text-end">0.02105473</td>
                    <td className="d-none d-xl-table-cell text-end">25.960</td>
                    <td className="d-none d-xl-table-cell text-end text-success">
                      +0.10
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>ABC</td>
                    <td className="text-end">0.02613303</td>
                    <td className="d-none d-xl-table-cell text-end">21.597</td>
                    <td className="d-none d-xl-table-cell text-end text-success">
                      -3.20
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>TRX</td>
                    <td className="text-end">0.00000165</td>
                    <td className="d-none d-xl-table-cell text-end">14.106</td>
                    <td className="d-none d-xl-table-cell text-end text-danger">
                      -0.61
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>SC</td>
                    <td className="text-end">0.00000026</td>
                    <td className="d-none d-xl-table-cell text-end">9.531</td>
                    <td className="d-none d-xl-table-cell text-end text-success">
                      +13.04
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>OMG</td>
                    <td className="text-end">0.00019483</td>
                    <td className="d-none d-xl-table-cell text-end">8.820</td>
                    <td className="d-none d-xl-table-cell text-end text-success">
                      +3.67
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>CHR</td>
                    <td className="text-end">0.00000223</td>
                    <td className="d-none d-xl-table-cell text-end">7.428</td>
                    <td className="d-none d-xl-table-cell text-end text-danger">
                      -4.21
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>AVA</td>
                    <td className="text-end">0.00003667</td>
                    <td className="d-none d-xl-table-cell text-end">6.863</td>
                    <td className="d-none d-xl-table-cell text-end text-success">
                      +13.60
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>DASH</td>
                    <td className="text-end">0.00825500</td>
                    <td className="d-none d-xl-table-cell text-end">6.693</td>
                    <td className="d-none d-xl-table-cell text-end text-danger">
                      -1.51
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>LINK</td>
                    <td className="text-end">0.00043873</td>
                    <td className="d-none d-xl-table-cell text-end">6.290</td>
                    <td className="d-none d-xl-table-cell text-end text-success">
                      +2.44
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-star fa-sm cursor-pointer" />
                    </td>
                    <td>EOS</td>
                    <td className="text-end">0.00028505</td>
                    <td className="d-none d-xl-table-cell text-end">6.144</td>
                    <td className="d-none d-xl-table-cell text-end text-danger">
                      -1.62
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 col-xxl d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="card-actions float-end">
                  <button className="btn btn-sm btn-light">View all</button>
                </div>
                <h5 className="card-title mb-0">Sell Orders</h5>
              </div>
              <table className="table table-sm table-striped my-0">
                <thead>
                  <tr>
                    <th>Price</th>
                    <th className="d-none d-xl-table-cell">BTC</th>
                    <th>Sum(BTC)</th>
                  </tr>
                </thead>
                <tbody className="text-end">
                  <tr>
                    <td>0.03892501</td>
                    <td className="d-none d-xl-table-cell">1.24864875</td>
                    <td>1.26329659</td>
                  </tr>
                  <tr>
                    <td>0.03893754</td>
                    <td className="d-none d-xl-table-cell">0.19373225</td>
                    <td>1.45702884</td>
                  </tr>
                  <tr>
                    <td>0.03895189</td>
                    <td className="d-none d-xl-table-cell">0.00011222</td>
                    <td>1.45714106</td>
                  </tr>
                  <tr>
                    <td>0.03896593</td>
                    <td className="d-none d-xl-table-cell">0.05366476</td>
                    <td>1.51080582</td>
                  </tr>
                  <tr>
                    <td>0.03897932</td>
                    <td className="d-none d-xl-table-cell">0.30856527</td>
                    <td>1.81937109</td>
                  </tr>
                  <tr>
                    <td>0.03897933</td>
                    <td className="d-none d-xl-table-cell">0.01276398</td>
                    <td>1.83213507</td>
                  </tr>
                  <tr>
                    <td>0.03899180</td>
                    <td className="d-none d-xl-table-cell">0.00029556</td>
                    <td>1.83243063</td>
                  </tr>
                  <tr>
                    <td>0.03899784</td>
                    <td className="d-none d-xl-table-cell">0.08005194</td>
                    <td>1.91248257</td>
                  </tr>
                  <tr>
                    <td>0.03899998</td>
                    <td className="d-none d-xl-table-cell">0.10106578</td>
                    <td>2.01354835</td>
                  </tr>
                  <tr>
                    <td>0.03899999</td>
                    <td className="d-none d-xl-table-cell">0.11699997</td>
                    <td>2.13054832</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="card-actions float-end">
                  <button className="btn btn-sm btn-light">View all</button>
                </div>
                <h5 className="card-title mb-0">Buy Orders</h5>
              </div>
              <table className="table table-sm table-striped my-0">
                <thead>
                  <tr>
                    <th>Price</th>
                    <th className="d-none d-xl-table-cell">BTC</th>
                    <th>Sum(BTC)</th>
                  </tr>
                </thead>
                <tbody className="text-end">
                  <tr>
                    <td>0.03892000</td>
                    <td className="d-none d-xl-table-cell">0.00873616</td>
                    <td>0.00873616</td>
                  </tr>
                  <tr>
                    <td>0.03890500</td>
                    <td className="d-none d-xl-table-cell">2.58305468</td>
                    <td>2.59179084</td>
                  </tr>
                  <tr>
                    <td>0.03890132</td>
                    <td className="d-none d-xl-table-cell">2.19999989</td>
                    <td>4.79179073</td>
                  </tr>
                  <tr>
                    <td>0.03890053</td>
                    <td className="d-none d-xl-table-cell">0.00322305</td>
                    <td>4.79501378</td>
                  </tr>
                  <tr>
                    <td>0.03889706</td>
                    <td className="d-none d-xl-table-cell">0.60738409</td>
                    <td>5.40239787</td>
                  </tr>
                  <tr>
                    <td>0.03888117</td>
                    <td className="d-none d-xl-table-cell">0.49926179</td>
                    <td>5.90165966</td>
                  </tr>
                  <tr>
                    <td>0.03885500</td>
                    <td className="d-none d-xl-table-cell">0.03877729</td>
                    <td>5.94043695</td>
                  </tr>
                  <tr>
                    <td>0.03884325</td>
                    <td className="d-none d-xl-table-cell">0.00798318</td>
                    <td>5.94842013</td>
                  </tr>
                  <tr>
                    <td>0.03883474</td>
                    <td className="d-none d-xl-table-cell">0.29455407</td>
                    <td>6.24297420</td>
                  </tr>
                  <tr>
                    <td>0.03881616</td>
                    <td className="d-none d-xl-table-cell">0.00970404</td>
                    <td>6.25267824</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
      </div>
    )
}
export default Dashboard;