import * as React from "react";
import axios from "axios";
import { getCookie, setCookie } from "../utils/util";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/main.css";
import "./../styles/fluid-header.less";
import "./../styles/special-offer.less";

interface StartState {
  activeKey: string;
  expand: boolean;
  isShowProfilePanel: boolean;
  userFullname: string;
}
interface StartProps {}

let _this: any;
export default class Start extends React.Component<StartProps, StartState> {
  constructor(props: StartProps) {
    super(props);
    _this = this;

    this.state = {
      activeKey: "home",
      expand: true,
      isShowProfilePanel: false,
      userFullname: getCookie("fullname"),
    };

    let token = getCookie("token");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/user/getall",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        debugger;
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });
  }

  componentDidMount = () => {
    document.body.addEventListener("click", (e) => this.bodyClick(e));
  };
  componentWillUnmount = () => {
    document.body.removeEventListener("click", (e) => this.bodyClick(e));
  };

  bodyClick = (e: any) => {
    // debugger;
    // if (
    //   e.target.attributes["name"] &&
    //   e.target.attributes["name"].value != "profile-arrow"
    // )
    // this.setState({ isShowProfilePanel: false });
  };

  logoutClick = () => {
    setCookie("token", "", 1);
    window.location.href = "/#/login";
  };

  profileIconMouseUp = (e: any) => {
    this.setState({ isShowProfilePanel: !this.state.isShowProfilePanel });
  };

  changeActiveKey = (e: any) => {
    debugger;
    this.setState({ activeKey: e });
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            فروشگاه اینترنتی چوبا
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  صفحه اصلی <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ویژگی‌ها
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ارتباط با ما
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  درباره ما
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <header className="bg-primary text-white text-center py-5 header-div">
          <div className="container">
            <h1 className="display-4">Welcome to Our Website</h1>
            <p className="lead">A great place to put your catchy tagline</p>
          </div>
        </header>

        <section id="section-small-boxes" className="order-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 col-sm-6">
                <div className="small-box">
                  <a href="https://www.golsetan.com/same-day-delivery/">
                    <img
                      alt="سفارش گل و گیاه برای امروز"
                      data-src="https://www.golsetan.com/wp-content/uploads/2021/09/same-day-dlower-delivery4h.jpg"
                      className=" lazyloaded"
                      src="https://www.golsetan.com/wp-content/uploads/2021/09/same-day-dlower-delivery4h.jpg"
                    />
                    <h3>ارسال امروز</h3>
                  </a>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="small-box">
                  <a href="https://www.golsetan.com/product-category/occasion/birthday/">
                    <img
                      alt="خرید گل تولد"
                      data-src="https://www.golsetan.com/wp-content/uploads/2022/06/Birthday-Flower.jpg"
                      className=" lazyloaded"
                      src="https://www.golsetan.com/wp-content/uploads/2022/06/Birthday-Flower.jpg"
                    />
                    <h3>گل تولد</h3>
                  </a>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="small-box">
                  <a href="https://www.golsetan.com/product-category/plants/huge-plant/">
                    <img
                      alt="خرید گیاهان آپارتمانی سایز بزرگ"
                      data-src="https://www.golsetan.com/wp-content/uploads/2022/06/Larg-HousePlant.jpg"
                      className=" lazyloaded"
                      src="https://www.golsetan.com/wp-content/uploads/2022/06/Larg-HousePlant.jpg"
                    />
                    <h3>گیاه سایز بزرگ</h3>
                  </a>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="small-box">
                  <a href="https://www.golsetan.com/product-category/luxury-flower/">
                    <img
                      alt="خرید گل و گیاه لاکچری"
                      data-src="https://www.golsetan.com/wp-content/uploads/2021/01/luxury-flower-and-plant.jpg"
                      className=" lazyloaded"
                      src="https://www.golsetan.com/wp-content/uploads/2021/01/luxury-flower-and-plant.jpg"
                    />
                    <h3>لاکچری</h3>
                  </a>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="small-box">
                  <a href="https://www.golsetan.com/product-category/plants/">
                    <img
                      alt="خرید گیاه آپارتمانی"
                      data-src="https://www.golsetan.com/wp-content/uploads/2022/06/Indoor-Plant.jpg"
                      className=" lazyloaded"
                      src="https://www.golsetan.com/wp-content/uploads/2022/06/Indoor-Plant.jpg"
                    />
                    <h3>گیاه آپارتمانی</h3>
                  </a>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="small-box">
                  <a href="https://www.golsetan.com/product-category/flowers/rose/">
                    <img
                      alt="خرید گل رز"
                      data-src="https://www.golsetan.com/wp-content/uploads/2021/01/rose-flowers.jpg"
                      className=" lazyloaded"
                      src="https://www.golsetan.com/wp-content/uploads/2021/01/rose-flowers.jpg"
                    />
                    <h3>گل رز</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 main-div">
                <h2>Main Content</h2>
                <p>
                  This is the main content area. You can add more content here
                  as per your needs.
                </p>
              </div>
              <div className="col-md-4">
                <h2>Sidebar</h2>
                <p>
                  This is the sidebar area. You can add additional information
                  or links here.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-light text-center py-4">
          <div className="container">
            <p className="m-0">© 2024 Your Website. All Rights Reserved.</p>
          </div>
        </footer>
      </>
    );
  }
}
