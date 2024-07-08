import * as React from "react";
import axios from "axios";
import "../styles/register.sass";

let _this: any;
export default class Register extends React.Component {
  constructor(props: any) {
    super(props);

    _this = this;
  }
  state = {
    expand: true,
    email: "",
    password: "",
    isEnabledLoginButton: false,
    isDisplayLoading: false,
    errorMessage: "",
  };

  emailChange = (e: any) => {
    this.setState({
      email: e,
      isEnabledLoginButton: this.state.password && e,
    });
  };

  passwordChange = (e: any) => {
    this.setState({
      password: e,
      isEnabledLoginButton: this.state.email && e,
    });
  };

  inputsKeyUp = (e: any) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      if (this.state.isEnabledLoginButton) {
        _this.clickInputButton(null);
      }
    }
  };

  clickInputButton = (e: any) => {
    let input = {
      Email: this.state.email,
      Password: this.state.password,
    };
    this.setState({ errorMessage: "", isDisplayLoading: true });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: input,
    };

    axios
      .request(config)
      .then((response) => {
        debugger;
        if (response.data.status) {
          _this.setState({
            errorMessage: "",
            isDisplayLoading: false,
          });
          document.cookie = `token=${response.data.account.token}`;
          document.cookie = `fullname=${response.data.account.firstname} ${response.data.account.lastname} `;
          window.location.href = "/#/start";
        } else {
          _this.setState({
            errorMessage: "نام کاربری یا رمز عبور اشتباه است",
            isDisplayLoading: false,
          });
        }
      })
      .catch((error) => {
        _this.setState({
          errorMessage: "نام کاربری یا رمز عبور اشتباه است",
          isDisplayLoading: false,
        });
      });
  };

  goToLoginPage = () => {
    location.href = "/#/login1";
  };

  render() {
    return (
      <div className="register1-container">
        <div className="register1">
          <div className="register1-container">
            <h1>ثبت نام</h1>
            <input type="text" placeholder="نام" />
            <input type="text" placeholder="نام خانوادگی" />
            <input type="email" placeholder="ایمیل" />
            <input type="password" placeholder="رمز عبور" />
            <input type="password" placeholder="تکرار رمز عبور" />
            <br />
            <button>ثبت نام</button>
            <ul>
              <li>
                <i className="fab fa-facebook-f fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-twitter fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-github fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </li>
            </ul>
            <div className="clearfix"></div>
            <span className="copyright">&copy;2019</span>
          </div>
        </div>
        <div className="welcome1">
          <div className="welcome1-container">
            <i className="fas fa-user-plus fa-5x"></i>
            <h2>خوش آمدید</h2>
            <p>با ما خریدی به یاد ماندنی را ثبت کنید</p>
            <button onClick={this.goToLoginPage}>
              ورود<i className="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
