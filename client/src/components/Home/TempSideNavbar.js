import React from 'react'
import './TempSideNavbar.css'
import TRX_SVG from "./Asset/trx_icon.svg";
import ACD_SVG from "./Asset/account_details.svg";
import E_CARD_SVG from "./Asset/e_cards_icon.svg";
import Q_T_SVG from "./Asset/quick_transfer.svg";
import H_ASSIT from "./Asset/24_7_assistance.svg";
import BANK_LOGO from "./Asset/Bankers_logo.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
// import BANK_LOGO from './Asset/Bankers_logo.svg'

function TempSideNavbar() {
  const [loading, setLoading] = useState(true);
  const [navlist, setNavlist] = useState([]);
  useEffect(() => {
    const navbar_json = [
      {
        "id": "Transactions",
        "text": "Transactions",
        "vector-asset": TRX_SVG,
        "vector-asset-color": "#ccff00",
        "background-color": "purple",
        "text-color": "purpleText",
        "is_drop": true,
        "href": "/home",
        "dropdown_menu": [
          {
            "text": "RTGS",
            "vector-asset": "link",
            "text-color": "green",
            "background-color": "purple",
            "href": "link to the page"
          },
          {
            "text": "NEFT",
            "vector-asset": "link",
            "text-color": "green",
            "background-color": "purple",
            "href": "link to the page"
          }
        ]
      },
      {
        "id": "ACDetails",
        "text": "Your Accounts",
        "vector-asset": ACD_SVG,
        "vector-asset-color": "#ccff00",
        "background-color": "blue",
        "text-color": "blueText",
        "href": "/home",
        "is_drop": true,
        "dropdown_menu": [
          {
            "text": "Jenil Jignesh (XX234)",
            "vector-asset": "link",
            "text-color": "green",
            "background-color": "purple",
            "href": "link to the page"
          },
          {
            "text": "Mahendra corp (XX212)",
            "vector-asset": "link",
            "text-color": "green",
            "background-color": "purple",
            "href": "link to the page"
          }
        ]
      },
      {
        "id": "ecard",
        "text": "Your E-cards",
        "vector-asset": E_CARD_SVG,
        "vector-asset-color": "#ccff00",
        "background-color": "purple",
        "text-color": "purpleText",
        "href": "/home",
        "is_drop": true,
        "dropdown_menu": [
          {
            "text": "jenils",
            "vector-asset": "",
            "text-color": "green",
            "background-color": "purple",
            "href": "link to the page"
          },
          {
            "text": "Your ecards are good",
            "vector-asset": "",
            "text-color": "green",
            "background-color": "purple",
            "href": "link to the page"
          }
        ]
      },
      {
        "id": "QUICKT",
        "text": "Quick Transfer",
        "vector-asset": Q_T_SVG,
        "vector-asset-color": "#ccff00",
        "background-color": "blue",
        "text-color": "blueText",
        "href": "/home",
        "is_drop": false,
        "dropdown_menu": []
      },
      {
        "id": "assistance",
        "text": "24 X 7 Assistance",
        "vector-asset": H_ASSIT,
        "vector-asset-color": "#ccff00",
        "background-color": "purple",
        "text-color": "purpleText",
        "href": "/login",
        "is_drop": false,
        "dropdown_menu": []
      }

    ];
    setNavlist(navbar_json);
    setLoading(false);
  }, []);
  const styles = {
    "accordian": {
      "background-color": "#212121",
      "color": "#d7d9db",
      "border": "0px solid black",
      "padding": "",
      "text-decoration": "none",
      "display": "block",
      "outline": "0px solid #111",
      "border-radius": "0px",
      "width": "100%",
      "text-align": "left",
      "cursor": "pointer",
      "font-size": "16px",
      "font-weight": "lighter"      // "outline": "none"
    },
    "acc-border": {
      "border": "0px solid black"
    }, "dropbtn": {
      "float": "right"
    },
    "accordian-item": {
      "border": "0px",
      "font-size": "14px",
      "font-weight": "lighter"
    }
  }

  return (
    <div className="sidenav">
      <a href="/" class="d-flex heading_logo align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img className="Headlogo" src={BANK_LOGO} />
        <span class="fs-3 heading_sidenav">Bankers</span>
      </a>
      {navlist.map((e) => {
        return (
          <div class="accordion accordian-flush" id="accordionFlushExample" >
            <div class="accordion-item" style={styles["accordian-item"]}>
              <h3 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle={e["is_drop"] ? "collapse" : "tp"}
                  data-bs-target={"#" + e["id"]}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={styles["accordian"]}
                >
                  {e["text"]}
                  {e["is_drop"] ?
                    <i
                      class="fas fa-chevron-down float-right"
                      style={styles["dropbtn"]}
                    ></i> : ""
                  }
                </button>
              </h3>
              <div
                id={e["id"]}
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {/* <ul> */}
                  {e["dropdown_menu"].map((e1) => {
                    return (<>
                      <div className="partition">
                        {e1["text"]}<br />
                      </div>
                    </>)
                  })}
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </div>);
      })}
      {/* <a href="#contact">Search</a> */}
    </div>
  );
}

export default TempSideNavbar
