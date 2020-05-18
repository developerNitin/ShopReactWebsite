import React from "react";
import "../css/sub-css/header.css";

function Header() {
  return (
    <div className="main-header">
      <div className="sub-main-header-div">
        <div className="header-logo">
          <a></a>
        </div>
        <div className="header-left-section">
          <div className="categories-in-header">
            <a>
              <svg viewBox="0 0 45.7 45.6">
                <title>Categories</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <rect class="cls-1" width="11.4" height="11.4" />
                    <rect class="cls-1" y="17.1" width="11.4" height="11.4" />
                    <rect class="cls-1" y="34.2" width="11.4" height="11.4" />
                    <rect class="cls-1" x="17.1" width="11.4" height="11.4" />
                    <rect
                      class="cls-1"
                      x="17.1"
                      y="17.1"
                      width="11.4"
                      height="11.4"
                    />
                    <rect
                      class="cls-1"
                      x="17.1"
                      y="34.2"
                      width="11.4"
                      height="11.4"
                    />
                    <rect class="cls-1" x="34.3" width="11.4" height="11.4" />
                    <rect
                      class="cls-1"
                      x="34.3"
                      y="17.1"
                      width="11.4"
                      height="11.4"
                    />
                    <rect
                      class="cls-1"
                      x="34.3"
                      y="34.2"
                      width="11.4"
                      height="11.4"
                    />
                  </g>
                </g>
              </svg>{" "}
              Categories
            </a>
          </div>
          <div className="search-form-in-header">
            <form>
              <input placeholder="Search for anything"></input>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 49.54 49.55"
                >
                  <title>Asset 120</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_2-2" data-name="Layer 2">
                      <path
                        class="cls-1"
                        d="M38.61,33.61a21.22,21.22,0,1,0-5.4,5.29L43.86,49.55h5.68V44.28ZM21.27,35A13.75,13.75,0,1,1,35,21.28,13.75,13.75,0,0,1,21.27,35Z"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="header-right-section">
          <div>
            <div className="deal-of-the-day">
              <a>Deal of The Day</a>
            </div>
          </div>
          <div>
            <div className="sell-on-shop">
              <a>Sell on Shop</a>
            </div>
          </div>
          <div className="header-right-section-divider"></div>

          <div className="orders-on-header">
            <a>
              Orders{" "}
              <svg viewBox="0 0 65.37 42.22">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <path
                      class="cls-1"
                      d="M63.93,13,36.14,40.78a4.86,4.86,0,0,1-6.91,0L1.44,13a4.89,4.89,0,0,1,0-6.93L6.06,1.44a4.89,4.89,0,0,1,6.93,0l19.7,19.7L52.38,1.44a4.89,4.89,0,0,1,6.93,0l4.62,4.62A4.89,4.89,0,0,1,63.93,13Z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="contact-on-header">
            <a>
              <svg viewBox="0 0 47 47">
                <title>Contact</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <path
                      class="cls-1"
                      d="M5.63,47a3.55,3.55,0,0,1-3.48-2.76L.09,35.3a3.59,3.59,0,0,1,2.06-4.08l9.64-4.13a3.59,3.59,0,0,1,4.16,1l3.51,4.29A30.32,30.32,0,0,0,32.41,19.45l-4.29-3.51a3.56,3.56,0,0,1-1-4.16l4.12-9.62A3.58,3.58,0,0,1,35.3.09l8.94,2.06A3.55,3.55,0,0,1,47,5.63,41.42,41.42,0,0,1,5.63,47Zm7.56-17.2a.59.59,0,0,0-.22.05L3.35,34a.59.59,0,0,0-.34.66l2.07,8.94a.56.56,0,0,0,.55.43A38.41,38.41,0,0,0,44,5.63a.56.56,0,0,0-.43-.55h0L34.63,3a.58.58,0,0,0-.65.33L29.86,13a.55.55,0,0,0,.15.65l6.12,5-.49,1.06a33.31,33.31,0,0,1-15.95,16l-1.06.49-5-6.11A.58.58,0,0,0,13.19,29.8Z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="notification-on-header">
            <a>
              <svg viewBox="0 0 52.92 51.18">
                <title>Notifications</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <path
                      class="cls-1"
                      d="M26.46,51.18a9.35,9.35,0,0,1-9.13-7.62H0L10.55,22.9v-7a15.91,15.91,0,1,1,31.82,0v7L52.92,43.56H35.59A9.35,9.35,0,0,1,26.46,51.18ZM4.9,40.56H20.15l0,1.47a6.28,6.28,0,0,0,12.56,0l0-1.47H48L39.37,23.62V15.91a12.91,12.91,0,1,0-25.82,0v7.71Z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="kart-on-header">
            <a>
              <svg viewBox="0 0 50.27 50.86">
                <title>Kart</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <path
                      class="cls-1"
                      d="M15.92,36.88a2.41,2.41,0,0,1-2.36-1.94L8.13,8.85H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0H15.57l1.9,9.13H47.85a2.42,2.42,0,0,1,2.35,3L45.36,31.78a2.45,2.45,0,0,1-2.07,1.83L16.22,36.86ZM4,3A1,1,0,0,0,3,4v.85a1,1,0,0,0,1,1h6.57l5.82,28,26.15-3.15,4.57-18.54H15L13.13,3Z"
                    />
                    <path
                      class="cls-1"
                      d="M20.29,50.86a5.54,5.54,0,1,1,5.54-5.54A5.55,5.55,0,0,1,20.29,50.86Zm0-8.07a2.54,2.54,0,1,0,2.54,2.53A2.54,2.54,0,0,0,20.29,42.79Z"
                    />
                    <path
                      class="cls-1"
                      d="M39.2,50.86a5.54,5.54,0,1,1,5.53-5.54A5.55,5.55,0,0,1,39.2,50.86Zm0-8.07a2.54,2.54,0,1,0,2.53,2.53A2.54,2.54,0,0,0,39.2,42.79Z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="user-profile-in-header">
            <a>
              <span>NB</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
