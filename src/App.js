import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import logo1 from "../images/1.svg";
import logo2 from "../images/2.svg";
import logo3 from "../images/3.svg";

export default function App() {
  let [platformupi, setplatformupi] = useState("5%");
  let [platformupicalc, setplatformupicalc] = useState(0);
  let [upigst, setupigst] = useState(0);
  let [upitotal, setupitotal] = useState(0);

  let [platformpaytm, setplatformpaytm] = useState("10%");
  let [platformpaytmcalc, setplatformpaytmcalc] = useState(0);
  let [paytmgst, setpaytmgst] = useState(0);
  let [paytmtotal, setpaytmtotal] = useState(0);

  let [platformamazon, setplatformamazon] = useState("6%");
  let [platformamazoncalc, setplatformamazoncalc] = useState(0);
  let [amazongst, setamazongst] = useState(0);
  let [amazontotal, setamazontotal] = useState(0);

  let [base, setbase] = useState(0);
  let gst = "18%";

  function calc() {
    var amount = event.target.value;
    setbase(amount);

    //upi
    platformupicalc = (amount * 0.05).toFixed(2);
    upigst = (platformupicalc * 0.18).toFixed(2);
    upitotal = amount - platformupicalc - upigst;
    setplatformupicalc(platformupicalc);
    setupitotal(upitotal);
    setupigst(upigst);

    platformamazoncalc = amount * (0.06).toFixed(2);
    amazongst = (platformamazoncalc * 0.18).toFixed(2);
    amztotal = amount - platformamazoncalc - amazongst;
    setplatformamazoncalc(platformamazoncalc);
    setamazongst(amazongst);
    setamazontotal(amztotal);

    platformpaytmcalc = amount * (0.1).toFixed(2);
    paytmgst = (platformpaytmcalc * 0.18).toFixed(2);
    paytmtotal = amount - platformpaytmcalc - paytmgst;
    setplatformpaytmcalc(platformpaytmcalc);
    setpaytmgst(paytmgst);
    setpaytmtotal(paytmtotal);
    //console.log("ASdasd");
  }
  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home" fixed="top">
            <img
              src="https://anonpe.com/img/2022logo.svg"
              width="150"
              height="60"
              className="d-inline-block align-top"
              alt="Anonpe"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://anonpe.com">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header">
        <h1>Pricing Calculator</h1>
      </div>
      <div className="hoax">
        See the math behind the price for our service. Our platform earns only
        if our merchant earns. We charge only on credits withdrawal else
        everything is <span class="notice">FREE</span>.
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Withdrawal Amount"
          onChange={calc}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
      </div>
      <div className="payoutmodes">
        <div className="cards">
          <div className="payouttitle">
            <img src={logo1} className="logo" alt="UPI/IMPS" />
          </div>
          <div className="dedx">
            <div title="reasonofdeduction">Base Amount:</div>

            <div title="amountdeducted">INR {base}</div>
          </div>
          <div className="dedx">
            <div title="reasonofdeduction">Platform Fees ({platformupi}):</div>

            <div title="amountdeducted">- INR {platformupicalc}</div>
          </div>
          <div className="dedx">
            <div title="reasonofdeduction">GST ({gst}):</div>

            <div title="amountdeducted">- INR {upigst}</div>
          </div>
          <div className="dedx blue">
            <div title="reasonofdeduction"></div>

            <div title="amountdeducted">INR {upitotal}</div>
          </div>
        </div>
        <div className="cards">
          <div className="payouttitle">
            <img src={logo2} className="logo" alt="Paytm wallet" />
          </div>
          <div className="dedx">
            <div title="reasonofdeduction">Base Amount:</div>

            <div title="amountdeducted">INR {base}</div>
          </div>
          <div className="dedx">
            <div title="reasonofdeduction">
              Platform Fees ({platformpaytm}):
            </div>

            <div title="amountdeducted">- INR {platformpaytmcalc}</div>
          </div>
          <div className="dedx">
            <div title="reasonofdeduction">GST ({gst}):</div>

            <div title="amountdeducted">- INR {paytmgst}</div>
          </div>
          <div className="dedx blue">
            <div title="reasonofdeduction"></div>

            <div title="amountdeducted">INR {paytmtotal}</div>
          </div>
        </div>
        <div className="cards">
          <div className="payouttitle">
            <img src={logo3} className="logo" alt="Amazon wallet" />
          </div>
          <div className="dedx">
            <div title="reasonofdeduction">Base Amount:</div>

            <div title="amountdeducted">INR {base}</div>
          </div>
          <div className="dedx">
            <div title="reasonofdeduction">
              Platform Fees ({platformamazon}):
            </div>

            <div title="amountdeducted">- INR {platformamazoncalc}</div>
          </div>
          <div className="dedx">
            <div title="reasonofdeduction">GST ({gst}):</div>

            <div title="amountdeducted">- INR {amazongst}</div>
          </div>
          <div className="dedx blue">
            <div title="reasonofdeduction"></div>

            <div title="amountdeducted">INR {amazontotal}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
