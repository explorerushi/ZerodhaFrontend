import React from "react";
import { Link } from "react-router-dom";


function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "200px", height: "50px" }}
          />
          <br />
          <p className="text-small text-muted text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "200px", height: "50px" }}
          />
          <br />
          <p className="text-small text-muted text-center">
            Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "200px", height: "50px" }}
          />
          <br />
          <p className="text-small text-muted text-center">
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "200px", height: "50px" }}
          />
          <br />
          <p className="text-small text-muted text-center">
            Systematic trading platform
that allows you to create and backtest
strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "200px", height: "50px" }}
          />
          <br />
          <p className="text-small text-muted text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibulllogo.svg"
            style={{ width: "200px", height: "50px" }}
          />
          <br />
          <p className="text-small text-muted text-center">
          Options trading platform that lets you
          create strategies, analyze positions, and examine
          data points like open interest, FII/DII, and more.

          </p>
        </div>
        <Link
  to="/signup"
  className="p-2 btn btn-primary fs-5 mb-5"
  style={{ width: "20%", margin: "0 auto" }}
>
  Signup Now
</Link>
      </div>
    </div>
  );
}

export default Universe;
